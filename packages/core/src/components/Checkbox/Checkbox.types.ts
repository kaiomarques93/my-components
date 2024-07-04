import * as CheckboxRadix from '@radix-ui/react-checkbox'

export type WithoutRefProps = React.ComponentPropsWithoutRef<
  typeof CheckboxRadix.Root
>

export type WithRefProps = React.ElementRef<typeof CheckboxRadix.Root>
