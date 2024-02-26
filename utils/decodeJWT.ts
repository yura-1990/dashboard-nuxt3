export function decodeJwtToken(token: string) {
    try {
        const [, payloadBase64] = token.split('.');
        return JSON.parse(atob(payloadBase64));
    } catch (error) {
        console.error('Error decoding JWT token:', error);
        return null;
    }
}
