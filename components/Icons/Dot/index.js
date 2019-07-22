import React from 'react'
import { colors } from '../../../constants/colors'

export default () => (
  <div className="circle-outer">
      <div className="circle-inner">
          <div className="dot" />
      </div>
    <style jsx>{`
        .circle-outer {
            padding: 0.9rem;
            border: 1px solid ${colors.whiteDark};
            border-radius: 100%;
            margin-bottom: 1.4rem;
        }
        .circle-inner {
            padding: 0.8rem;
            border: 1px solid ${colors.greyLight};
            border-radius: 100%;
        }
        .dot {
            background: ${colors.pink};
            width: 1.4rem;
            height: 1.4rem;
            border-radius: 100%;
            box-shadow: 0 2px 4px 0 rgba(255, 116, 125, 0.58);
        }
    `}</style>
  </div>
)
