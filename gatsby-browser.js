import React from 'react'

import ThemeContext from './src/context/ThemeContext'

const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true

class ThemeProvider extends React.Component {
  state = {
    dark: false,
  }

  toggleDark = () => {
    let dark = !this.state.dark
    localStorage.setItem('dark', JSON.stringify(dark))
    this.setState({ dark })
  }

  componentDidMount() {
    const lsDark = JSON.parse(localStorage.getItem('dark'))
    if (lsDark) {
      this.setState({ dark: lsDark })
    } else if (supportsDarkMode()) {
      this.setState({ dark: true })
    }
  }

  render() {
    const { children } = this.props
    const { dark } = this.state
    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
