package com.solar.service;

import com.solar.dto.SolarFormDto;
import com.solar.modal.SolarForm;
import com.solar.repository.SolarFormRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SolarFormService {

    private SolarFormRepository solarFormRepository;

    public SolarFormService(SolarFormRepository solarFormRepository) {
        this.solarFormRepository = solarFormRepository;
    }

    public List<SolarForm> getAllUser(){
        return solarFormRepository.findAll();
    }

    public SolarFormDto getUserById(Long id) {
        Optional<SolarForm> user =  solarFormRepository.findById(id);
        if(user.isPresent()){
            return toDto(user.get());
        }else {
            return null;
        }
    }

    public void deleteUserById(Long id) throws Exception {
        try {
            solarFormRepository.deleteById(id);
        }catch (Exception e){
            throw new Exception();
        }
    }

    public SolarFormDto addUser(SolarFormDto solarFormDto) {
        return toDto(solarFormRepository.save(dto(solarFormDto)));
    }


    public SolarFormDto updateAchievementById(Long id, SolarFormDto solarFormDto) {
        try {
            SolarForm updateSolarFormDto = getAllUser().stream().filter(el -> el.getId().equals(id)).findAny().get();
            if (updateSolarFormDto != null) {
//                updateAchievement.setTitle(achievementsDto.getTitle());
            }
            return toDto(solarFormRepository.save(updateSolarFormDto));
        }catch (Exception e){
            throw new RuntimeException("Cannot Update Achievement "+e);
        }
    }

    public SolarForm dto(SolarFormDto solarFormDto){
        return SolarForm.builder()
                .id(solarFormDto.getId())

                .build();
    }

    public SolarFormDto toDto(SolarForm solarForm){
        return  SolarFormDto.builder()
                .id(solarForm.getId())

                .build();
    }


}
