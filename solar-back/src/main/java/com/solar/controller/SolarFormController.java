package com.solar.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.solar.dto.SearchCriteria;
import com.solar.dto.SolarFormDto;
import com.solar.modal.SolarForm;
import com.solar.service.SolarFormService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/solar-form")
public class SolarFormController {

    private SolarFormService solarFormService;

    public SolarFormController(SolarFormService solarFormService) {
        this.solarFormService = solarFormService;
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("")
    public ResponseEntity<Page<SolarForm>> getSolarForm(@RequestParam(value = "pageNumber",defaultValue = "0",required = false) Integer pageNumber,
                                                              @RequestParam(value = "pageSize",defaultValue = "10",required = false) Integer pageSize){
        Page<SolarForm> solarFormPage= solarFormService.getAllSolarFormWithPagination(pageNumber,pageSize);
        return ResponseEntity.ok(solarFormPage);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/{id}")
    public ResponseEntity<SolarFormDto> getSolarFormById(@PathVariable Long id) throws Exception {
        SolarFormDto solarFormDto = solarFormService.getSolarFormById(id);
        return  ResponseEntity.ok(solarFormDto);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSolarForm(@PathVariable Long id) throws Exception {
        solarFormService.deleteSolarFormById(id);
        return ResponseEntity.ok().build();
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<SolarFormDto> updateSolarFormById(@PathVariable Long id , @RequestBody SolarFormDto solarFormDto) throws Exception {
        try{
            return ResponseEntity.ok(solarFormService.updateSolarForm(id, solarFormDto));
        }catch (Exception e){
            System.out.println(e);
            throw new Exception("Cannot update No Achievement Exist having id "+id);
        }
    }

    @PostMapping()
    public ResponseEntity<SolarFormDto> addSolarForm(@RequestBody SolarFormDto solarFormDto) {
        try{
            return ResponseEntity.ok(solarFormService.addSolarForm(solarFormDto));
        }catch (Exception e){
            System.out.println(e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/image")
    public String addImage(@RequestParam("image") MultipartFile image) {
        try{
            String fileName = solarFormService.uploadImageAndGetApiPath(image);
            return fileName;
        }catch (Exception e){
            System.out.println(e);
            return "file not uploaded";
        }
    }

    @PostMapping("/solar-form/search")
    public ResponseEntity<List<SolarForm>> filteredComplain(@RequestBody SearchCriteria searchCriteria){
        List<SolarForm> solarForms = solarFormService.getFilteredSolarForm(searchCriteria);
        return ResponseEntity.ok(solarForms);
    }

}