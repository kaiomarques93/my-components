import { render, screen } from '@testing-library/react'
import ValidationError from './ValidationError'
import { describe, it, expect } from 'vitest'
import React from 'react'

describe('ValidationError', () => {
  it('renders error message when error prop is provided', () => {
    const error = 'This is an error message'
    render(<ValidationError error={error} />)
    const errorMessage = screen.getByText(error)
    expect(errorMessage).toBeInTheDocument()
  })

  it('does not render error message when error prop is not provided', () => {
    render(<ValidationError />)
    const errorMessage = screen.queryByText(/.+/)
    expect(errorMessage).toBeNull()
  })

  it('applies custom className', () => {
    const customClassName = 'custom-class'
    render(
      <ValidationError error="Error message" className={customClassName} />,
    )
    const errorElement = screen.getByText('Error message')
    expect(errorElement).toHaveClass(customClassName)
  })
})
