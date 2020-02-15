import * as axios from 'axios';

const samuraiAxios = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "b0b726c1-1d08-47ea-8b14-e65c2be92521"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const usersAPI = {
    getUsers(currentPage=1, pageSize=5) {
        return samuraiAxios.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
};

export const followAPI = {
    followUser(userId) {
        return samuraiAxios.post(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollowUser(userId) {
        return samuraiAxios.delete(`follow/${userId}`)
            .then(response => response.data);
    }
};

export const profileAPI = {
    getUserData(userId) {
        return samuraiAxios.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId) {
        return samuraiAxios.get(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus(status) {
        return samuraiAxios.put(`profile/status`, {status: status})
            .then(response => response.data);
    },
    updateUserData(userData) {
        return samuraiAxios.put(`profile`, {...userData})
            .then(response => response.data);
    }
};

export const authAPI = {
    getAuthData() {
        return samuraiAxios.get(`auth/me`)
            .then(response => response.data);
    },
    loginUser(loginData) {
        return samuraiAxios.post(`auth/login`, {...loginData})
            .then(response => response.data);
    },
    logoutUser() {
        return samuraiAxios.delete(`auth/login`)
            .then(response => response.data);
    }
};