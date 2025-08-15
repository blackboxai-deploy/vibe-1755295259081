'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState<string>('')
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleString())
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  const handleClick = () => {
    setClickCount(prev => prev + 1)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <Card className="p-8 md:p-12 shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <div className="text-center space-y-8">
            {/* Main Hello World Message */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                Hello, World! 👋
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto leading-relaxed">
                Welcome to your first Next.js application. This is a simple yet elegant Hello World app built with modern web technologies.
              </p>
            </div>

            {/* Current Time Display */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-sm text-gray-500 mb-1">Current Date & Time</p>
              <p className="text-lg font-mono text-gray-800">{currentTime}</p>
            </div>

            {/* Interactive Button */}
            <div className="space-y-4">
              <Button 
                onClick={handleClick}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transform transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Click Me! ✨
              </Button>
              
              {clickCount > 0 && (
                <p className="text-sm text-gray-600 animate-fade-in">
                  Button clicked {clickCount} time{clickCount !== 1 ? 's' : ''}! 🎉
                </p>
              )}
            </div>

            {/* Technology Stack */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Built with:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}