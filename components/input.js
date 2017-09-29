import React from 'react'
import { colors } from '../constants/colors'

export default ({ type, placeholder, onChange }) =>
  <div>
    <input type={type} placeholder={placeholder} onChange={onChange}/>
    <style jsx>{`
      div {
        display: inline-block;
      }
      input {
        background-color: ${colors.greyLight};
        padding: 1.4rem 2.6rem;
      }
    `}</style>
  </div>