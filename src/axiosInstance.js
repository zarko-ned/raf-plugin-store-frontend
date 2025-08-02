import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Axios default config
const config = {
    baseURL: 'https://rafplugins.store/api/v1', // Osnova URL-a na nasem backendu
    timeout: 60000, // Timeout (opciono) koliko maksimalno cekamo odgovor
    headers: {
        'Content-Type': 'application/json', // Podrazumevani Content-Type
    },
};

// Kreiranje Axios instance
const _axios = axios.create(config);



// Interceptor za response: upravljanje greškama i dobrim odgovorima
_axios.interceptors.response.use(
    (response) => {
        // Vraća response ako je uspešan
        return response;
    },
    (error) => {
        // Ako je greška 401, preusmeri na login
        if (error.response && error.response.status === 401) {
            const navigate = useNavigate();
            navigate('/'); // Redirektovanje na login stranicu
        }
        return Promise.reject(error);
    }
);

// Eksportovanje Axios instance za korišćenje u aplikaciji
export default _axios;
