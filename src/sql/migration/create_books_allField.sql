create table if not exists Books (
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
)