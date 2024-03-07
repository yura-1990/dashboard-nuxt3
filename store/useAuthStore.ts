import {defineStore} from "pinia";

interface UserPayloadInterface {
  email: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      authenticated: false,
      loading: false,
      error: null,
      userData: null,
      permissions: null,
      roles: null
    };
  },

  actions: {
    authenticateUser: async function ({email, password}: UserPayloadInterface) {

      this.loading = true
      const {data, pending, error}: any = await useFetch(
          "https://feo.wellsoft.uz/api/auth/login",
          {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: {email, password},
          }
      );

      if (data.value) {

        if (data?.value?.token){
          const token = useCookie("token");
          const userPermissions = useCookie('permissions')
          const userRoles = useCookie('roles')
          token.value = data?.value?.token;
          const decodeToken = await this.decodeJwtToken(data?.value?.token)
          userPermissions.value = this.permissions = await decodeToken?.userPermissions
          userRoles.value = this.roles = await decodeToken?.userRoles
          this.authenticated = true;
          this.loading = false
        }

        if (data.value.errors) {
          this.error = data.value.errors
        } else {
          this.error = null
        }
      }
    },

    async checkToken(){
      const token = useCookie("token")
      const userPermissions = useCookie('permissions')
      const userRoles = useCookie('roles')
      const decodeToken = await this.decodeJwtToken(token.value)
      userPermissions.value = this.permissions = await decodeToken?.userPermissions
      userRoles.value = this.roles = await decodeToken?.userRoles

      const {data, error}: any = await useFetch(
          "https://feo.wellsoft.uz/api/users/me",
          {
            method: "get",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token.value}`
            },
          }
      );

      if (error.value){
        token.value = null
      }

    },

    async decodeJwtToken(token: string | null | undefined) {
      try {
        // @ts-ignore
        const [, payloadBase64] = token.split('.');
        return JSON.parse(atob(payloadBase64));

      } catch (error) {
        console.error('Error decoding JWT token:', error);
        const token = useCookie("token")
        token.value = null
        window.location.href = '/auth/login'
        return null;
      }
    },

    logUserOut() {
      const token = useCookie("token");
      this.authenticated = false;
      token.value = null;
    },
  },
});
