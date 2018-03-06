import React from 'react'
import { sizes, rem } from '../constants/sizes'

export default ({ flex, size, children }) => (
  <div className={flex ? 'f w-' + size : 'w-' + size}>
    {children}
    <style jsx>{`
      div {
        box-sizing: content-box;
        margin: 0 auto;
        padding: 0 4rem;
      }
      .w-6 {
        max-width: ${rem(sizes.w6)};
      }
      .w-8 {
        max-width: ${rem(sizes.w8)};
      }
      .w-10 {
        max-width: ${rem(sizes.w10)};
      }
      .w-12 {
        max-width: ${rem(sizes.w12)};
      }
      .f {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
      }
    `}</style>
  </div>
)
