import { isNumber } from 'util'

const requestAnimFrame = (() => {
  return (
    (typeof window !== 'undefined' &&
      (window.requestAnimationFrame || window.webkitRequestAnimationFrame)) ||
    (callback => window.setTimeout(callback, 1000 / 60))
  )
})()

const getAbsoluteOffset = (element: HTMLElement | Element, offset = 0) =>
  window.scrollY + element.getBoundingClientRect().top - offset

/**
 * Scrolls to a defined position with a smooth animation
 *
 * @param scrollTarget scroll target from top in pixels or HTMLElement
 * @param offset scroll offset, for example to account for fixed headers
 * @param duration animation duration
 */
export default function(
  scrollTarget: number | HTMLElement | Element,
  offset = 64,
  duration = 100,
) {
  return new Promise(resolve => {
    const scrollY = window.scrollY || document.documentElement!.scrollTop
    let currentTime = 0

    const scrollTargetY = !isNumber(scrollTarget)
      ? getAbsoluteOffset(scrollTarget, offset)
      : scrollTarget - offset

    const time = Math.max(
      0.1,
      Math.min(Math.abs(scrollY - scrollTargetY) / duration, 0.8),
    )

    const direction = Math.sign(scrollY - scrollTargetY)
    let lastScrollPosition: number | null = null

    function tick() {
      currentTime += 1 / 60

      const percent = currentTime / time
      const t = -0.5 * (Math.cos(Math.PI * percent) - 1)
      const progress = scrollY + (scrollTargetY - scrollY) * t

      /*
       * Abort scroll animation when user
       * scrolls into the opposite direction
       */
      if (
        lastScrollPosition !== null &&
        ((direction > 0 && window.scrollY > lastScrollPosition) ||
          (direction < 0 && window.scrollY < lastScrollPosition))
      ) {
        resolve()
        return
      }

      if (percent < 1) {
        requestAnimFrame(tick)

        window.scrollTo(0, progress)
      } else {
        resolve()
        window.scrollTo(0, scrollTargetY)
      }

      lastScrollPosition = scrollY
    }

    tick()
  })
}
