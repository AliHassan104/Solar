package com.solar.repository;

import com.solar.modal.SolarForm;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SolarFormRepository extends JpaRepository<SolarForm,Long> , JpaSpecificationExecutor<SolarForm> {

    long count();

}
