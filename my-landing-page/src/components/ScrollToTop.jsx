import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    //  this component scroll to top immediately you click a pathname (0 pixels from left, 0 pixels from top)
    window.scrollTo(0, 0)
  }, [pathname])

  return null // Not visible in the UI
}

export default ScrollToTop
