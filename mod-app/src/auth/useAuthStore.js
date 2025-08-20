import { create } from 'zustand'

const useAuthStore = create(set => ({
  token: null,
  user: null,
  firm: null,
  setToken: token => set({ token }),
  setUser: user => set({ user }),
  setFirm: firm => set({ firm }),
  logout: () => set({ token: null, user: null, firm: null })
}))

export default useAuthStore
