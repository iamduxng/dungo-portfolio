import { lazy } from 'react'

export const debounce = (fn: (...fnArgs: any) => void, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

export const lazyLoadComponent = (resolver: () => void, name = 'default') => {
  return lazy(async () => {
    const resolved = await resolver()
    return { default: resolved[name] }
  })
}
