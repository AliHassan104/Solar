package com.solar.repository;

import com.solar.modal.SolarForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface SolarFormRepository extends JpaRepository<SolarForm,Long> , JpaSpecificationExecutor<SolarForm> {
}
