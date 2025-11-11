import React, { useState } from 'react';
import './Events.css';

const Events = () => {
  const [filter, setFilter] = useState('all'); // all, events, news
  
  const items = [
    {
      id: 1,
      type: 'event',
      title: 'Заседание Совета ректоров вузов ДФО',
      date: '15 ноября 2024',
      image: 'https://via.placeholder.com/600x350/1e4976/FFFFFF?text=Заседание',
      description: 'Состоялось очередное заседание Совета ректоров вузов Дальневосточного федерального округа. На повестке дня были рассмотрены вопросы развития научного потенциала региона и укрепления межвузовского сотрудничества.',
    },
    {
      id: 2,
      type: 'news',
      title: 'Новое соглашение о сотрудничестве',
      date: '10 ноября 2024',
      image: 'https://via.placeholder.com/600x350/1e4976/FFFFFF?text=Соглашение',
      description: 'Подписано важное соглашение между вузами Дальневосточного федерального округа о совместных научных исследованиях и обмене студентами.',
    },
    {
      id: 3,
      type: 'event',
      title: 'Международная конференция по образованию',
      date: '5 ноября 2024',
      image: 'https://via.placeholder.com/600x350/1e4976/FFFFFF?text=Конференция',
      description: 'Проведена масштабная международная конференция, посвященная современным тенденциям в высшем образовании. В мероприятии приняли участие представители ведущих университетов.',
    },
    {
      id: 4,
      type: 'news',
      title: 'Новая программа поддержки молодых ученых',
      date: '1 ноября 2024',
      image: 'https://via.placeholder.com/600x350/1e4976/FFFFFF?text=Программа',
      description: 'Совет ректоров утвердил новую программу поддержки молодых ученых Дальневосточного федерального округа. Программа предусматривает гранты на научные исследования.',
    },
    {
      id: 5,
      type: 'event',
      title: 'Круглый стол по цифровизации образования',
      date: '25 октября 2024',
      image: 'https://via.placeholder.com/600x350/1e4976/FFFFFF?text=Круглый+стол',
      description: 'Проведен круглый стол с участием руководителей IT-подразделений вузов по вопросам внедрения цифровых технологий в образовательный процесс.',
    },
    {
      id: 6,
      type: 'news',
      title: 'Результаты конкурса студенческих проектов',
      date: '20 октября 2024',
      image: 'https://via.placeholder.com/600x350/1e4976/FFFFFF?text=Конкурс',
      description: 'Подведены итоги ежегодного конкурса студенческих проектов. Победители получили гранты на реализацию своих инициатив.',
    },
  ];
  
  const filteredItems = filter === 'all' 
    ? items 
    : items.filter(item => item.type === filter);

  return (
    <div className="events">
      <h1 className="page-title">Мероприятия и новости</h1>
      
      <div className="filter-buttons">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Все
        </button>
        <button 
          className={`filter-btn ${filter === 'event' ? 'active' : ''}`}
          onClick={() => setFilter('event')}
        >
          Мероприятия
        </button>
        <button 
          className={`filter-btn ${filter === 'news' ? 'active' : ''}`}
          onClick={() => setFilter('news')}
        >
          Новости
        </button>
      </div>
      
      <div className="events-grid">
        {filteredItems.map(item => (
          <article key={item.id} className="event-card">
            <div className="event-image">
              <img src={item.image} alt={item.title} />
              <span className={`event-badge ${item.type}`}>
                {item.type === 'event' ? 'Мероприятие' : 'Новость'}
              </span>
            </div>
            <div className="event-content">
              <p className="event-date">{item.date}</p>
              <h2 className="event-title">{item.title}</h2>
              <p className="event-description">{item.description}</p>
              <button className="read-more">Читать полностью</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Events;

