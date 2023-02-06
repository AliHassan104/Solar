package com.solar.service;

import com.solar.dto.SolarFormDto;
import com.solar.modal.SolarForm;
import com.solar.repository.SolarFormRepository;
import net.bytebuddy.implementation.bytecode.Throw;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SolarFormService {

    private SolarFormRepository solarFormRepository;

    public SolarFormService(SolarFormRepository solarFormRepository) {
        this.solarFormRepository = solarFormRepository;
    }

    public List<SolarForm> getAllSolarForm(){
        return solarFormRepository.findAll();
    }

    public SolarFormDto getSolarFormById(Long id) throws Exception {
        Optional<SolarForm> user =  solarFormRepository.findById(id);
        if(user.isPresent()){
            return toDto(user.get());
        }else {
            throw new Exception();
        }
    }

    public void deleteSolarFormById(Long id) throws Exception {
        try {
            solarFormRepository.deleteById(id);
        }catch (Exception e){
            throw new Exception();
        }
    }

    public SolarFormDto addSolarForm(SolarFormDto solarFormDto) {
        return toDto(solarFormRepository.save(dto(solarFormDto)));
    }


    public SolarFormDto updateSolarForm(Long id, SolarFormDto solarFormDto) {
        try {
            SolarForm updateSolarFormDto = getAllSolarForm().stream().filter(el -> el.getId().equals(id)).findAny().get();
            if (updateSolarFormDto != null) {

                updateSolarFormDto.setFirstName(solarFormDto.getFirstName());
                updateSolarFormDto.setLastName(solarFormDto.getLastName());
                updateSolarFormDto.setCompany(solarFormDto.getCompany());
                updateSolarFormDto.setAddress(solarFormDto.getAddress());
                updateSolarFormDto.setCountry(solarFormDto.getCountry());

                updateSolarFormDto.setPhoneNumber(solarFormDto.getPhoneNumber());
                updateSolarFormDto.setConsumption(solarFormDto.getConsumption());
                updateSolarFormDto.setArea(solarFormDto.getArea());

                updateSolarFormDto.setRoofType(solarFormDto.getRoofType());
                updateSolarFormDto.setRoofInclination(solarFormDto.getRoofInclination());
                updateSolarFormDto.setRoofing(solarFormDto.getRoofing());
                updateSolarFormDto.setBuildingHeight(solarFormDto.getBuildingHeight());

                updateSolarFormDto.setArea(solarFormDto.getArea());
                updateSolarFormDto.setLeaseRooftop(solarFormDto.getLeaseRooftop());
                updateSolarFormDto.setRentRooftop(solarFormDto.getRentRooftop());
                updateSolarFormDto.setBuyRooftop(solarFormDto.getBuyRooftop());


            }
            return toDto(solarFormRepository.save(updateSolarFormDto));
        }catch (Exception e){
            throw new RuntimeException("Cannot Update Solar Form "+e);
        }
    }

    public SolarForm dto(SolarFormDto solarFormDto){
        return SolarForm.builder()
                .id(solarFormDto.getId())

                .firstName(solarFormDto.getFirstName())
                .lastName(solarFormDto.getLastName())
                .company(solarFormDto.getCompany())
                .address(solarFormDto.getAddress())
                .country(solarFormDto.getCountry())

                .email(solarFormDto.getEmail())
                .phoneNumber(solarFormDto.getPhoneNumber())
                .consumption(solarFormDto.getConsumption())
                .notes(solarFormDto.getNotes())
                .privacyCheck(solarFormDto.getPrivacyCheck())

//                .location(solarFormDto.getLocation())
                .roofType(solarFormDto.getRoofType())
                .roofInclination(solarFormDto.getRoofInclination())
                .roofing(solarFormDto.getRoofing())
                .buildingHeight(solarFormDto.getBuildingHeight())

                .area(solarFormDto.getArea())
                .leaseRooftop(solarFormDto.getLeaseRooftop())
                .rentRooftop(solarFormDto.getRentRooftop())
                .buyRooftop(solarFormDto.getBuyRooftop())

                .build();
    }

    public SolarFormDto toDto(SolarForm solarForm){
        return  SolarFormDto.builder()
                .id(solarForm.getId())

                .firstName(solarForm.getFirstName())
                .lastName(solarForm.getLastName())
                .company(solarForm.getCompany())
                .address(solarForm.getAddress())
                .country(solarForm.getCountry())

                .email(solarForm.getEmail())
                .phoneNumber(solarForm.getPhoneNumber())
                .consumption(solarForm.getConsumption())
                .notes(solarForm.getNotes())
                .privacyCheck(solarForm.getPrivacyCheck())

                .roofType(solarForm.getRoofType())
                .roofing(solarForm.getRoofing())
                .roofInclination(solarForm.getRoofInclination())
                .buildingHeight(solarForm.getBuildingHeight())
                .area(solarForm.getArea())

                .leaseRooftop(solarForm.getLeaseRooftop())
                .rentRooftop(solarForm.getRentRooftop())
                .buyRooftop(solarForm.getBuyRooftop())
//                .location(solarForm.getLocation())

                .build();
    }


}
