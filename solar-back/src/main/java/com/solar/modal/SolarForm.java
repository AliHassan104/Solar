package com.solar.modal;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Builder

@Entity
@Table(name = "solar")
public class SolarForm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    
    private String firstName;
    private String lastName;
    private String company;
    private String address;
    private String country;
    private String email;
    private String phoneNumber;
    private String consumption;
    private String notes;

    private String roofType;
    private String roofInclination;
    private String roofing;
    private String buildingHeightInMeter;

    private String surfaceManualInput;

    private String leaseRooftop;
    private String rentRooftop;
    private String buyRooftop;




}
