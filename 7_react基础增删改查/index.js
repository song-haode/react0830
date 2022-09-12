import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import APP from './App'

const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
  <StrictMode>
    <APP />
  </StrictMode>
)
