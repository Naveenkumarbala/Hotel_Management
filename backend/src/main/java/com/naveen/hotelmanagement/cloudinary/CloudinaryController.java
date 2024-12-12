package com.naveen.hotelmanagement.cloudinary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/images")
public class CloudinaryController {
    private final CloudinaryService cloudinaryService;
    @Autowired
    public CloudinaryController(CloudinaryService cloudinaryService) {
//        System.out.println("CloudinaryController initialized.");
        this.cloudinaryService = cloudinaryService;
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
        try {
//            System.out.println("uploadImage method invoked");
            String imageUrl = cloudinaryService.uploadImage(file);
            System.out.println("Received file: " + file.getOriginalFilename());
            return ResponseEntity.ok("Image uploaded successfully: " + imageUrl);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }
}
