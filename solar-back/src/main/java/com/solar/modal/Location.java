package com.solar.modal;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Builder

@Entity
@Table(name = "solar")
public class Location {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    private String longitude;
    private String latitude;

}
