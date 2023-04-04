type ButtonProps =
  | {
      as?: 'button' | 'div'
      href?: never
    }
  | {
      as?: 'a'
      href: string
    }

type Props<C extends React.ElementType> = React.PropsWithChildren<ButtonProps> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof ButtonProps>

const Button = <C extends React.ElementType>({
  as,
  href,
  children,
  ...restProps
}: Props<C>) => {
  const Component = as || 'button'

  return (
    <Component href={href} {...restProps}>
      {children}
    </Component>
  )
}

export default Button
