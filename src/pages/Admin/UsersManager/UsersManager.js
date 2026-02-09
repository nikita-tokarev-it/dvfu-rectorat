import React, { useState, useEffect } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from '../../../api/users';
import { useAuth } from '../../../context/AuthContext';
import '../EventsManager/EventsManager.css';

const UsersManager = () => {
  const { user: currentUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    role: 'editor',
  });

  const loadUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      console.error('Ошибка загрузки:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadUsers(); }, []);

  const handleDelete = async (id, username) => {
    if (id === currentUser.id) {
      alert('Нельзя удалить самого себя');
      return;
    }
    if (!window.confirm(`Удалить пользователя "${username}"?`)) return;
    try {
      await deleteUser(id);
      setUsers(users.filter(u => u.id !== id));
    } catch (err) {
      alert(err.response?.data?.error || 'Ошибка удаления');
    }
  };

  const openCreate = () => {
    setEditItem(null);
    setForm({ username: '', email: '', password: '', role: 'editor' });
    setShowForm(true);
  };

  const openEdit = (item) => {
    setEditItem(item);
    setForm({ username: item.username, email: item.email, password: '', role: item.role });
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editItem) {
        const data = { ...form };
        if (!data.password) delete data.password;
        const updated = await updateUser(editItem.id, data);
        setUsers(users.map(u => u.id === editItem.id ? updated : u));
      } else {
        const created = await createUser(form);
        setUsers([...users, created]);
      }
      setShowForm(false);
      setEditItem(null);
    } catch (err) {
      alert(err.response?.data?.error || 'Ошибка сохранения');
    }
  };

  const roleLabels = { admin: 'Администратор', editor: 'Редактор' };

  if (loading) return <div className="admin-loading">Загрузка...</div>;

  return (
    <div className="users-manager">
      <div className="manager-header">
        <h1 className="admin-page-title">Пользователи</h1>
        <button className="add-btn" onClick={openCreate}>+ Добавить</button>
      </div>

      {showForm && (
        <div className="inline-form-wrapper">
          <form onSubmit={handleSubmit} className="admin-form">
            <h3>{editItem ? 'Редактировать пользователя' : 'Новый пользователь'}</h3>
            <div className="form-group">
              <label>Имя пользователя</label>
              <input type="text" name="username" value={form.username} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>{editItem ? 'Новый пароль (оставьте пустым, чтобы не менять)' : 'Пароль'}</label>
              <input type="password" name="password" value={form.password} onChange={handleChange} required={!editItem} />
            </div>
            <div className="form-group">
              <label>Роль</label>
              <select name="role" value={form.role} onChange={handleChange}>
                <option value="editor">Редактор</option>
                <option value="admin">Администратор</option>
              </select>
            </div>
            <div className="form-actions">
              <button type="submit" className="save-btn">Сохранить</button>
              <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>Отмена</button>
            </div>
          </form>
        </div>
      )}

      <div className="admin-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Имя пользователя</th>
              <th>Email</th>
              <th>Роль</th>
              <th>Дата создания</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`type-badge ${user.role}`}>
                    {roleLabels[user.role] || user.role}
                  </span>
                </td>
                <td>{new Date(user.createdAt).toLocaleDateString('ru-RU')}</td>
                <td className="actions-cell">
                  <button className="edit-btn" onClick={() => openEdit(user)}>Изменить</button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(user.id, user.username)}
                    disabled={user.id === currentUser.id}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManager;
