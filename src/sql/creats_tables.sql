create database school_Library;
use school_Library;

create table Books(
book_id int primary key auto_increment,
book_title varchar(255) not null,
book_image varchar(255) not null,
book_year int,
book_pages int,
book_views int,
book_rating float,
book_intro varchar(1000)
)

create table Authors(
author_id int primary key auto_increment,
author_name varchar(255) not null,
);

CREATE TABLE book_author (
  book_id INT,
  author_id INT,
  FOREIGN KEY (book_id) REFERENCES Books (book_id),
  FOREIGN KEY (author_id) REFERENCES Authors (author_id),
  PRIMARY KEY (book_id, author_id)
);

insert into books (book_title, book_image) values
('СИ++ И КОМПЬЮТЕРНАЯ ГРАФИКА', './books-page_files/22.jpg'),
  ('Программирование на языке Go!', './books-page_files/23.jpg'),
  ('Толковый словарь сетевых терминов и аббревиатур', './books-page_files/25.jpg'),
  ('Python for Data Analysis', './books-page_files/26.jpg'),
  ('Thinking in Java (4th Edition)', './books-page_files/27.jpg'),
  ('Introduction to Algorithms', './books-page_files/29.jpg'),
  ('JavaScript Pocket Reference', './books-page_files/31.jpg'),
  ('Adaptive Code via C#: Class and Interface Design, Design Patterns, and SOLID Principles','./books-page_files/32.jpg'),
  ('SQL: The Complete Referenc','./books-page_files/33.jpg'),
  ('PHP and MySQL Web Development','./books-page_files/34.jpg'),
  ('Статистический анализ и визуализация данных с помощью R','./books-page_files/35.jpg'),
  ('Computer Coding for Kid','./books-page_files/36.jpg'),
  ('Exploring Arduino: Tools and Techniques for Engineering Wizardry','./books-page_files/37.jpg'),
  ('Программирование микроконтроллеров для начинающих и не только','./books-page_files/38.jpg'),
  ('The Internet of Things','./books-page_files/39.jpg'),
  ('Sketching User Experiences: The Workbook','./books-page_files/40.jpg'),
  ('InDesign CS6','./books-page_files/41.jpg'),
  ('Адаптивный дизайн. Делаем сайты для любых устройств','./books-page_files/42.jpg'),
  ('Android для разработчиков','./books-page_files/43.jpg'),
  ('Clean Code: A Handbook of Agile Software Craftsmanship','./books-page_files/44.jpg'),
  ('Swift Pocket Reference: Programming for iOS and OS X','./books-page_files/45.jpg'),
  ('NoSQL Distilled: A Brief Guide to the Emerging World of Polyglot Persistence','./books-page_files/46.jpg'),
  ('Head First Ruby','./books-page_files/47.jpg'),
  ('Practical Vim','./books-page_files/48.jpg');
  
  
 
