const queryList = {
  GET_ALL_AUTHORS: `SELECT authorid, "name", birthdate FROM public.author`,
  GET_AUTHOR: `SELECT authorid, "name", birthdate FROM public.author WHERE authorid = $1`,
  CREATE_AUTHOR: `INSERT INTO public.author ("name", birthdate) VALUES($1, $2);`,
  UPDATE_AUTHOR: `UPDATE public.author SET "name"=COALESCE($1, "name"), birthdate=COALESCE($2, birthdate) WHERE authorid=$3`,
  DELETE_AUTHOR: `DELETE FROM public.author WHERE authorid=$1`,
  GET_ALL_BOOKS: `select title, publisheddate from public.author join public.book on public.author.authorid = public.book.authorid WHERE public.author.authorid=$1`,
  GET_BOOK: `select title, publisheddate from public.author join public.book on public.author.authorid = public.book.authorid WHERE public.author.authorid=$1 and bookid=$2`,
  CREATE_BOOK: `INSERT INTO public.book (title, authorid, publisheddate) VALUES($1,$2,$3)`,
  UPDATE_BOOK: `UPDATE public.book SET title=COALESCE($1, title), publisheddate=COALESCE($2, publisheddate) WHERE authorid=$3 and bookid=$4`,
  DELETE_BOOK: `DELETE FROM public.book WHERE authorid=$1 and bookid=$2`,
};

module.exports = queryList;