-- public.author definition

-- Drop table

-- DROP TABLE public.author;

CREATE TABLE public.author (
	authorid serial4 NOT NULL,
	"name" varchar(50) NOT NULL,
	birthdate date NOT NULL,
	CONSTRAINT author_pkey PRIMARY KEY (authorid)
);

-- public.book definition

-- Drop table

-- DROP TABLE public.book;

CREATE TABLE public.book (
	bookid serial4 NOT NULL,
	title varchar(100) NOT NULL,
	authorid int4 NOT NULL,
	publisheddate date NOT NULL,
	CONSTRAINT book_pkey PRIMARY KEY (bookid)
);


-- public.book foreign keys

ALTER TABLE public.book ADD CONSTRAINT fk_author FOREIGN KEY (authorid) REFERENCES public.author(authorid);