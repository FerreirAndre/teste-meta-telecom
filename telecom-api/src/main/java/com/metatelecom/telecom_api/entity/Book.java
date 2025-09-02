package com.metatelecom.telecom_api.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", nullable = false, unique = true)
    private String title;

    @Column(name = "cover_link", nullable = false)
    private String coverLink;

    @Column(name = "summary", nullable = false)
    private String summary;

    @Column(name = "writer", nullable = false)
    private String writer;
}
