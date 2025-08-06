package com.metatelecom.telecom_api.service.impl;

import com.metatelecom.telecom_api.dto.BookDto;
import com.metatelecom.telecom_api.entity.Book;
import com.metatelecom.telecom_api.mapper.BookMapper;
import com.metatelecom.telecom_api.repository.BookRepository;
import com.metatelecom.telecom_api.service.BookService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

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
}
