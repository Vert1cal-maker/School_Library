/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: Authors
# ------------------------------------------------------------

create database scool_Library;
use scool_Library;

CREATE TABLE IF NOT EXISTS `Authors` (
  `author_id` int NOT NULL AUTO_INCREMENT,
  `author_name` varchar(255) NOT NULL,
  PRIMARY KEY (`author_id`),
  UNIQUE KEY `author_name` (`author_name`)
) ENGINE = InnoDB AUTO_INCREMENT = 56 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: books
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `books` (
  `book_id` int NOT NULL AUTO_INCREMENT,
  `book_title` varchar(255) NOT NULL,
  `book_image` varchar(255) NOT NULL,
  `book_year` int DEFAULT NULL,
  `book_pages` int DEFAULT NULL,
  `book_views` int DEFAULT '0',
  `book_rating` float DEFAULT NULL,
  `book_intro` varchar(1000) DEFAULT NULL,
  `book_wanted` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`book_id`)
) ENGINE = InnoDB AUTO_INCREMENT = 115 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: books_authors
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `books_authors` (
  `book_id` int DEFAULT NULL,
  `author_id` int DEFAULT NULL,
  KEY `book_id` (`book_id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `books_authors_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `books` (`book_id`),
  CONSTRAINT `books_authors_ibfk_2` FOREIGN KEY (`author_id`) REFERENCES `Authors` (`author_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: Authors
# ------------------------------------------------------------

INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (51, 'Disney-книги');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (53, 'Santa Monica Studios');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (14, 'А. Белов');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (17, 'Александр Сераков');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (52, 'Алеш Кот');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (1, 'Андрей Богуславский');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (38, 'Бартош А.И');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (27, 'Белов А.В');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (5, 'Брюс Эккель');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (29, 'Гарет Халфакри');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (8, 'Гэри Маклин Холл');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (25, 'Джан Марко Йодиче');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (23, 'Джей Макгаврен');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (9, 'Джеймс Р. Грофф');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (50, 'Дженнифер Дудна');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (13, 'Джереми Блум');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (12, 'Джон Вудкок');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (24, 'Дрю Нейл');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (7, 'Дэвид Флэнаган');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (32, 'Дэнни Стейпл');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (43, 'Емілія Гарт');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (36, 'Иванов В.Н.');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (35, 'Игараси Хирокадзу');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (37, 'Курушин А.А');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (33, 'Кэтлин Шамие');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (10, 'Люк Веллинг');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (49, 'Люсі Гутьєррес');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (3, 'М., Вильямс');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (2, 'Марк Саммерфильд');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (54, 'Мартин Фаулер');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (48, 'Массімо Пільюччі');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (31, 'Нил Кэмерон');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (42, 'Олександр Сіраков');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (30, 'Петин В. А');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (19, 'Пол Дейтел, Харви Дейтел');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (55, 'Прамодкумар Дж. Садаладж');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (20, 'Роберт Мартин');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (28, 'Романов А. Ю.');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (26, 'Сай Яманур');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (34, 'Саймон Монк');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (11, 'Сергей Мастицкий');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (16, 'Сет Гринберг');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (15, 'Сэмюэл Грингард');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (18, 'Тим Кедлек');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (
    6,
    'Томас Кормен, Чарльз Лейзерсон, Рональд Ривест, Клиффорд Штайн'
  );
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (4, 'Уэс Маккинни');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (21, 'Энтони Грей');
INSERT INTO
  `Authors` (`author_id`, `author_name`)
VALUES
  (39, 'Юрий Ревич');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: books
# ------------------------------------------------------------

INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    25,
    'СИ++ И КОМПЬЮТЕРНАЯ ГРАФИКА',
    '/books-page/books-page_files/22.jpg',
    1992,
    NULL,
    48,
    3,
    '',
    12
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    26,
    'Программирование на языке Go!',
    '/books-page/books-page_files/23.jpg',
    1992,
    NULL,
    10,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    27,
    'Толковый словарь сетевых терминов и аббревиатур',
    '/books-page/books-page_files/25.jpg',
    1992,
    NULL,
    1,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    28,
    'Python for Data Analysis',
    '/books-page/books-page_files/26.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    29,
    'Thinking in Java (4th Edition)',
    '/books-page/books-page_files/27.jpg',
    1992,
    NULL,
    2,
    3,
    '',
    3
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    30,
    'Introduction to Algorithms',
    '/books-page/books-page_files/29.jpg',
    1992,
    NULL,
    38,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    31,
    'JavaScript Pocket Reference',
    '/books-page/books-page_files/31.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    32,
    'Adaptive Code via C#: Class and Interface Design, Design Patterns, and SOLID Principles',
    '/books-page/books-page_files/32.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    33,
    'SQL: The Complete Referenc',
    '/books-page/books-page_files/33.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    34,
    'PHP and MySQL Web Development',
    '/books-page/books-page_files/34.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    35,
    'Статистический анализ и визуализация данных с помощью R',
    '/books-page/books-page_files/35.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    36,
    'Computer Coding for Kid',
    '/books-page/books-page_files/36.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    37,
    'Exploring Arduino: Tools and Techniques for Engineering Wizardry',
    '/books-page/books-page_files/37.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    38,
    'Программирование микроконтроллеров для начинающих и не только',
    '/books-page/books-page_files/38.jpg',
    1992,
    NULL,
    8,
    3,
    '',
    2
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    39,
    'The Internet of Things',
    '/books-page/books-page_files/39.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    40,
    'Sketching User Experiences: The Workbook',
    '/books-page/books-page_files/40.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    41,
    'InDesign CS6',
    '/books-page/books-page_files/41.jpg',
    1992,
    NULL,
    2,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    42,
    'Адаптивный дизайн. Делаем сайты для любых устройств',
    '/books-page/books-page_files/42.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    43,
    'Android для разработчиков',
    '/books-page/books-page_files/43.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    44,
    'Clean Code: A Handbook of Agile Software Craftsmanship',
    '/books-page/books-page_files/44.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    45,
    'Swift Pocket Reference: Programming for iOS and OS X',
    '/books-page/books-page_files/45.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    47,
    'Head First Ruby',
    '/books-page/books-page_files/47.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    48,
    'Practical Vim',
    '/books-page/books-page_files/48.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    49,
    'TinyML. Книга рецептов',
    '/books-page/books-page_files/49.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    50,
    'Raspberry Pi Pico в любительских проектах',
    '/books-page/books-page_files/50.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    51,
    'Управление модулем ARDUINO по Wi-Fi с мобильных устройств',
    '/books-page/books-page_files/51.jpg',
    1992,
    NULL,
    1,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    52,
    'Цифровий синтез. Практичний курс',
    '/books-page/books-page_files/52.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    1
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    53,
    ' BBC micro bit. Официальное руководство пользователя',
    '/books-page/books-page_files/53.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    1
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    54,
    '77 проектов для Arduino. (цветное издание)',
    '/books-page/books-page_files/54.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    55,
    'Электронные проекты на основе ESP8266 и ESP32. Создание приложений и устройств с поддержкой Wi-Fi ',
    '/books-page/books-page_files/55.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    56,
    'Устройство и программирование автономных роботов. Проекты на Python и Raspberry PI ',
    '/books-page/books-page_files/56.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    57,
    'Основи електроніки для чайників, 3-е видання ',
    '/books-page/books-page_files/57.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    58,
    'Micro:bit для неугомонных учёных',
    '/books-page/books-page_files/58.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    59,
    'Занимательное электрооборудование. Манга ',
    '/books-page/books-page_files/59.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    60,
    'Проектування схем на комп\'ютері',
    '/books-page/books-page_files/60.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    61,
    'Проектирование объёмных интегральных структур СВЧ и КВЧ',
    '/books-page/books-page_files/61.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    62,
    'Схемотехника. От азов до создания практических устройств',
    '/books-page/books-page_files/62.jpg',
    1992,
    NULL,
    0,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    63,
    'Программирование микроконтроллеров AVR: от Arduino к ассемблеру',
    '/books-page/books-page_files/63.jpg',
    1992,
    NULL,
    1,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    64,
    'Atomic Kotlin',
    '/books-page/books-page_files/64.jpg',
    1992,
    NULL,
    2,
    3,
    '',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    106,
    'Непокірні',
    '/books-page/books-page_files/65.jpg',
    2023,
    320,
    2,
    3,
    'Кейт посеред ночі тікає з Лондона до старого котеджу Вейворд, успадкованого від далекої тітки. Порослий плющем будинок із занедбаним садом має зцілити серце дівчини після стосунків з аб\'юзером. Та мрії про спокійне життя в англійському селі не судилося здійснитися — Кейт знаходить таємницю своєї тітки, заховану з часів полювання на відьом у XVII столітті.',
    1
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    108,
    'Нові стоїки. 52 уроки для наповненого життя',
    '/books-page/books-page_files/66.jpg',
    2023,
    322,
    1,
    3,
    'Книжка про філософію стоїцизму — вчення, яке сьогодні набуває все більше популярності. Античні стоїки уміли те, що багатьом із нас сьогодні не під силу — жити у гармонії із собою, підтримувати баланс в житті між матеріальним та духовним, не турбуватися через те, що неможливо змінити. ',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    109,
    'Англійська для дорослих English Is Not Easy',
    '/books-page/books-page_files/67.jpg',
    2020,
    336,
    1,
    3,
    'Если вы хотите наконец-то заговорить на английском, но изучение скучных правил в учебниках сводит вас с ума – эта книга именно для вас! ',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    110,
    'Зламати ДНК. Редагування генома та контроль над еволюцією',
    '/books-page/books-page_files/68.jpg',
    2018,
    296,
    1,
    3,
    'Дженнифер Дудна, всемирно известная ученая, стоящая за CRISPR, \"одним из самых монументальных открытий в биологии\" (New York Times), объясняет свое открытие, описывает свою силу изменить будущее всей жизни и предупреждает о его использовании. Несколько открытий изменили ход человеческой истории.',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    111,
    'Гравіті Фолз. Кіноісторія в коміксах. Збірка 1',
    '/books-page/books-page_files/69.jpg',
    2019,
    232,
    2,
    3,
    'Дванадцятирічні близнюки, Діппер і Мейбл Пайнз приїхали, на літні канікули до свого, ексцентричного дядька Стена, який живе у маленькому, містечку Гравіті Фолз у штаті, Орегон. Здається, на брата і сестру очікують, безрадісні канікули: вони працюватимуть, у «Хижці Чудес» — лавці для туристів..., Яка нудьга! Але Діппер знаходить у лісі дивний щоденник, що відкриває, деякі таємниці містечка!',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    112,
    'Bloodborne. Воронья песнь. Том 3',
    '/books-page/books-page_files/70.jpg',
    2023,
    112,
    17,
    3,
    'Город Ярнам страдает от жестокой заразы, порождающей кровожадных зверей, которых убивают охотники.\r\nЭйлин Ворона выслеживает город охотников, самых пораженных пороком Старой Крови.\r\nОднако безумие и злость не чужды и Эйлин…',
    0
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    113,
    'God of War: Перекази й легенди - Santa Monica Studios',
    '/books-page/books-page_files/71.jpg',
    2023,
    120,
    239,
    3,
    'Dark Horse Books та Santa Monica Studios презентують «God of War: Перекази й легенди». Це виготовлене з любов’ю видання є конче потрібним для кожного шанувальника гри God of War. Книжка у вигляді нотатника Атрея, яким він був у грі, доповнена ґрунтовною інформацією про світи скандинавської міфології та їхніх мешканців.',
    16
  );
INSERT INTO
  `books` (
    `book_id`,
    `book_title`,
    `book_image`,
    `book_year`,
    `book_pages`,
    `book_views`,
    `book_rating`,
    `book_intro`,
    `book_wanted`
  )
VALUES
  (
    114,
    'NoSQL. Методология разработки нереляционных баз данных',
    '/books-page/books-page_files/46.jpg',
    2020,
    192,
    94,
    NULL,
    'В этой книге описано краткое, но полное введение в эту быстро развивающуюся технологию. Авторы объясняют, как работают базы данных NoSQL и демонстрируют, в каких ситуациях они могут стать более успешной альтернативой традиционным системам RDMBS. Авторы излагают материал в быстром темпе, знакомя читателей с критериями, которые необходимо применять, чтобы принять правильное решение, стоит ли использовать базы NoSQL, и какие технологии следует при этом выбирать.',
    0
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: books_authors
# ------------------------------------------------------------

INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (25, 1);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (26, 2);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (27, 3);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (28, 4);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (29, 5);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (30, 6);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (31, 7);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (32, 8);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (33, 9);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (34, 10);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (35, 11);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (36, 12);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (37, 13);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (38, 14);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (39, 15);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (40, 16);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (42, 18);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (43, 19);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (44, 20);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (45, 21);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (47, 23);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (48, 24);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (49, 25);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (50, 26);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (51, 27);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (52, 28);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (53, 29);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (54, 30);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (55, 31);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (56, 32);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (57, 33);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (58, 34);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (59, 35);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (60, 36);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (61, 37);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (62, 38);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (63, 39);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (64, 5);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (41, 42);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (106, 43);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (108, 48);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (109, 49);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (110, 50);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (111, 51);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (112, 52);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (113, 53);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (114, 54);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (114, 55);

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
