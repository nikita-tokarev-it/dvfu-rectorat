import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AdminLayout from './components/AdminLayout/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Documents from './pages/Documents/Documents';
import Events from './pages/Events/Events';
import Press from './pages/Press/Press';
import Contacts from './pages/Contacts/Contacts';
import Login from './pages/Login/Login';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import EventsManager from './pages/Admin/EventsManager/EventsManager';
import EventForm from './pages/Admin/EventsManager/EventForm';
import PressManager from './pages/Admin/PressManager/PressManager';
import DocumentsManager from './pages/Admin/DocumentsManager/DocumentsManager';
import UsersManager from './pages/Admin/UsersManager/UsersManager';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/documents" element={<Layout><Documents /></Layout>} />
        <Route path="/events" element={<Layout><Events /></Layout>} />
        <Route path="/press" element={<Layout><Press /></Layout>} />
        <Route path="/contacts" element={<Layout><Contacts /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />

        {/* Admin routes */}
        <Route path="/admin" element={
          <ProtectedRoute allowedRoles={['editor', 'admin']}>
            <AdminLayout><Dashboard /></AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/events" element={
          <ProtectedRoute allowedRoles={['editor', 'admin']}>
            <AdminLayout><EventsManager /></AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/events/new" element={
          <ProtectedRoute allowedRoles={['editor', 'admin']}>
            <AdminLayout><EventForm /></AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/events/:id/edit" element={
          <ProtectedRoute allowedRoles={['editor', 'admin']}>
            <AdminLayout><EventForm /></AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/press" element={
          <ProtectedRoute allowedRoles={['editor', 'admin']}>
            <AdminLayout><PressManager /></AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/documents" element={
          <ProtectedRoute allowedRoles={['editor', 'admin']}>
            <AdminLayout><DocumentsManager /></AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/users" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminLayout><UsersManager /></AdminLayout>
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
