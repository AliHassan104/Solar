package com.solar.controller;

import com.solar.dto.EmailDetailsDto;
import com.solar.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class EmailController {
    @Autowired
    private EmailService emailService;

    @PostMapping("/sendMail")
    public String sendMail(@RequestBody EmailDetailsDto details) {
        String status = emailService.sendSimpleMail(details);
        return status;
    }

    @GetMapping("/test")
    public String test(){
        return "test";
    }
}