import Cookies from 'universal-cookie';
import axios from 'axios';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.js'

const cookies = new Cookies();

const auth = {
    async getBaseAPIUrl() {
        return 'https://green-thumb-64168.uc.r.appspot.com';
    },
    async getCookies(name) {
        const cookie = cookies.get(name);
        return cookie;
    },
    async setCookies(name, value) {
        cookies.set(name, value, { path: '/' });
    },
    async removeCookies(name) {
        cookies.remove(name);
    },
    async getToken() {
        let token = await this.getCookies('token');
        return token;
    },
    async login(payload) {
        let base = await this.getBaseAPIUrl();
        await axios.post(base + '/login', payload).then(async (res) => {
            await this.setCookies('token', res.data.token);
            await this.setCookies('username', res.data.username);
            await this.setCookies('accountNo', res.data.accountNo);
            Swal.fire({
                title: 'Success Login!',
                text: `User ${res.data.username} has been logged in`,
                icon: 'success',
            }).then(() => {
                window.location.href = '/';
            })
        }).catch(err => {
            Swal.fire({
                title: 'Error!',
                text: err.response.data.error,
                icon: 'error',
            })
            console.log(err.response);
        })
    },
    async register(payload) {
        let base = await this.getBaseAPIUrl();
        await axios.post(base + '/login', payload).then(async (res) => {
            await this.setCookies('token', res.data.token);
            return true
        }).catch(err => {
            return false;
        })
    },
    async logout() {
        await this.removeCookies('token');
        await this.removeCookies('username');
        await this.removeCookies('accountNo');
    },
}

export default auth;