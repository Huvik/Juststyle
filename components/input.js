import React from 'react'
import { colors } from '../constants/colors'

export default ({ type, placeholder, onChange, value, className }) =>
  <div>
    <input type={type} placeholder={placeholder} onChange={onChange} className={className} value={value}/>
    <style jsx>{`
      div {
        display: inline-block;
        width: 100%;
      }
      input {
        width: 100%;
        background-color: ${colors.greyLight};
        padding: 1.4rem 2.6rem;
        line-height: 2.8rem;
      }
    `}</style>
  </div>