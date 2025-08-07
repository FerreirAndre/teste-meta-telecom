import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
  standalone: true,
  selector: 'app-book-detail',
  imports: [CommonModule, RouterLink],
  styleUrls: ['./book-detail.css'],
  templateUrl: './book-detail.html',
})
export class BookDetail {
  private route = inject(ActivatedRoute);
  private bookService = inject(BookService);
  private router = inject(Router);

  book: Book | null = null;
  loading = true;
  error = false;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getById(id).subscribe({
      next: (book) => {
        this.book = book;
        this.loading = false;
      },
      error: () => {
        this.error = true;
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
          this.router.navigate(['/books']);
        },
        error: (err) => {
          console.error('error deleting book: ', err);
          alert('there was an error deleting the book');
        },
      });
    }
  }
}
