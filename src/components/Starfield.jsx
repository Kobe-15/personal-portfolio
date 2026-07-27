import { useEffect, useRef } from 'react'

function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let stars = []

    const colors = [
      'rgba(255, 255, 255,',   // white
      'rgba(147, 197, 253,',   // soft blue
      'rgba(216, 180, 254,',   // soft purple
      'rgba(103, 232, 249,',   // teal accent
    ]

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function createStars() {
      const count = Math.floor((canvas.width * canvas.height) / 3500)
      stars = Array.from({ length: count }, () => {
        const isAccent = Math.random() < 0.02 // was 0.04 — now ~2% instead of ~4%
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: isAccent ? Math.random() * 2 + 2 : Math.random() * 1.2 + 0.3,
          speed: Math.random() * 0.12 + 0.02,
          opacity: Math.random() * 0.6 + 0.3,
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          twinkleDirection: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          isAccent,
        }
      })
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const star of stars) {
        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }

        star.opacity += star.twinkleSpeed * star.twinkleDirection
        if (star.opacity >= 0.7 || star.opacity <= 0.15) {
            star.twinkleDirection *= -1
        }

        if (star.isAccent) {
            // soft glow halo behind accent stars — much subtler now
            const glow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 2.5)
            glow.addColorStop(0, `${star.color} ${star.opacity * 0.25})`)
            glow.addColorStop(1, `${star.color} 0)`)
            ctx.beginPath()
            ctx.arc(star.x, star.y, star.radius * 2.5, 0, Math.PI * 2)
            ctx.fillStyle = glow
            ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${star.color} ${star.opacity})`
        ctx.fill()
      }
      animationId = requestAnimationFrame(draw)
    }

    resize()
    createStars()
    draw()

    const handleResize = () => {
      resize()
      createStars()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="starfield-canvas" />
}

export default Starfield