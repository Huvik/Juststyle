import React from 'react'

import { colors } from '../constants/colors'
import { fonts } from '../constants/fonts'

class DropDown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      options: props.options,
      selectedOption: props.selected,
      open: false,
      width: 0
    }
  }

  componentDidMount () {
    this.setState({ width: this.win.offsetWidth })
  }

  componentWillReceiveProps (nextProps) {
    // console.log(this.props, nextProps)
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open }, this.readSize)
  }

  readSize = () => {
    this.setState({ width: this.win.offsetWidth })    
  }

  changeOption = option => {
    this.props.onChange(option)
    this.setState({selectedOption: option})
  } 

  render() {
    const { options, open, selectedOption, width } = this.state
    const { onChange } = this.props

    return (
      <div className="dropdown" style={{width}}>
        <div ref={window => {this.win = window}} className={`dropdown-window ${open ? ' active' : ''}`} onClick={this.toggleOpen}>
          <div className="selectedOption">
            <span>{selectedOption}</span>
            {!open ? '▾ ' : '▾'}
          </div>
          <div className="dropdown-items">
            {options.map(option => (
              <div className="dropdown-item" onClick={() => this.changeOption(option)} key={option}>
                <span>{option}</span>
              </div>
            ))}
          </div>
        </div>
        <style jsx global>{`
          .dropdown {
            font-family: ${fonts.komu};
            color: ${colors.greyDark};
            font-size: 2.1rem;
            line-height: 2.1rem;
            text-transform: uppercase;
            position: relative;
          }
          .dropdown-window {
            position: absolute;       
            &.active {
              box-shadow: 0 0 15px 0 rgba(187, 189, 193, 0.5);
              .dropdown-items {
                display: block;
              }
            }
          }
          .selectedOption {
            display: inline-flex;
            color: ${colors.pink};
            span {
              text-decoration: underline;
              margin-right: 0.5rem;
            }
          }
          .dropdown-items {
            transition: all 150ms ease-in;            
            padding: 1.4rem;
            display: none;
            background-color: ${colors.white};
          }
          .dropdown-item {
            span {
              transition: all ease-in 150ms;            
              border-bottom: 3px solid transparent;
              &:hover {
                color: ${colors.pink};
                border-bottom: 3px solid ${colors.pink};
              }
            }
          }
        `}</style>
      </div>
    )
  }
}

export default DropDown