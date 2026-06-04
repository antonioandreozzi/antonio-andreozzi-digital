'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)

interface SplitHeadlineProps {
  text:        string
  accentWords?: string[]          // parole da colorare in oro
  tag?:        'h1' | 'h2' | 'h3'
  className?:  string
  style?:      React.CSSProperties
  delay?:      number             // delay iniziale in secondi
  scrollTrigger?: boolean         // anima on scroll invece che subito
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

    // Applica colore accent alle parole specifiche prima di splittare
    const highlighted = accentWords.reduce((str, word) => {
      const regex = new RegExp(`(${word})`, 'gi')
      return str.replace(regex, `<em class="split-accent" style="color:var(--accent);font-style:italic;">$1</em>`)
    }, text)
    el.innerHTML = highlighted

    const split = new SplitText(el, {
      type: 'words,lines',
      linesClass: 'split-line',
    })

    // Wrap ogni linea in un contenitore overflow-hidden (maschera)
    split.lines.forEach((line: Element) => {
      const wrapper = document.createElement('div')
      wrapper.style.overflow = 'hidden'
      wrapper.style.display  = 'block'
      line.parentNode?.insertBefore(wrapper, line)
      wrapper.appendChild(line)
    })

    const animProps = {
      y:        '110%',
      opacity:  0,
      duration: 0.85,
      ease:     'power3.out',
      stagger:  0.06,
      delay,
    }

    let tween: gsap.core.Tween

    if (scrollTrigger) {
      tween = gsap.from(split.words, {
        ...animProps,
        scrollTrigger: {
          trigger: el,
          start:   'top 85%',
          once:    true,
        },
      })
    } else {
      tween = gsap.from(split.words, animProps)
    }

    return () => {
      tween.kill()
      split.revert()
    }
  }, [text, delay, scrollTrigger]) // eslint-disable-line

  // Render come div con data-tag per accessibilità
  const role = tag === 'h1' ? undefined : undefined

  return (
    <div
      ref={ref}
      role={role}
      className={`font-display ${className}`}
      style={{ ...style }}
    />
  )
}
