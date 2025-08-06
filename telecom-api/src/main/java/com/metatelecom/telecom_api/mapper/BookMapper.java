package com.metatelecom.telecom_api.mapper;

import com.metatelecom.telecom_api.dto.BookDto;
import com.metatelecom.telecom_api.entity.Book;

public class BookMapper {
    public static BookDto mapToBookDto(Book book) {
        return new BookDto(
                book.getId(),
                book.getTitle(),
                book.getCoverLink(),
                book.getSummary(),
                book.getWriter()
        );
    }

    public static Book mapToBook(BookDto bookDto) {
        return new Book(
                bookDto.getId(),
                bookDto.getTitle(),
                bookDto.getCoverLink(),
                bookDto.getSummary(),
                bookDto.getWriter()
        );
    }
}
