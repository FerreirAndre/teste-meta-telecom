package com.metatelecom.telecom_api.repository;


import com.metatelecom.telecom_api.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book,Long> {
}
