import React from 'react'
// import pose from 'react-pose'
import { percentage } from '../../../utils'
// import posed, { PoseGroup } from 'react-pose'
// import Corner from '../Corner'

// const Parent = posed.div({
//   infinite: {
//     staggerChildren: 300
//   }
// })

// const Infinite = posed.div({
//   infinite: {
//     opacity: 1,
//     transition: {
//       type: 'keyframes',
//       values: [1, 1, 0, 0],
//       times: [0, 0.25, 0, 0],
//       duration: 900,
//       loop: 10
//     }
//   }
// })

// class A extends React.Component {
//   render() {
//     return (
//       <div>
//         <Parent initialPose="start" pose="infinite" className="parent">
//           <Infinite initialPose="start" pose="infinite" className="box" />
//           <Infinite initialPose="start" pose="infinite" className="box" />
//           <Infinite initialPose="start" pose="infinite" className="box" />
//         </Parent>
//         <style jsx global>{`
//           .parent {
//             position: relative;
//           }
//           .box {
//             position: absolute;
//             background: black;
//             width: 150px;
//             height: 150px;
//           }
//         `}</style>
//       </div>
//     )
//   }
// }

// export default Ico

// class Icon extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { isVisible: true }
//   }
//   componentDidMount() {
//     setInterval(this.setState({ isVisible: !this.state.isVisible }), 450)
//   }

//   render() {
//     const { width, height, onClick, children } = this.props
//     const { isVisible } = this.state
//     console.log(this.state)

//     return (
//       <Group
//         className="icon"
//         pose={isVisible ? 'visible' : 'hidden'}
//         onClick={onClick}
//       >
//         {children.map((_, i) =>
//           <Item key={i}>
//             {children}
//           </Item>
//         )}
//         {/* <style jsx>{`
//           .icon {
//             position: relative;
//             width: 100%;
//             height: 0;
//             padding-top: ${percentage(height, width)};
//           }
//           .icon :global(svg) {
//             position: absolute;
//             width: 100%;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//           }
//           @keyframes p1 {
//             0% {
//               opacity: 1;
//             }
//             33.33% {
//               opacity: 1;
//             }
//             33.34% {
//               opacity: 0;
//             }
//             66.66% {
//               opacity: 0;
//             }
//             66.67% {
//               opacity: 0;
//             }
//             100% {
//               opacity: 0;
//             }
//           }
//           @keyframes p2 {
//             0% {
//               opacity: 0;
//             }
//             33.33% {
//               opacity: 0;
//             }
//             33.34% {
//               opacity: 1;
//             }
//             66.66% {
//               opacity: 1;
//             }
//             66.67% {
//               opacity: 0;
//             }
//             100% {
//               opacity: 0;
//             }
//           }
//           @keyframes p3 {
//             0% {
//               opacity: 0;
//             }
//             33.33% {
//               opacity: 0;
//             }
//             33.34% {
//               opacity: 0;
//             }
//             66.66% {
//               opacity: 0;
//             }
//             66.67% {
//               opacity: 1;
//             }
//             100% {
//               opacity: 1;
//             }
//           }

//           .icon :global(.p1) {
//             animation-delay: -1ms;
//             animation: p1 500ms infinite;
//             animation-timing-function: linear;
//           }
//           .icon :global(.p2) {
//             animation-delay: -1ms;
//             animation: p2 500ms infinite;
//             animation-timing-function: linear;
//           }
//           .icon :global(.p3) {
//             animation-delay: -1ms;
//             animation: p3 500ms infinite;
//             animation-timing-function: linear;
//           }
//         `}</style> */}
//       </Group>
//     )
//   }
// }
// export default Example
const Ico = ({ width, height, onClick, children }) =>
  <div className="icon" onClick={onClick}>
    {children}
    <style jsx>{`
      .icon {
        width: ${width}px;
        height: ${height}px;
        padding-top: ${percentage(height, width)};
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 10;
        transform: translate(-50%, -50%);
      }
      .icon :global(svg) {
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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

      .icon :global(.p1) {
        animation-delay: -1ms;
        animation: p1 500ms infinite;
        animation-timing-function: linear;
      }
      .icon :global(.p2) {
        animation-delay: -1ms;
        animation: p2 500ms infinite;
        animation-timing-function: linear;
      }
      .icon :global(.p3) {
        animation-delay: -1ms;
        animation: p3 500ms infinite;
        animation-timing-function: linear;
      }
    `}</style>
  </div>

export default Ico
