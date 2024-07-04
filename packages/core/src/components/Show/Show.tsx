import React from 'react'
import { ShowProps } from './Show.types'

const Show: React.FC<ShowProps> = ({ when, children, fallback = null }) => {
  return when ? <>{children}</> : <>{fallback}</>
}

export default Show
