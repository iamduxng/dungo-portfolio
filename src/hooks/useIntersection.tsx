import { useState, useEffect } from 'react'

function useIntersection(ref: React.RefObject<Element>, triggerOnce = true) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const currentRef = ref.current

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)

      if (triggerOnce && entry.isIntersecting && observer && currentRef) {
        observer.unobserve(currentRef)
      }
    })

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return {
    isIntersecting
  }
}

export default useIntersection
