import { render, screen } from '@testing-library/react'
import Input from './Input'
import React from 'react'
import { describe, it, expect } from 'vitest'

describe('Input', () => {
  it('renders correctly with default props', () => {
    render(<Input />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeDefined()
  })

  it('applies custom className', () => {
    render(<Input className="custom-class" />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toHaveClass('custom-class')
  })

  it('should have given content', () => {
    render(<Input />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
