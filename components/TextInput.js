import React from 'react'
import { colors } from '../constants/colors'

export default ({ placeholder, value, onChange }) => {
  const size = value ? value * 8 : placeholder.length * 7.8

  return (
    <div>
      <input placeholder={placeholder} value={value} onChange={onChange} style={{width:`${size}px`}}/>
      <style jsx>{`
        input {
          color: ${colors.pink};
          border-bottom: 1px solid;
          border-bottom-color: ${colors.greyLight};
        }
      `}</style>
    </div>
  )
}
