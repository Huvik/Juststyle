import React, { Component } from 'react'
import { colors } from '../constants/colors'
import { fonts } from '../constants/fonts'


class TextInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width: props.placeholder.length * 7.8,
      name: props.name
    }
  }

  componentDidMount() {
    const { name, value } = this.props
    
    // const width = document.getElementById(`${name}-placeholder`).getClientRects()[0].width
    // this.setState({ width })
  }

  componentDidUpdate() {
    const { value } = this.props
    const { width, name } = this.state

    console.log(this.state)

    if(value !== '') {
      const newWidth = document.getElementById(name).getClientRects()[0].width
      console.log(newWidth)
      if(width !== newWidth) {
        this.setState({width: newWidth})
      }
    }
  }

  render() {
    const { placeholder, value, onChange, type, name } = this.props
    // const width = value ? document.getElementById(name).getClientRects()[0].width : placeholder.length * 7.8
    // console.log(width)
    const { width } = this.state
    console.log(width)

    return (
      <div className="obal">
        <span className="input-hidden" id={name + '-placeholder'}>{placeholder}</span>
        <span className="input-hidden" id={name}>{value}</span>
        <input
          className="text-input"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <style jsx global>{`
           .input-hidden {
             position: absolute;
             visibility: hidden;
           }
          .obal {
            display: inline-block;
          }
          .text-input {
            font-family: ${fonts.roboto};
            font-size: 1.6rem;
            line-height: 2.8rem;
            color: ${colors.pink};
            border-bottom: 1px solid;
            border-bottom-color: ${colors.greyLight};
            width: ${width + 'px'};
          }
          .text-input::placeholder {
            color: ${colors.pink};
          }
        `}</style>
      </div>
    )
  }
}

export default TextInput
