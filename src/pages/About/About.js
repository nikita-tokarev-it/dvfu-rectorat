import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('structure');
  
  // Пример данных для таблиц
  const councilMembers = [
    { region: 'Приморский край', university: 'Дальневосточный федеральный университет', rector: 'Иванов И.И.', website: 'https://www.dvfu.ru' },
    { region: 'Хабаровский край', university: 'Тихоокеанский государственный университет', rector: 'Петров П.П.', website: 'https://www.pnu.edu.ru' },
    { region: 'Амурская область', university: 'Амурский государственный университет', rector: 'Сидоров С.С.', website: 'https://www.amursu.ru' },
    { region: 'Камчатский край', university: 'Камчатский государственный университет', rector: 'Козлов К.К.', website: 'https://www.kamgu.ru' },
  ];
  
  const regionalCouncils = [
    { region: 'Приморский край', university: 'ДВФУ', chairman: 'Иванов И.И.', website: 'https://example.com/primorye' },
    { region: 'Хабаровский край', university: 'ТОГУ', chairman: 'Петров П.П.', website: 'https://example.com/khabarovsk' },
    { region: 'Амурская область', university: 'АмГУ', chairman: 'Сидоров С.С.', website: 'https://example.com/amur' },
  ];

  return (
    <div className="about">
      <h1 className="page-title">О совете</h1>
      
      <div className="tabs">
        <button 
          className={`tab-button ${activeTab === 'structure' ? 'active' : ''}`}
          onClick={() => setActiveTab('structure')}
        >
          Структура Совета
        </button>
        <button 
          className={`tab-button ${activeTab === 'composition' ? 'active' : ''}`}
          onClick={() => setActiveTab('composition')}
        >
          Состав Совета
        </button>
        <button 
          className={`tab-button ${activeTab === 'regional' ? 'active' : ''}`}
          onClick={() => setActiveTab('regional')}
        >
          Региональные советы
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'structure' && (
          <div className="structure-content">
            <h2>Структура Совета ректоров вузов Дальневосточного федерального округа</h2>
            <div className="structure-diagram">
              <div className="structure-level">
                <div className="structure-item chairman">
                  <h3>Председатель Совета</h3>
                  <p>Координирует работу Совета и представляет его интересы</p>
                </div>
              </div>
              
              <div className="structure-level">
                <div className="structure-item">
                  <h3>Заместители председателя</h3>
                  <p>Помощь в организации и координации работы</p>
                </div>
                <div className="structure-item">
                  <h3>Секретариат</h3>
                  <p>Организационное обеспечение деятельности Совета</p>
                </div>
              </div>
              
              <div className="structure-level">
                <div className="structure-item">
                  <h3>Члены Совета</h3>
                  <p>Ректоры высших учебных заведений ДФО</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'composition' && (
          <div className="table-container">
            <h2>Состав Совета ректоров вузов Дальневосточного федерального округа</h2>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Регион</th>
                  <th>Название университета</th>
                  <th>Ректор университета</th>
                  <th>Сайт университета</th>
                </tr>
              </thead>
              <tbody>
                {councilMembers.map((member, index) => (
                  <tr key={index}>
                    <td>{member.region}</td>
                    <td>{member.university}</td>
                    <td>{member.rector}</td>
                    <td>
                      <a href={member.website} target="_blank" rel="noopener noreferrer">
                        Перейти на сайт
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {activeTab === 'regional' && (
          <div className="table-container">
            <h2>Региональные советы ректоров вузов Дальневосточного федерального округа</h2>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Регион</th>
                  <th>Название университета</th>
                  <th>Ректор университета (председатель)</th>
                  <th>Сайт регионального совета</th>
                </tr>
              </thead>
              <tbody>
                {regionalCouncils.map((council, index) => (
                  <tr key={index}>
                    <td>{council.region}</td>
                    <td>{council.university}</td>
                    <td>{council.chairman}</td>
                    <td>
                      <a href={council.website} target="_blank" rel="noopener noreferrer">
                        Перейти на сайт
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;

