import React from 'react'

export default ({ image, alt, size }) =>
  <div className="avatar-box">
    {image
      ? <img
          className="avatar"
          alt={alt}
          src={`https://cdn.justmighty.cz/${image.secret}/${size}x${size}/${image.name}`}
          srcSet={`https://cdn.justmighty.cz/${image.secret}/${size *
            2}x${size * 2}/${image.name.replace(/(\.[^.]*$)/g, '@2x$1')} 2x,
             https://cdn.justmighty.cz/${image.secret}/${size * 3}x${size *
            3}/${image.name.replace(/(\.[^.]*$)/g, '@3x$1')} 3x`}
        />
      : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350">
          <path d="M175 171.17c38.9 0 70.46-38.3 70.46-85.58S235.1 0 175 0s-70.47 38.32-70.47 85.6c0 47.25 31.55 85.57 70.47 85.57zM41.9 301.85c0-2.88-.02-.8 0 0zm266.18 2.25c.04-.8.02-5.47 0 0z" />
          <path d="M307.94 298.4c-1.3-82.34-12.06-105.8-94.36-120.66 0 0-11.58 14.76-38.58 14.76s-38.6-14.76-38.6-14.76c-81.38 14.7-92.8 37.8-94.3 117.98-.1 6.55-.17 6.9-.2 6.13 0 1.43.02 4.06.02 8.65 0 0 19.6 39.5 133.08 39.5 113.5 0 133.08-39.5 133.08-39.5v-6.4c-.02.47-.06-.44-.14-5.7z" />
        </svg>}
    <style jsx>{`
      .avatar {
        border-radius: 50%;
        overflow: hidden;
      }
      .avatar-box {
        height: ${size}px;
        width: ${size}px;
      }
      img {
        width: 100%;
        height: auto;
      }
      svg {
        height: 100%;
        width: auto;
      }
    `}</style>
  </div>
