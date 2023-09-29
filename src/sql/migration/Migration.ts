interface Migration {
  id: string,
  sql: string
}

export const firstMigrationsCreate: Migration[] = [
  {
    id: "1",
    sql: `create database if not exists School_Library_V2`
  },
  {
    id: "2",
    sql: `USE School_Library_V2`
  },
  {
    id: "3",
    sql: `create table if not exists Books (
          id int auto_increment primary key,
          title varchar(255) not null default "unknow",
          author varchar(255) not null default "unknow",
          image varchar(255) not null default "#",
          year smallint not null default 2023,
          pages smallint not null default 300,
          views smallint not null default 0,
          rating smallint not null default 0,
          intro text,
          wanted smallint not null default 0
          )`
  },
  {
    id: "4",
    sql: `INSERT INTO Books (author, title, image) values 
    ('Disney-книги', 'Гравіті Фолз. Кіноісторія в коміксах. Збірка 1', '/books-page/books-page_files/69.jpg'),
    ('Santa Monica Studios', 'God of War: Перекази й легенди - Santa Monica Studios', '/books-page/books-page_files/71.jpg'),
    ('А. Белов', 'Программирование микроконтроллеров для начинающих и не только', '/books-page/books-page_files/38.jpg'),
    ('Алеш Кот', 'Bloodborne. Воронья песнь. Том 3', '/books-page/books-page_files/70.jpg'),
    ('Андрей Богуславский', 'СИ++ И КОМПЬЮТЕРНАЯ ГРАФИКА', '/books-page/books-page_files/22.jpg'),
    ('Бартош А.И', 'Схемотехника. От азов до создания практических устройств', '/books-page/books-page_files/62.jpg'),
    ('Белов А.В', 'Управление модулем ARDUINO по Wi-Fi с мобильных устройств', '/books-page/books-page_files/51.jpg'),
    ('Брюс Эккель', 'Thinking in Java (4th Edition)', '/books-page/books-page_files/27.jpg'),
    ('Брюс Эккель', 'Atomic Kotlin', '/books-page/books-page_files/64.jpg'),
    ('Гарет Халфакри', ' BBC micro bit. Официальное руководство пользователя', '/books-page/books-page_files/53.jpg'),
    ('Гэри Маклин Холл', 'Adaptive Code via C#: Class and Interface Design, Design Patterns, and SOLID Principles', '/books-page/books-page_files/32.jpg'),
    ('Джан Марко Йодиче', 'TinyML. Книга рецептов', '/books-page/books-page_files/49.jpg'),
    ('Джей Макгаврен', 'Head First Ruby', '/books-page/books-page_files/47.jpg'),
    ('Джеймс Р. Грофф', 'SQL: The Complete Referenc', '/books-page/books-page_files/33.jpg'),
    ('Дженнифер Дудна', 'Зламати ДНК. Редагування генома та контроль над еволюцією', '/books-page/books-page_files/68.jpg'),
    ('Джереми Блум', 'Exploring Arduino: Tools and Techniques for Engineering Wizardry', '/books-page/books-page_files/37.jpg'),
    ('Джон Вудкок', 'Computer Coding for Kid', '/books-page/books-page_files/36.jpg'),
    ('Дрю Нейл', 'Practical Vim', '/books-page/books-page_files/48.jpg'),
    ('Дэвид Флэнаган', 'JavaScript Pocket Reference', '/books-page/books-page_files/31.jpg'),
    ('Дэнни Стейпл', 'Устройство и программирование автономных роботов. Проекты на Python и Raspberry PI ', '/books-page/books-page_files/56.jpg'),
    ('Емілія Гарт', 'Непокірні', '/books-page/books-page_files/65.jpg'),
    ('Иванов В.Н.', 'Проектування схем на комп''ютері', '/books-page/books-page_files/60.jpg'),
    ('Игараси Хирокадзу', 'Занимательное электрооборудование. Манга ', '/books-page/books-page_files/59.jpg'),
    ('Курушин А.А', 'Проектирование объёмных интегральных структур СВЧ и КВЧ', '/books-page/books-page_files/61.jpg'),
    ('Кэтлин Шамие', 'Основи електроніки для чайників, 3-е видання ', '/books-page/books-page_files/57.jpg'),
    ('Люк Веллинг', 'PHP and MySQL Web Development', '/books-page/books-page_files/34.jpg'),
    ('Люсі Гутьєррес', 'Англійська для дорослих English Is Not Easy', '/books-page/books-page_files/67.jpg'),
    ('М., Вильямс', 'Толковый словарь сетевых терминов и аббревиатур', '/books-page/books-page_files/25.jpg'),
    ('Марк Саммерфильд', 'Программирование на языке Go!', '/books-page/books-page_files/23.jpg'),
    ('Мартин Фаулер, Прамодкумар Дж. Садаладж', 'NoSQL Distilled: A Brief Guide to the Emerging World of Polyglot Persistence', '/books-page/books-page_files/46.jpg'),
    ('Массімо Пільюччі', 'Нові стоїки. 52 уроки для наповненого життя', '/books-page/books-page_files/66.jpg'),
    ('Нил Кэмерон', 'Электронные проекты на основе ESP8266 и ESP32. Создание приложений и устройств с поддержкой Wi-Fi ', '/books-page/books-page_files/55.jpg'),
    ('Олександр Сіраков', 'InDesign CS6', '/books-page/books-page_files/41.jpg'),
    ('Петин В. А', '77 проектов для Arduino. (цветное издание)', '/books-page/books-page_files/54.jpg'),
    ('Пол Дейтел, Харви Дейтел', 'Android для разработчиков', '/books-page/books-page_files/43.jpg'),
    ('Роберт Мартин', 'Clean Code: A Handbook of Agile Software Craftsmanship', '/books-page/books-page_files/44.jpg'),
    ('Романов А. Ю.', 'Цифровий синтез. Практичний курс', '/books-page/books-page_files/52.jpg'),
    ('Сай Яманур', 'Raspberry Pi Pico в любительских проектах', '/books-page/books-page_files/50.jpg'),
    ('Саймон Монк', 'Micro:bit для неугомонных учёных', '/books-page/books-page_files/58.jpg'),
    ('Сергей Мастицкий', 'Статистический анализ и визуализация данных с помощью R', '/books-page/books-page_files/35.jpg'),
    ('Сет Гринберг', 'Sketching User Experiences: The Workbook', '/books-page/books-page_files/40.jpg'),
    ('Сэмюэл Грингард', 'The Internet of Things', '/books-page/books-page_files/39.jpg'),
    ('Тим Кедлек', 'Адаптивный дизайн. Делаем сайты для любых устройств', '/books-page/books-page_files/42.jpg'),
    ('Томас Кормен, Чарльз Лейзерсон, Рональд Ривест, Клиффорд Штайн', 'Introduction to Algorithms', '/books-page/books-page_files/29.jpg'),
    ('Уэс Маккинни', 'Python for Data Analysis', '/books-page/books-page_files/26.jpg'),
    ('Энтони Грей', 'Swift Pocket Reference: Programming for iOS and OS X', '/books-page/books-page_files/45.jpg'),
    ('Юрий Ревич', 'Программирование микроконтроллеров AVR: от Arduino к ассемблеру', '/books-page/books-page_files/63.jpg')`
  }
];

export const secondMigration: Migration[] = [
  {
    id: "1",
    sql: `use School_Library_V2`
  },
  {
    id: "2",
    sql: `create table if not exists Authors (
          id int auto_increment primary key,
          name varchar(255) not null);`
  },
  {
    id: "3",
    sql: `create table if not exists Books_Authors (
          book_id int not null,
          author_id int not null,
          primary key (book_id, author_id));`
  },
  {
    id: "4",
    sql: `insert into Authors (name)
          select distinct author
          from Books;`
  },
  {
    id: "5",
    sql: `create table if not exists Books_Authors (
          book_id int not null,
          author_id int not null,
          primary key (book_id, author_id));`
  },
  {
    id: "6",
    sql: `insert into Books_Authors (book_id, author_id)
          select Books.id, Authors.id
          from Books
          join Authors
          on Books.author = Authors.name;`
  },
  {
    id: "7",
    sql: `alter table Books
         drop column author;`
  }


]
