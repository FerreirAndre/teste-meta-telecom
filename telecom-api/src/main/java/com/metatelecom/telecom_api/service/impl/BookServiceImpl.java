package com.metatelecom.telecom_api.service.impl;

import com.metatelecom.telecom_api.dto.BookDto;
import com.metatelecom.telecom_api.entity.Book;
import com.metatelecom.telecom_api.exception.ResourceNotFoundException;
import com.metatelecom.telecom_api.mapper.BookMapper;
import com.metatelecom.telecom_api.repository.BookRepository;
import com.metatelecom.telecom_api.service.BookService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BookServiceImpl implements BookService {
    private BookRepository bookRepository;

    @Override
    public BookDto createBook(BookDto bookDto) {
        Book book = BookMapper.mapToBook(bookDto);
        var savedBook = bookRepository.save(book);
        return BookMapper.mapToBookDto(savedBook);
    }

    @Override
    public BookDto getBookById(Long id) {
        var book = bookRepository.findById(id).orElseThrow(()->
                new ResourceNotFoundException("Book not found."));
        return BookMapper.mapToBookDto(book);
    }

    @Override
    public List<BookDto> getAllBooks() {
        var books = bookRepository.findAll();
        return books.stream().map((book) -> BookMapper.mapToBookDto(book)).collect(Collectors.toList());
    }

    @Override
    public BookDto updateBook(Long id, BookDto updatedBook) {
        Book book = bookRepository.findById(id).orElseThrow(()->
                new ResourceNotFoundException("Book not found"));

        book.setTitle(updatedBook.getTitle());
        book.setSummary(updatedBook.getSummary());
        book.setCoverLink(updatedBook.getCoverLink());
        book.setWriter(updatedBook.getWriter());

        var bookToReturn = bookRepository.save(book);

        return BookMapper.mapToBookDto(bookToReturn);
    }

    @Override
    public void deleteBook(Long id) {
        bookRepository.findById(id).orElseThrow(()->
                new ResourceNotFoundException("Book not found"));
        bookRepository.deleteById(id);
    }
}
