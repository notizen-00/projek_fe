// src/store/pinia.js
import { createPinia } from 'pinia'

export const pinia = createPinia()
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
pinia.use(piniaPluginPersistedstate)
export function useStore(storeName) { return pinia.useStore(storeName) }
