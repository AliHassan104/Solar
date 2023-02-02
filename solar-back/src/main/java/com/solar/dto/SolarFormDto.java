package com.solar.dto;

import com.solar.modal.Location;
import lombok.*;

import java.util.ArrayList;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Builder

public class SolarFormDto {
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
//    private ArrayList<String> listOfLongLan = new ArrayList<String>();

    private ArrayList<Location> locations = new ArrayList<Location>();

    private String roofType;
    private String roofInclination;
    private String roofing;
    private String buildingHeightInMeter;

    private String surfaceManualInput;

    private String leaseRooftop;
    private String rentRooftop;
    private String buyRooftop;
}
