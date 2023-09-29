create table if not exists Books_Authors (
book_id int not null,
author_id int not null,
primary key (book_id, author_id)
);