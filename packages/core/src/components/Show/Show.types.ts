import { ReactNode } from 'react'

export interface ShowProps {
  when: boolean
  children: ReactNode
  fallback?: ReactNode
}
