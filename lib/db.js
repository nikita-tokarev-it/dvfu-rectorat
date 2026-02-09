// Для Vercel используем in-memory хранилище + начальные данные
// В production нужно использовать реальную БД (MongoDB, PostgreSQL, etc.)

const bcrypt = require('bcryptjs');

// Начальные данные
const initialData = {
  users: [
    {
      id: '1',
      username: 'admin',
      email: 'admin@dvfu-rectorat.ru',
      passwordHash: bcrypt.hashSync('admin123', 10),
      role: 'admin',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      username: 'editor',
      email: 'editor@dvfu-rectorat.ru',
      passwordHash: bcrypt.hashSync('editor123', 10),
      role: 'editor',
      createdAt: new Date().toISOString(),
    },
  ],
  events: [
    {
      id: '1',
      type: 'event',
      title: 'Заседание Совета ректоров вузов ДФО',
      date: '15 ноября 2024',
      image: 'https://via.placeholder.com/600x350/1e4976/FFFFFF?text=Заседание',
      description: 'Состоялось очередное заседание Совета ректоров вузов Дальневосточного федерального округа. На повестке дня были рассмотрены вопросы развития научного потенциала региона и укрепления межвузовского сотрудничества.',
      published: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '2',
      type: 'news',
      title: 'Новое соглашение о сотрудничестве',
      date: '10 ноября 2024',
      image: 'https://via.placeholder.com/600x350/1e4976/FFFFFF?text=Соглашение',
      description: 'Подписано важное соглашение между вузами Дальневосточного федерального округа о совместных научных исследованиях и обмене студентами.',
      published: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '3',
      type: 'event',
      title: 'Международная конференция по образованию',
      date: '5 ноября 2024',
      image: 'https://via.placeholder.com/600x350/1e4976/FFFFFF?text=Конференция',
      description: 'Проведена масштабная международная конференция, посвященная современным тенденциям в высшем образовании.',
      published: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '4',
      type: 'news',
      title: 'Новая программа поддержки молодых ученых',
      date: '1 ноября 2024',
      image: 'https://via.placeholder.com/600x350/1e4976/FFFFFF?text=Программа',
      description: 'Совет ректоров утвердил новую программу поддержки молодых ученых Дальневосточного федерального округа.',
      published: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '5',
      type: 'event',
      title: 'Круглый стол по цифровизации образования',
      date: '25 октября 2024',
      image: 'https://via.placeholder.com/600x350/1e4976/FFFFFF?text=Круглый+стол',
      description: 'Проведен круглый стол с участием руководителей IT-подразделений вузов по вопросам внедрения цифровых технологий.',
      published: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '6',
      type: 'news',
      title: 'Результаты конкурса студенческих проектов',
      date: '20 октября 2024',
      image: 'https://via.placeholder.com/600x350/1e4976/FFFFFF?text=Конкурс',
      description: 'Подведены итоги ежегодного конкурса студенческих проектов. Победители получили гранты на реализацию своих инициатив.',
      published: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
  pressReleases: [
    { id: '1', title: 'Итоги заседания Совета ректоров ДФО', date: '15.11.2024', content: 'Краткое описание пресс-релиза...', published: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '2', title: 'Новая программа развития образования', date: '10.11.2024', content: 'Краткое описание пресс-релиза...', published: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '3', title: 'Подписание соглашения о сотрудничестве', date: '05.11.2024', content: 'Краткое описание пресс-релиза...', published: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  ],
  announcements: [
    { id: '1', title: 'Предстоящее заседание Совета ректоров', date: '25.11.2024', content: 'Информация о предстоящем мероприятии...', published: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '2', title: 'Международная конференция', date: '01.12.2024', content: 'Анонс международной конференции...', published: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  ],
  photos: [
    { id: '1', title: 'Заседание Совета ректоров', date: '15.11.2024', image: 'https://via.placeholder.com/400x300/1e4976/FFFFFF?text=Фото+1', published: true, createdAt: new Date().toISOString() },
    { id: '2', title: 'Подписание соглашения', date: '10.11.2024', image: 'https://via.placeholder.com/400x300/1e4976/FFFFFF?text=Фото+2', published: true, createdAt: new Date().toISOString() },
    { id: '3', title: 'Конференция по образованию', date: '05.11.2024', image: 'https://via.placeholder.com/400x300/1e4976/FFFFFF?text=Фото+3', published: true, createdAt: new Date().toISOString() },
    { id: '4', title: 'Круглый стол', date: '01.11.2024', image: 'https://via.placeholder.com/400x300/1e4976/FFFFFF?text=Фото+4', published: true, createdAt: new Date().toISOString() },
  ],
  videos: [
    { id: '1', title: 'Репортаж с заседания Совета', date: '15.11.2024', thumbnail: 'https://via.placeholder.com/400x250/1e4976/FFFFFF?text=Видео+1', videoUrl: '', published: true, createdAt: new Date().toISOString() },
    { id: '2', title: 'Интервью с председателем', date: '10.11.2024', thumbnail: 'https://via.placeholder.com/400x250/1e4976/FFFFFF?text=Видео+2', videoUrl: '', published: true, createdAt: new Date().toISOString() },
  ],
  documents: [
    { id: '1', category: 'История', title: 'История создания Совета ректоров вузов ДФО', file: 'history.pdf', date: '2020', published: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '2', category: 'История', title: 'Основные этапы развития', file: 'stages.pdf', date: '2021', published: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '3', category: 'Учредительные документы', title: 'Положение о Совете ректоров вузов ДФО', file: 'regulation.pdf', date: '2024', published: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '4', category: 'Учредительные документы', title: 'Устав Совета ректоров вузов ДФО', file: 'charter.pdf', date: '2024', published: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '5', category: 'Учредительные документы', title: 'Решение о создании Совета', file: 'decision.pdf', date: '2019', published: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '6', category: 'Решения Совета', title: 'Протокол заседания №12 от 15.11.2024', file: 'protocol_12.pdf', date: '15.11.2024', published: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '7', category: 'Решения Совета', title: 'Протокол заседания №11 от 10.10.2024', file: 'protocol_11.pdf', date: '10.10.2024', published: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '8', category: 'Решения Совета', title: 'Протокол заседания №10 от 05.09.2024', file: 'protocol_10.pdf', date: '05.09.2024', published: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  ],
};

// In-memory storage (сбрасывается при каждом cold start на Vercel)
// Для production используйте реальную БД
let db = JSON.parse(JSON.stringify(initialData));

function readDb() {
  return db;
}

function writeDb(data) {
  db = data;
}

function resetDb() {
  db = JSON.parse(JSON.stringify(initialData));
}

module.exports = { readDb, writeDb, resetDb };
