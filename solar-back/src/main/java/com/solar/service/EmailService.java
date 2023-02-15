package com.solar.service;

import com.solar.dto.EmailDetailsDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

//    @Autowired
//    private SolarFormService solarFormService;

    @Value("${spring.mail.username}") private String sender;

    public String sendSimpleMail(EmailDetailsDto details) {
        try {
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setFrom(sender);
            mailMessage.setTo(details.getRecipient());
            mailMessage.setSubject(details.getSubject());
            mailMessage.setText(String.valueOf(details.getSolarFormDto()));
            javaMailSender.send(mailMessage);
            return "Mail Sent Successfully...";
        }
        catch (Exception e) {
            e.printStackTrace();
            return "Error while Sending Mail";
        }
    }
}