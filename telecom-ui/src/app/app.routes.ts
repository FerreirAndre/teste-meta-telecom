import { Routes } from '@angular/router';
import { BookList } from './components/book-list/book-list';
import { BookForm } from './components/book-form/book-form';

export const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BookList },
  { path: 'books/new', component: BookForm },
  { path: 'books/edit/:id', component: BookForm },
  {
    path: 'books/:id',
    loadComponent: () =>
      import('./pages/book-detail').then((m) => m.BookDetail),
  },
];
