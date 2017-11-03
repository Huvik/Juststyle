import React from 'react'

export default ({ src, alt, size }) => (
  <div className={size === 'big' ? 'big': 'small'}>
    <img src={src} alt="" />
    <style jsx>{`
      .big {
        height: 4.2rem;
      }
      .small {
        height: 2.8rem;
      }
      img {
        height: 100%;
        width: auto;
        border-radius: 50%;
      }   
    `}</style>
  </div>
)
