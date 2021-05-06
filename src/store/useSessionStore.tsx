import create from 'zustand'

type SessionState = {
  isLoggedIn: boolean
  token: string
  login: (token: string) => void
  logout: () => void
}

export const useSessionStore = create<SessionState>((set) => ({
  isLoggedIn: false,
  token: '',
  login: (token: string) => {
    set(() => ({ isLoggedIn: true, token }))
    sessionStorage.setItem('auth', token)
  },
  logout: () => {
    set(() => ({ isLoggedIn: false, token: '' }))
    sessionStorage.removeItem('auth')
  }
}))
