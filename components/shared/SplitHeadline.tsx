'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)

interface SplitHeadlineProps {
  text:         string
  accentWords?: string[]
  tag?:         'h1' | 'h2' | 'h3'
  className?:   string
  style?:       React.CSSProperties
  delay?:       number
  scrollTrigger?: boolean
}

export default function SplitHeadline({
  text,
  accentWords = [],
  tag = 'h2',
  className = '',
  style = {},
  delay = 0,
  scrollTrigger = false,
}: SplitHeadlineProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Italic serif per le accent words — stesso bianco, diversa texture
    const highlighted = accentWords.reduce((str, word) => {
      const regex = new RegExp(`(${word})`, 'gi')
      return str.replace(
        regex,
        `<em style="font-style:italic;font-family:var(--font-cormorant),Georgia,serif;font-weight:300;">$1</em>`
      )
    }, text)
    el.innerHTML = highlighted

    const split = new SplitText(el, { type: 'lines', linesClass: 'split-line' })

    // Ogni linea: wrapper overflow-hidden = la maschera
    split.lines.forEach((line: Element) => {
      const wrapper = document.createElement('div')
      wrapper.style.overflow = 'hidden'
      wrapper.style.display  = 'block'
      line.parentNode?.insertBefore(wrapper, line)
      wrapper.appendChild(line)
    })

    const animProps = {
      y:        '105%',
      opacity:  0,
      duration: 1.0,
      ease:     'power4.out',
      stagger:  0.08,
      delay,
    }

    let tween: gsap.core.Tween

    if (scrollTrigger) {
      gsap.set(split.lines, { y: '105%', opacity: 0 })
      tween = gsap.to(split.lines, {
        y: '0%',
        opacity: 1,
        duration: 1.0,
        ease: 'power4.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once:  true,
        },
      })
    } else {
      tween = gsap.from(split.lines, animProps)
    }

    return () => {
      tween?.kill()
      split.revert()
    }
  }, [text, delay, scrollTrigger]) // eslint-disable-line

  return (
    <div
      ref={ref}
      className={`font-display ${className}`}
      style={{ ...style }}
    />
  )
}
