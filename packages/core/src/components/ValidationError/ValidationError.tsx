import { cn } from '@/utils/cn'
import { ValidationErrorProps } from './ValidationError.types'

const ValidationError = ({ error, className }: ValidationErrorProps) => {
  return (
    <>
      {error && (
        <div className={cn('mt-1 text-xs text-danger', className)}>{error}</div>
      )}
    </>
  )
}
export default ValidationError
