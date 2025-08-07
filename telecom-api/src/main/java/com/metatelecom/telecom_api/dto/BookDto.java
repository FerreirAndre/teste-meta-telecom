package com.metatelecom.telecom_api.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookDto {
    private Long id;

    @NotBlank(message = "The book must have a title.")
    @Size(max = 80, message = "The title must be less than 80 characters.")
    private String title;

    @NotBlank(message = "The book must have a cover link.")
    private String coverLink;

    @NotBlank(message = "The book must have a summary.")
    private String summary;

    @NotBlank(message = "The book must have a writer.")
    private String writer;
}
