
import { useAuthStores } from './authStore'


export function useStore() {
    return {
        authStore:useAuthStores(),
    }
}
