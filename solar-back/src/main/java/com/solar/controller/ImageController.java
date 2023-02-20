package com.solar.controller;

import com.solar.service.SolarFormService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ImageController {

    private static final Logger logger = LoggerFactory.getLogger(ImageController.class);

    @Autowired
    SolarFormService solarFormService;

//    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/view/image/{filename:.+}")
    public ResponseEntity<InputStreamResource> getImageApiUrl(@PathVariable String filename) {
        return solarFormService.getImage(filename);
    }

}
