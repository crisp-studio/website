declare module 'styled-components-breakpoint' {
  type Size = 'mobile' | 'tablet' | 'desktop'

  export default (gte: Size, lt?: Size) => (
    literals: TemplateStringsArray,
    ...placeholders: string[]
  ) => any
}
