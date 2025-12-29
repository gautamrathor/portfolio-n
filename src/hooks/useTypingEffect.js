import { useState, useEffect } from 'react'

export const useTypingEffect = (text, speed = 100, delay = 0) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      } else {
        setIsComplete(true)
      }
    }, currentIndex === 0 ? delay : speed)

    return () => clearTimeout(timeout)
  }, [currentIndex, text, speed, delay])

  return { displayedText, isComplete }
}