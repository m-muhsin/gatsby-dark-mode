import React from 'react'

import { ThemeProvider } from './src/context/ThemeContext'

// highlight-start
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
// highlight-end
