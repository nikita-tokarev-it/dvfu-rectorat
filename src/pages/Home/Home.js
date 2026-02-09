import React, { useState, useEffect } from 'react';
import { getEvents } from '../../api/events';
import './Home.css';

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await getEvents();
        setNews(data.slice(0, 3));
      } catch (err) {
        console.error('Ошибка загрузки новостей:', err);
      }
    };
    loadNews();
  }, []);

  return (
    <div className="home">
      <section className="greeting-section">
        <div className="greeting-content">
          <div className="rector-photo">
            <img
              src="https://via.placeholder.com/400x500/2B5A8E/FFFFFF?text=Председатель+Совета"
              alt="Председатель Совета ректоров вузов ДФО"
            />
          </div>

          <div className="greeting-text">
            <h2 className="greeting-title">Уважаемые коллеги!</h2>

            <p className="greeting-paragraph">
              Приходит самый любимый, светлый и долгожданный праздник в нашей стране –
              Новый год!
            </p>

            <p className="greeting-paragraph">
              Именно сегодня закладываются смыслы и задачи, которые будут актуальны на
              протяжении десятилетий. Уверен, что в 2024 году нам удастся закрепить
              достижения последних лет и обязательно сделать следующий шаг.
            </p>

            <p className="greeting-paragraph">
              От всей души желаю, чтобы новый год принёс удачу, подарил хорошее настроение, и
              чтобы воплотились в жизнь самые заветные мечты! Пусть работа всегда идёт
              гладко, а рядом будут надёжные единомышленники.
            </p>

            <p className="greeting-signature">
              Счастья Вам, крепкого здоровья и благополучия! С Новым годом!
            </p>
          </div>
        </div>
      </section>

      <section className="news-section">
        <h2 className="section-title">Мероприятия и новости</h2>

        <div className="news-grid">
          {news.map(item => (
            <article key={item.id} className="news-card">
              <div className="news-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="news-content">
                <h3>{item.title}</h3>
                <p className="news-date">{item.date}</p>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
