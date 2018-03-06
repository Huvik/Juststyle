import React from 'react'

export default ({ width, height, top, right, center, onClick, children }) => (
  <div
    style={{
      width: '100%',
      height: 'auto',
      maxWidth: `${width}px`,
      maxHeight: `${height}px`,
      top: top ? `${top}px` : undefined,
      right: right ? `${right}px` : undefined
    }}
    className={`${center ? 'icon-centre' : undefined} icon`}
    onClick={onClick}
  >
    {children}
    <style jsx global>{`
      .icon-centre {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }
      .icon svg {
        position: absolute;
      }
      @keyframes p1 {
        0% {
          opacity: 1;
        }
        33.33% {
          opacity: 1;
        }
        33.34% {
          opacity: 0;
        }
        66.66% {
          opacity: 0;
        }
        66.67% {
          opacity: 0;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes p2 {
        0% {
          opacity: 0;
        }
        33.33% {
          opacity: 0;
        }
        33.34% {
          opacity: 1;
        }
        66.66% {
          opacity: 1;
        }
        66.67% {
          opacity: 0;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes p3 {
        0% {
          opacity: 0;
        }
        33.33% {
          opacity: 0;
        }
        33.34% {
          opacity: 0;
        }
        66.66% {
          opacity: 0;
        }
        66.67% {
          opacity: 1;
        }
        100% {
          opacity: 1;
        }
      }

      .p1 {
        animation: p1 450ms infinite;
      }
      .p2 {
        animation: p2 450ms infinite;
      }
      .p3 {
        animation: p3 450ms infinite;
      }
    `}</style>
  </div>
)
