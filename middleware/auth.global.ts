import {useFetch} from "#app";

export default defineNuxtRouteMiddleware(async (to, from) => {
    // try {
    //     const token = localStorage.getItem('token')
    //     if (token){
    //         const {data, error} = await useFetch('http://localhost:8000/api/users/me', {
    //             method: 'get',
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });
    //
    //         if (error.value){
    //             localStorage.setItem('token', '')
    //             return await navigateTo('auth/login')
    //         }
    //
    //     }else {
    //         return await navigateTo('auth/login')
    //     }
    // }catch (e){
    //     localStorage.setItem('token', '')
    //     return await navigateTo('auth/login')
    // }
})
