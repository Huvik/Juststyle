import React from 'react'
import Icon from '../Icon'


export default ({ width, height, onClick, ...rest }) => (
//   <Icon width={width} height={height} {...rest}>
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="194" height="194" viewBox="0 0 194 194">
        <defs>
            <path id="b" d="M0 0h154v154H0z"/>
            <filter id="a" width="140.3%" height="140.3%" x="-20.1%" y="-18.8%" filterUnits="objectBoundingBox">
                <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
                <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="10"/>
                <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
            </filter>
        </defs>
        <g fill="none" fillRule="evenodd">
            <g transform="translate(20 18)">
                <use fill="#000" filter="url(#a)" xlinkHref="#b"/>
                <use fill="#FFF" xlinkHref="#b"/>
            </g>
            <path fill="#FF747D" d="M124 95l-44 28V67z"/>
        </g>
    <style jsx>{`
        svg {
            width: ${width}px;
            height: ${height}px;
            box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.2);
        }
    `}</style>
    </svg>

// </Icon>
)