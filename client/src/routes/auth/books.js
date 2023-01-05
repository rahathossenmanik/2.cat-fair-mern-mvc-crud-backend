import List from './../../pages/books/List';
import Home from './../../pages/Home';
import Create from './../../pages/books/Create';
import Update from '../../pages/books/Update';
import Books from './../../pages/books/index';

export const books = [
  { path: '/', element: <Home /> },
  { path: '/books', element: <Books /> },
  { path: '/books/list', element: <List /> },
  { path: '/books/create', element: <Create /> },
  { path: '/books/update', element: <Update /> }
];
