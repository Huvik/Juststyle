import React from 'react'

import { fonts } from '../../constants/fonts'
import { colors } from '../../constants/colors'

export default ({ children, onClick, small, className, type, width }) =>
  <button className={className} onClick={onClick} type={type}>
    {children}
    <style jsx>{`
      button {
        line-height: ${small ? '4.2rem' : '5.6rem'};
      }
      button {
        min-width: ${width ? width : '12.6rem'};
        font-size: 2.1rem;
        background-color: ${colors.green};
        text-transform: uppercase;
        font-family: ${fonts.komu};
        padding: 0 2.5rem;
        transition: all 150ms ease-in;
      }
      button:hover {
        background-color: ${colors.greenDark};
        color: ${colors.white};
      }
      .pink {
        background-color: ${colors.pink};
      }
      .pink:hover {
        background-color: ${colors.pinkDark};
      }
    `}</style>
  </button>
