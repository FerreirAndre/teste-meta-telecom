import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css'],
  imports: [CommonModule],
})
export class BookListComponent implements OnInit {
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

  editar(id: number | undefined) {
    if (id) {
      this.router.navigate(['/books', id]); // irá para /books/:id
    }
  }

  deletar(id: number | undefined) {
    if (!id) return;

    if (confirm('Tem certeza que deseja excluir este livro?')) {
      this.bookService.delete(id).subscribe({
        next: () => (this.books = this.books.filter((book) => book.id !== id)),
        error: () => alert('Erro ao deletar livro.'),
      });
    }
  }
}
