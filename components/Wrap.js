import React from 'react'
import { sizes, rem } from '../constants/sizes'

export default ({ flex, size, children, className, ...rest }) => (
  <div className={`w-${size} ${flex ? 'f' : ''} ${className ? className : ''}`} {...rest}>
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
      .w-11 {
        max-width: ${rem(sizes.w11)};
      }
      .w-12 {
        max-width: ${rem(sizes.w12)};
      }
      .w-14 {
        max-width: ${rem(sizes.w14)}
      }
      .f {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
      }
      .f-end {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-end;
      }
      @media (max-width: 450px) {
        div {
          padding: 0 2rem;
        }
      }
      @media (max-width: 1440px) {
        .w-10 {
          max-width: 111rem;
        }
      }
    `}</style>
  </div>
)
