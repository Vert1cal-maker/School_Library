insert into Books_Authors (book_id, author_id)
select Books.id, Authors.id
from Books
join Authors
on Books.author = Authors.author_name;