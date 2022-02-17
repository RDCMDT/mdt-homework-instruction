import Cookies from 'universal-cookie';
import axios from 'axios';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.js'
import Dinero from 'dinero.js';

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
        await axios.post(base + '/register', payload).then(async (res) => {
            await this.login(payload);
            Swal.fire({
                title: 'Success Register!',
                text: `User ${payload.username} has been logged in`,
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
    async http(method = 'get', url, payload) {
        let base = await this.getBaseAPIUrl();
        if (method === 'get') {
            axios.defaults.headers.common['Authorization'] = await this.getToken();
            return axios.get(base + url);
        } else {
            return axios.post(base + url, payload);
        }
    },
    async logout() {
        await this.removeCookies('token');
        await this.removeCookies('username');
        await this.removeCookies('accountNo');
    },
    currencyFormat(amount) {
        const price = Dinero({ amount: amount, currency: 'USD' }).toFormat('$0,0.00');
        return price;
    }
}

export default auth;