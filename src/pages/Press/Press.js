import React, { useState } from 'react';
import './Press.css';

const Press = () => {
  const [activeTab, setActiveTab] = useState('releases');
  
  const pressReleases = [
    { id: 1, title: 'Итоги заседания Совета ректоров ДФО', date: '15.11.2024', content: 'Краткое описание пресс-релиза...' },
    { id: 2, title: 'Новая программа развития образования', date: '10.11.2024', content: 'Краткое описание пресс-релиза...' },
    { id: 3, title: 'Подписание соглашения о сотрудничестве', date: '05.11.2024', content: 'Краткое описание пресс-релиза...' },
  ];
  
  const announcements = [
    { id: 1, title: 'Предстоящее заседание Совета ректоров', date: '25.11.2024', content: 'Информация о предстоящем мероприятии...' },
    { id: 2, title: 'Международная конференция', date: '01.12.2024', content: 'Анонс международной конференции...' },
  ];
  
  const photos = [
    { id: 1, title: 'Заседание Совета ректоров', date: '15.11.2024', image: 'https://via.placeholder.com/400x300/1e4976/FFFFFF?text=Фото+1' },
    { id: 2, title: 'Подписание соглашения', date: '10.11.2024', image: 'https://via.placeholder.com/400x300/1e4976/FFFFFF?text=Фото+2' },
    { id: 3, title: 'Конференция по образованию', date: '05.11.2024', image: 'https://via.placeholder.com/400x300/1e4976/FFFFFF?text=Фото+3' },
    { id: 4, title: 'Круглый стол', date: '01.11.2024', image: 'https://via.placeholder.com/400x300/1e4976/FFFFFF?text=Фото+4' },
  ];
  
  const videos = [
    { id: 1, title: 'Репортаж с заседания Совета', date: '15.11.2024', thumbnail: 'https://via.placeholder.com/400x250/1e4976/FFFFFF?text=Видео+1' },
    { id: 2, title: 'Интервью с председателем', date: '10.11.2024', thumbnail: 'https://via.placeholder.com/400x250/1e4976/FFFFFF?text=Видео+2' },
  ];

  return (
    <div className="press">
      <h1 className="page-title">Для прессы</h1>
      
      <div className="tabs">
        <button 
          className={`tab-button ${activeTab === 'releases' ? 'active' : ''}`}
          onClick={() => setActiveTab('releases')}
        >
          Пресс-релизы
        </button>
        <button 
          className={`tab-button ${activeTab === 'announcements' ? 'active' : ''}`}
          onClick={() => setActiveTab('announcements')}
        >
          Анонсы
        </button>
        <button 
          className={`tab-button ${activeTab === 'photos' ? 'active' : ''}`}
          onClick={() => setActiveTab('photos')}
        >
          Фотоматериалы
        </button>
        <button 
          className={`tab-button ${activeTab === 'videos' ? 'active' : ''}`}
          onClick={() => setActiveTab('videos')}
        >
          Видеоматериалы
        </button>
        <button 
          className={`tab-button ${activeTab === 'contacts' ? 'active' : ''}`}
          onClick={() => setActiveTab('contacts')}
        >
          Контакты для СМИ
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'releases' && (
          <div className="press-list">
            {pressReleases.map(item => (
              <article key={item.id} className="press-item">
                <div className="press-item-header">
                  <h3>{item.title}</h3>
                  <span className="press-date">{item.date}</span>
                </div>
                <p>{item.content}</p>
                <button className="read-more-btn">Читать полностью</button>
              </article>
            ))}
          </div>
        )}
        
        {activeTab === 'announcements' && (
          <div className="press-list">
            {announcements.map(item => (
              <article key={item.id} className="press-item announcement">
                <div className="press-item-header">
                  <h3>{item.title}</h3>
                  <span className="press-date">{item.date}</span>
                </div>
                <p>{item.content}</p>
                <button className="read-more-btn">Подробнее</button>
              </article>
            ))}
          </div>
        )}
        
        {activeTab === 'photos' && (
          <div className="media-grid">
            {photos.map(photo => (
              <div key={photo.id} className="media-item">
                <img src={photo.image} alt={photo.title} />
                <div className="media-info">
                  <h4>{photo.title}</h4>
                  <span>{photo.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'videos' && (
          <div className="media-grid">
            {videos.map(video => (
              <div key={video.id} className="media-item video">
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-icon">▶</div>
                </div>
                <div className="media-info">
                  <h4>{video.title}</h4>
                  <span>{video.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'contacts' && (
          <div className="press-contacts">
            <h2>Контактная информация для СМИ</h2>
            <div className="contact-cards">
              <div className="contact-card">
                <h3>Пресс-служба Совета ректоров вузов ДФО</h3>
                <div className="contact-item">
                  <strong>Ответственный:</strong>
                  <p>Иванова Мария Петровна</p>
                </div>
                <div className="contact-item">
                  <strong>Телефон:</strong>
                  <p>+7 (423) 123-45-67</p>
                </div>
                <div className="contact-item">
                  <strong>Email:</strong>
                  <p>press@dvfu-rectorat.ru</p>
                </div>
                <div className="contact-item">
                  <strong>Время работы:</strong>
                  <p>Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Press;

