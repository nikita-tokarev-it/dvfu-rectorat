import React from 'react';
import './Documents.css';

const Documents = () => {
  const documents = [
    {
      category: 'История',
      items: [
        { title: 'История создания Совета ректоров вузов ДФО', file: 'history.pdf', date: '2020' },
        { title: 'Основные этапы развития', file: 'stages.pdf', date: '2021' },
      ]
    },
    {
      category: 'Учредительные документы',
      items: [
        { title: 'Положение о Совете ректоров вузов ДФО', file: 'regulation.pdf', date: '2024' },
        { title: 'Устав Совета ректоров вузов ДФО', file: 'charter.pdf', date: '2024' },
        { title: 'Решение о создании Совета', file: 'decision.pdf', date: '2019' },
      ]
    },
    {
      category: 'Решения Совета',
      items: [
        { title: 'Протокол заседания №12 от 15.11.2024', file: 'protocol_12.pdf', date: '15.11.2024' },
        { title: 'Протокол заседания №11 от 10.10.2024', file: 'protocol_11.pdf', date: '10.10.2024' },
        { title: 'Протокол заседания №10 от 05.09.2024', file: 'protocol_10.pdf', date: '05.09.2024' },
      ]
    },
  ];

  return (
    <div className="documents">
      <h1 className="page-title">Документы</h1>
      
      <div className="documents-intro">
        <p>
          В данном разделе представлена общая информация о Совете ректоров вузов 
          Дальневосточного федерального округа, учредительные документы, история создания, 
          положение, устав и решения Совета.
        </p>
      </div>
      
      {documents.map((section, index) => (
        <div key={index} className="document-section">
          <h2 className="section-heading">{section.category}</h2>
          <div className="documents-list">
            {section.items.map((doc, docIndex) => (
              <div key={docIndex} className="document-item">
                <div className="document-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#2B5A8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="#2B5A8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" stroke="#2B5A8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" stroke="#2B5A8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H9H8" stroke="#2B5A8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="document-info">
                  <h3 className="document-title">{doc.title}</h3>
                  <p className="document-date">Дата: {doc.date}</p>
                </div>
                <button className="download-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Скачать
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Documents;

