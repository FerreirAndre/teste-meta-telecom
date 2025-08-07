import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookService } from '../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css',
})
export class BookForm implements OnInit {
  private fb = inject(FormBuilder);
  private bookService = inject(BookService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  @Input() bookId?: number;

  form!: FormGroup;
  isEditMode = false;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.bookId = Number(idParam);
      this.isEditMode = true;
      this.bookService.getById(this.bookId).subscribe((book) => {
        this.form.patchValue(book);
      });
    }

    this.form = this.fb.group({
      title: ['', Validators.required],
      summary: ['', Validators.required],
      coverLink: ['', Validators.required],
      writer: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    if (this.isEditMode && this.bookId) {
      this.bookService.update(this.bookId, this.form.value).subscribe(() => {
        this.router.navigate(['books']);
      });
    } else {
      this.bookService.create(this.form.value).subscribe(() => {
        this.router.navigate(['books']);
      });
    }
  }
}
