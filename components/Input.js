import React from 'react'
import { colors } from '../constants/colors'

export default ({ type, placeholder, onChange, value, className, name }) =>
  <div>
    {type == 'textarea' ?
      <textarea placeholder={placeholder} onChange={onChange} className={className} value={value} name={name} rows="6" />
      :
      <input type={type} placeholder={placeholder} onChange={onChange} className={className} value={value} name={name} />
    }
    <style jsx>{`
      div {
        display: inline-block;
        width: 100%;
      }
      input, textarea {
        width: 100%;
        background-color: ${colors.greyLight};
        padding: 1.4rem 2.6rem;
        line-height: 2.8rem;
      }
    `}</style>
  </div>