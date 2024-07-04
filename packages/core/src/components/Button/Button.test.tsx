import { render, screen } from '@testing-library/react'
import Button from './Button'
import { createRef } from 'react'
import React from 'react'
import { describe, it, expect } from 'vitest'

describe('Button', () => {
  it('should have given content', () => {
    render(<Button>Button</Button>)
    expect(screen.getByText('Button')).toBeInTheDocument()
  })

  it('should forward ref', () => {
    const ref = createRef<HTMLButtonElement>()

    render(<Button ref={ref}>Button</Button>)
    expect(ref.current).not.toBeNull()
  })
})
