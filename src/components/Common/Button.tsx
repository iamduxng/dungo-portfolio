import { Link, LinkProps } from 'react-router-dom'

type ButtonProps =
  | {
      as?: 'button' | 'div'
      to?: never
    }
  | {
      as?: 'a'
      href: string
    }
  | {
      as?: 'link'
      to: string
    }

type Props<
  C extends
    | React.ElementType
    | React.ForwardRefExoticComponent<
        LinkProps & React.RefAttributes<HTMLAnchorElement>
      >
> = React.PropsWithChildren<ButtonProps> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof ButtonProps>

const Button = <
  C extends
    | React.ElementType
    | React.ForwardRefExoticComponent<
        LinkProps & React.RefAttributes<HTMLAnchorElement>
      >
>({
  as,
  href,
  children,
  to,
  ...restProps
}: Props<C>) => {
  if (as === 'link') {
    return (
      <Link to={to} {...restProps}>
        {children}
      </Link>
    )
  }

  const Component = as || 'button'
  return (
    <Component href={href} {...restProps}>
      {children}
    </Component>
  )
}

export default Button
