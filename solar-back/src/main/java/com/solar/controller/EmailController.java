package com.solar.controller;

import com.solar.dto.EmailDetailsDto;
import com.solar.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class EmailController {
    @Autowired
    private EmailService emailService;

    @PostMapping("/sendMail") public String sendMail(@RequestBody EmailDetailsDto details) {
        String status = emailService.sendSimpleMail(details);
        return status;
    }
}
