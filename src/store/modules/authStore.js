import {
    defineStore
} from 'pinia'
import axios from 'axios';
import router from '@/router'

export const useAuthStores = defineStore('authStore', {
    state: () => ({
        login: false,
        token: '',
        username: '',
        userId: '',
        url: import.meta.env.API_URL

    }),
    actions: {

        async doLogin(data) {
            try {
                const response = await axios.post(this.url + '/api/login', {

                    email: data.email,
                    password: data.password,
                });

                if (response.status === 200) {
                    alert('Berhasil login');

                    this.login = true;
                    this.userId = response.data.data.userId;
                    this.token = response.data.data.token;
                    this.username = response.data.data.name;

                    console.log(this.token);
                    console.log(this.userId);
                    console.log(this.username);
                    router.push('/')
                } else {
                    alert('Login gagal');
                }
            } catch (error) {
                alert('Terjadi kesalahan. Periksa kembali email dan password Anda.');
                console.error(error);
            }
        },
        async doLogout() {
            try {
                const response = await axios.post(this.url + '/api/logout', null, {
                    headers: {
                        Authorization: `Bearer ${this.token}`
                    }
                });

                if (response.status === 200) {
                    alert('Berhasil logout');
                    this.login = false;
                    this.token = '';
                    router.push('/login')
                } else {
                    alert('Logout gagal');
                }
            } catch (error) {
                console.error(error.message);
            }
        }


    },
    getters: {
        isLogin() {
            return this.login
        },
        getToken() {
            return this.token
        },
        getUserId() {
            return this.userId
        },
        getUsername() {
            return this.username
        }

    },
    persist: true
})