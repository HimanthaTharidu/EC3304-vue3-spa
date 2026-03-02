import {ref} from 'vue';

const isLoggedIn = ref(!!localStorage.getItem('userToken'));

export function useAuth(){
    const login = (token : string) => {
        localStorage.setItem('userToken', token);
        isLoggedIn.value = true;
    };

    const logout = () => {
        localStorage.removeItem('userToken');
        isLoggedIn.value = false;
    };

    return {
        isLoggedIn,
        login,
        logout
    };
}