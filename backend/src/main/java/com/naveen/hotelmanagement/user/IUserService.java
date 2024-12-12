package com.naveen.hotelmanagement.user;

import com.naveen.hotelmanagement.auth.LoginRequest;
import com.naveen.hotelmanagement.Response;

public interface IUserService {
    Response register(User user);

    Response login(LoginRequest loginRequest);

    Response getAllUsers();

    Response getUserBookingHistory(String userId);

    Response deleteUser(String userId);

    Response getUserById(String userId);

    Response getMyInfo(String email);

}
