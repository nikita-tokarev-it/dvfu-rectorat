import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Совет ректоров вузов ДФО</h3>
          <p>© {new Date().getFullYear()} Все права защищены</p>
        </div>
        
        <div className="footer-section">
          <h4>Контакты</h4>
          <p>Email: info@dvfu-rectorat.ru</p>
          <p>Телефон: +7 (423) 000-00-00</p>
        </div>
        
        <div className="footer-section">
          <h4>Полезные ссылки</h4>
          <a href="https://www.rsr-online.ru/" target="_blank" rel="noopener noreferrer">
            Российский союз ректоров
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

