import { defineStore } from "pinia";

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
      userData: null
    };
  },

  actions: {
    async authenticateUser({ email, password }: UserPayloadInterface) {
      const { data, pending }: any = await useFetch(
        "http://localhost:8000/api/login",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: { email, password },
        }
      );      

      if (data.value) {
        const token = useCookie("token");
        token.value = data?.value?.token;
        this.authenticated = true;
      }
    },
    
    async decodeJwtToken(token: string) {
      try {
        const [, payloadBase64] = token.split('.');
        const decodedPayload = JSON.parse(atob(payloadBase64));

        return decodedPayload;

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
