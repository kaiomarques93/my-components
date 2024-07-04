import React from 'react'

export interface GoBackButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  pageURL?: string
  goToPreviousPage: () => void
  goToPage: (url: string) => void
}
