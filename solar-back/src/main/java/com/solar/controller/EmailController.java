package com.solar.controller;

import com.solar.dto.EmailDetailsDto;
import com.solar.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {
    @Autowired
    private EmailService emailService;

    // Sending a simple Email
    @PostMapping("/sendMail") public String sendMail(@RequestBody EmailDetailsDto details) {
        String status = emailService.sendSimpleMail(details);
        return status;
    }

//    @PostMapping("/sendMailWithAttachment")
//    public String sendMailWithAttachment(
//            @RequestBody EmailDetailsDto details)
//    {
//        String status
//                = emailService.sendMailWithAttachment(details);
//
//        return status;
//    }

}
