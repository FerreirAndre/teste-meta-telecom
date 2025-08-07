import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css'],
  imports: [CommonModule, RouterLink],
})
export class BookList implements OnInit {
  books: Book[] = [];
  loading = true;
  error = '';

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.bookService.getAll().subscribe({
      next: (data) => {
        this.books = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Erro ao carregar os livros.';
        this.loading = false;
      },
    });
  }

  edit(id: number | undefined) {
    if (id) {
      this.router.navigate(['/books/edit/', id]);
    }
  }

  delete(id: number | undefined) {
    if (!id) return;

    if (confirm('Are you sure you want to delete this book?')) {
      this.bookService.delete(id).subscribe({
        next: () => {
          this.books = this.books.filter((book) => book.id !== id);
        },
        error: (err) => {
          console.error('error deleting book: ', err);
          alert('there was an error deleting the book');
        },
      });
    }
  }
}
