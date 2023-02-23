package com.solar.controller;

import com.solar.config.util.JwtUtil;
import com.solar.modal.User;
import com.solar.service.MyUserDetailService;
import com.solar.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

//    @PreAuthorize("hasRole('ROLE_ADMIN')")
//    @PostMapping("/user")
//    public User addUser(@RequestBody User user){
//        try{
//            return userService.addUser(user);
//        }catch (Exception e){
//            return null;
//        }
//    }
}
