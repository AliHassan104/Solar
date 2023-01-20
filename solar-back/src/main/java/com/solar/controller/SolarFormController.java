package com.solar.controller;

import com.solar.service.SolarFormService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class SolarFormController {

    private SolarFormService solarFormService;

    public SolarFormController(SolarFormService solarFormService) {
        this.solarFormService = solarFormService;
    }




}
