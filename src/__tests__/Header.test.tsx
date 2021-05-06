import React from 'react'
import { fireEvent, render } from './setupTests'
import { Header } from '../components/Header'
import { RenderResult } from '@testing-library/react'

let Element: RenderResult

const setup = ({
  sidebar = false,
  pathname = '/login',
  isLoggedIn = false,
  setSidebar = () => undefined
}) => {
  const FakeComponent = () => {
    return (
      <Header
        pathname={pathname}
        sidebarState={[sidebar, setSidebar]}
        isLoggedIn={isLoggedIn}
        logout={jest.fn()}
      />
    )
  }

  Element = render(<FakeComponent />)
}

describe('<Header />', () => {
  beforeEach(() => {
    setup({})
    jest.clearAllMocks()
  })

  it('logout button should appear if user is logged in', () => {
    setup({ isLoggedIn: true })
    const logout = Element.getByText(/Logout/) as HTMLButtonElement
    expect(logout).not.toBeNull()
  })

  it('login button should appear if user is not logged in', () => {
    const logout = Element.getByText(/Login/) as HTMLButtonElement
    expect(logout).not.toBeNull()
  })

  it('hamburguer menu should appear only on allowed routes (list)', () => {
    setup({ pathname: '/list' })
    const menu = Element.getByRole('menu')
    expect(menu).not.toBeNull()
  })

  it('hamburguer menu should appear only on allowed routes (total_cashback)', () => {
    setup({ pathname: '/total_cashback' })
    const menu = Element.getByRole('menu')
    expect(menu).not.toBeNull()
  })

  it('hamburguer menu should appear only on allowed routes (purchase)', () => {
    setup({ pathname: '/purchase' })
    const menu = Element.getByRole('menu')
    expect(menu).not.toBeNull()
  })

  it('should call sidebarOpen when hamburguer menu clicked', () => {
    const mockSidebarOpen = jest.fn()
    setup({ setSidebar: mockSidebarOpen, pathname: '/list' })
    const menu = Element.getByRole('menu')

    expect(menu).toBeDefined()

    fireEvent.click(menu)

    expect(mockSidebarOpen).toHaveBeenCalled()
  })
})
