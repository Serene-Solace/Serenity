export const breakpoints = {
  mobile: 768,
  tablet: 1024
}

export const mediaQueries = {
  mobile: `@media screen and (max-width: ${breakpoints.mobile}px)`,
  tablet: `@media screen and (max-width: ${breakpoints.tablet}px)`,
  desktop: `@media screen and (min-width: ${breakpoints.tablet + 1}px)`
}
