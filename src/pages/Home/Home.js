import React from 'react';
import './Home.css';

const Home = () => {
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
          <article className="news-card">
            <div className="news-image">
              <img 
                src="https://via.placeholder.com/400x250/1e4976/FFFFFF?text=Новость+1" 
                alt="Новость 1"
              />
            </div>
            <div className="news-content">
              <h3>Заседание Совета ректоров вузов ДФО</h3>
              <p className="news-date">15 ноября 2024</p>
              <p>Состоялось очередное заседание Совета ректоров вузов Дальневосточного федерального округа...</p>
            </div>
          </article>
          
          <article className="news-card">
            <div className="news-image">
              <img 
                src="https://via.placeholder.com/400x250/1e4976/FFFFFF?text=Новость+2" 
                alt="Новость 2"
              />
            </div>
            <div className="news-content">
              <h3>Конференция по развитию образования</h3>
              <p className="news-date">10 ноября 2024</p>
              <p>Проведена масштабная конференция, посвященная актуальным вопросам развития высшего образования...</p>
            </div>
          </article>
          
          <article className="news-card">
            <div className="news-image">
              <img 
                src="https://via.placeholder.com/400x250/1e4976/FFFFFF?text=Новость+3" 
                alt="Новость 3"
              />
            </div>
            <div className="news-content">
              <h3>Подписание соглашения о сотрудничестве</h3>
              <p className="news-date">5 ноября 2024</p>
              <p>Совет ректоров подписал важное соглашение о межвузовском сотрудничестве...</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Home;

