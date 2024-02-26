import { useAuthStore } from "~/store/useAuthStore";

export default defineNuxtRouteMiddleware(async(to, from) => {
  const decode = useAuthStore()
  const token = useCookie('token');
  
  if (token.value) {
    let user = await decode.decodeJwtToken(useCookie('token').value)
    decode.userData = user.userData
  }  

  if (to.path === '/' && !!token.value) {
    return navigateTo('/home')
  }

  if (!token.value && to.path !== '/auth/login') {
    token.value = null
    return navigateTo('/auth/login')
  }

  if (!!token.value && to.path === '/auth/login') {
    return navigateTo('/home')
  }

})
