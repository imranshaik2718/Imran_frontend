import { useEffect, useState } from 'react'
import loaderImage from '../accets/Loader/Ali.png'

function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    // Minimum display time for smooth animation
    const minDisplayTime = 2000 // 2.5 seconds
    const startTime = Date.now()

    // Handle page load
    const handleLoad = () => {
      const elapsed = Date.now() - startTime
      const remainingTime = Math.max(0, minDisplayTime - elapsed)
      
      setTimeout(() => {
        setFadeOut(true)
        // Remove from DOM after fade out animation
        setTimeout(() => {
          setIsLoading(false)
        }, 800) // Match fade out duration
      }, remainingTime)
    }

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      // Fallback timeout in case load event doesn't fire
      setTimeout(handleLoad, minDisplayTime + 500)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div 
      className={`fixed inset-0 bg-[#0a192f] z-[100] flex items-center justify-center transition-opacity duration-[800ms] ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Animated Image - starts at center, zooms and fades out */}
        <img
          src={loaderImage}
          alt="Loader"
          onLoad={() => setImageLoaded(true)}
          className={`transition-all duration-1000 ease-out max-w-[300px] max-h-[300px] w-auto h-auto ${
            imageLoaded
              ? fadeOut
                ? 'scale-[3] opacity-0'
                : 'scale-100 opacity-100'
              : 'scale-100 opacity-0'
          }`}
        />
      </div>
    </div>
  )
}

export default Loader

