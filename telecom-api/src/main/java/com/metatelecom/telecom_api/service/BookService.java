package com.metatelecom.telecom_api.service;

import com.metatelecom.telecom_api.dto.BookDto;

import java.util.List;

public interface BookService {
    BookDto createBook(BookDto bookDto);
    BookDto getBookById(Long id);
    List<BookDto> getAllBooks();
    BookDto updateBook(Long id, BookDto updatedBook);
    void deleteBook(Long id);
}
