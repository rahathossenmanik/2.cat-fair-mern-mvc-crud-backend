import Home from '../../pages/Home';
import Authors from './../../pages/authors/index';
import List from './../../pages/authors/List';
import Create from './../../pages/authors/Create';
import Update from './../../pages/authors/Update';

export const authors = [
  { path: '/', element: <Home /> },
  { path: '/authors', element: <Authors /> },
  { path: '/authors/list', element: <List /> },
  { path: '/authors/create', element: <Create /> },
  { path: '/authors/update', element: <Update /> }
];
