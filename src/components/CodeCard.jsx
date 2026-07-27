import { useState, useEffect } from 'react'
import { codeCardTokens } from '../data/codeCard'

const TYPE_SPEED_MS = 15 // lower = faster typing

function CodeCard() {
  const [charCount, setCharCount] = useState(0)

  const fullText = codeCardTokens.map(t => t.text).join('')
  const totalLength = fullText.length

  useEffect(() => {
    if (charCount >= totalLength) return
    const timer = setTimeout(() => {
      setCharCount((c) => c + 1)
    }, TYPE_SPEED_MS)
    return () => clearTimeout(timer)
  }, [charCount, totalLength])

  // Slice each token based on how many characters have been "typed" so far
  let offset = 0
  const visibleTokens = codeCardTokens.map((token, i) => {
    const start = offset
    offset += token.text.length
    const visibleLength = Math.max(0, Math.min(token.text.length, charCount - start))
    if (visibleLength <= 0) return null

    return (
      <span key={i} className={token.type !== 'plain' ? `code-${token.type}` : ''}>
        {token.text.slice(0, visibleLength)}
      </span>
    )
  })

  return (
    <div className="code-card">
      <div className="code-card-header">
        <span className="dot dot-red"></span>
        <span className="dot dot-yellow"></span>
        <span className="dot dot-green"></span>
      </div>
      <div className="code-card-body">
        {visibleTokens}
        {charCount < totalLength && <span className="code-cursor">|</span>}
      </div>
    </div>
  )
}

export default CodeCard