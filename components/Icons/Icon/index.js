import React from 'react'
import pose from 'react-pose'
import { percentage } from '../../../utils'
import posed, { PoseGroup } from 'react-pose'
// import Corner from '../Corner'

// const Box = posed.svg({});
// const PosedComponent = posed(Icon)

// const groupConfig = {
//   visible: {
//     delayChildren: 150,
//     staggerChildren: 50
//   },
//   hidden: {
//     delayChildren: 150,
//     staggerChildren: 50
//   }
// }

// const config = {
//   visible: {
//     opacity: 1
//   },
//   hidden: {
//     opcaity: 0
//   }
// }
// const Group = posed.div(groupConfig)
// const Item = posed.svg(config)

const sidebarProps = {
  open: {
    staggerChildren: 500
  },
  closed: {
    staggerChildren: 0
  }
}

const itemProps = {
  open: { opacity: 1 },
  closed: { opacity: 0 }
}

const SidePanel = posed.ul(sidebarProps)
const Item = posed.svg(itemProps)

class Example extends React.PureComponent {
  state = { isOpen: false }

  componentDidMount() {
    setInterval(this.toggle, 1500)
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen })

  render() {
    const { isOpen } = this.state
    const { children, height, width } = this.props

    return (
      <SidePanel
        onClick={this.toggle}
        className="icon"
        pose={isOpen ? 'open' : 'closed'}
      >
        {children.map((_, i) =>
          <Item key={i}>
            {children}
          </Item>
        )}
        <style jsx global>{`
          .icon {
            position: relative;
            width: 100%;
            height: 0;
            padding-top: ${percentage(height, width)};
          }
          .icon :global(svg) {
            position: absolute;
            width: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        `}</style>
      </SidePanel>
    )
  }
}

class Icon extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isVisible: true }
  }
  componentDidMount() {
    setInterval(this.setState({ isVisible: !this.state.isVisible }), 500)
  }

  render() {
    const { width, height, onClick, children } = this.props
    const { isVisible } = this.state
    console.log(this.state)

    return (
      <Group
        className="icon"
        pose={isVisible ? 'visible' : 'hidden'}
        onClick={onClick}
      >
        {children.map((_, i) =>
          <Item key={i}>
            {children}
          </Item>
        )}
        {/* <style jsx>{`
          .icon {
            position: relative;
            width: 100%;
            height: 0;
            padding-top: ${percentage(height, width)};
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
        `}</style> */}
      </Group>
    )
  }
}
export default Example
// export default ({ width, height, onClick, children }) =>
// <div
//   className="icon"
//   onClick={onClick}
// >
//   {children}
//   <style jsx>{`
//     .icon {
//       position: relative;
//       width: 100%;
//       height: 0;
//       padding-top: ${percentage(height, width)};
//     }
//     .icon :global(svg) {
//       position: absolute;
//       width: 100%;
//       top: 50%;
//       left: 50%;
//       transform: translate(-50%, -50%);
//     }
//     @keyframes p1 {
//       0% {
//         opacity: 1;
//       }
//       33.33% {
//         opacity: 1;
//       }
//       33.34% {
//         opacity: 0;
//       }
//       66.66% {
//         opacity: 0;
//       }
//       66.67% {
//         opacity: 0;
//       }
//       100% {
//         opacity: 0;
//       }
//     }
//     @keyframes p2 {
//       0% {
//         opacity: 0;
//       }
//       33.33% {
//         opacity: 0;
//       }
//       33.34% {
//         opacity: 1;
//       }
//       66.66% {
//         opacity: 1;
//       }
//       66.67% {
//         opacity: 0;
//       }
//       100% {
//         opacity: 0;
//       }
//     }
//     @keyframes p3 {
//       0% {
//         opacity: 0;
//       }
//       33.33% {
//         opacity: 0;
//       }
//       33.34% {
//         opacity: 0;
//       }
//       66.66% {
//         opacity: 0;
//       }
//       66.67% {
//         opacity: 1;
//       }
//       100% {
//         opacity: 1;
//       }
//     }
//
//     .icon :global(.p1) {
//       animation-delay: -1ms;
//       animation: p1 500ms infinite;
//       animation-timing-function: linear;
//     }
//     .icon :global(.p2) {
//       animation-delay: -1ms;
//       animation: p2 500ms infinite;
//       animation-timing-function: linear;
//     }
//     .icon :global(.p3) {
//       animation-delay: -1ms;
//       animation: p3 500ms infinite;
//       animation-timing-function: linear;
//     }
//   `}</style>
// </div>
// <TransitionGroup>

//     <Transition  timeout={duration}>
//   {(state) => (
//     <div style={{
//       ...defaultStyle,
//       ...transitionStyles[state]
//     }}>
//       I'm a fade Transition!
//     </div>
//   )}
// </Transition>
//   {/* {children.map((kid, i) => (
//     <Transition timeout={{ enter: 0, exit: i * time }}>
//       {(state) => <div className={`animation-item ${state}`}>{kid}</div>}
//     </Transition>
//   ))}
//   <style jsx>{`
//     .animation-item {
//       opacity: 0;
//     }
//   `}</style> */}
// </TransitionGroup>

// style={{
//   width: '100%',
//   height: 'auto',
//   maxWidth: `${width}px`,
//   maxHeight: `${height}px`,
//   top: top ? `${top}px` : undefined,
//   right: right ? `${right}px` : undefined
// }}
