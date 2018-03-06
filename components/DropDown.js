import React from 'react'

import { colors } from '../constants/colors'
import { fonts } from '../constants/fonts'
import ClickOutside from 'react-click-outside'

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

  componentWillReceiveProps({ options, selected }) {
    this.setState({ options, selectedOption: selected }, this.readSize)
  }

  componentDidMount() {
    this.setState({ width: this.win.offsetWidth }, this.readSize)
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open }, this.readSize)
  }

  close = () => {
    this.setState({ open: false }, this.readSize)
  }

  readSize = () => {
    this.setState({ width: this.win.offsetWidth })
  }

  changeOption = option => {
    this.props.onChange(option)
    this.setState({ selectedOption: option })
  }

  render() {
    const { options, open, selectedOption, width } = this.state
    const { onChange } = this.props

    return (
      <ClickOutside onClickOutside={this.close}>
        <div className="dropdown" style={{ width }}>
          <div
            ref={window => {
              this.win = window
            }}
            className={`dropdown-window ${open ? ' active' : ''}`}
            onClick={this.toggleOpen}
          >
            <div className="selectedOption">
              <span>{selectedOption}</span>
              {!open ? '▾ ' : '▾'}
            </div>
            <div className="dropdown-items">
              {options
                ? options.map(
                    option =>
                      selectedOption !== option ? (
                        <div
                          className="dropdown-item"
                          onClick={() => this.changeOption(option)}
                          key={option}
                        >
                          <span>{option}</span>
                        </div>
                      ) : (
                        undefined
                      )
                  )
                : undefined}
            </div>
          </div>
          <style jsx global>{`
            .dropdown {
              font-family: ${fonts.komu};
              color: ${colors.greyDark};
              font-size: 2.1rem;
              line-height: 2.1rem;
              height: 2.1rem;
              margin-left: 0.1rem;
              text-transform: uppercase;
              position: relative;
            }
            .dropdown-window {
              padding: 0.7rem 0.7rem 0 0.7rem;
              margin-top: -0.7rem;
              background-color: ${colors.white};
              position: absolute;
            }
            .dropdown-window .active {
              box-shadow: 0 0 15px 0 rgba(187, 189, 193, 0.5);
            }
            .dropdown-window .active .dropdown-items {
              display: block;
            }
            .selectedOption {
              display: inline-flex;
              color: ${colors.pink};
              margin-bottom: 1rem;
            }
            .selectedOption span {
              text-decoration: underline;
              margin-right: 0.5rem;
            }
            .dropdown-items {
              transition: all 150ms ease-in;
              display: none;
              background-color: ${colors.white};
            }
            .dropdown-item {
              margin-bottom: 1rem;
            }
            .dropdown-item span {
              transition: all ease-in 150ms;
              border-bottom: 3px solid transparent;
            }
            .dropdown-item span:hover {
              color: ${colors.pink};
              border-bottom: 3px solid ${colors.pink};
            }
          `}</style>
        </div>
      </ClickOutside>
    )
  }
}

export default DropDown
