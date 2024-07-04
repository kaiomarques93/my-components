import { render, screen } from '@testing-library/react'
import Badge from './Badge'
import React from 'react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'

describe('Badge', () => {
  it('renders correctly with default props', () => {
    render(<Badge>Default Badge</Badge>)
    const badgeElement = screen.getByText('Default Badge')
    expect(badgeElement).toBeDefined()
  })

  it('applies custom className', () => {
    render(<Badge className="custom-class">Custom Class Badge</Badge>)
    const badgeElement = screen.getByText('Custom Class Badge')
    expect(badgeElement).toHaveClass('custom-class')
  })

  it('should have given content', () => {
    render(<Badge>Badge</Badge>)
    expect(screen.getByText('Badge')).toBeInTheDocument()
  })

  it('should have given color', () => {
    render(<Badge variant="Iniciado">Badge</Badge>)
    expect(screen.getByText('Badge')).toHaveClass('bg-badge-started')
  })
})
