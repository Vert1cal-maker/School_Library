create table if not exists Books_Authors (
book_id int not null,
author_id int not null,
FOREIGN KEY (book_id) REFERENCES Books (id),
FOREIGN KEY (author_id) REFERENCES Authors (id),
primary key (book_id, author_id)
);
