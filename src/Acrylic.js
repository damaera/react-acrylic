import React, { Component } from 'react'

import PropTypes from 'prop-types'

import html2canvas from 'html2canvas'
import StackBlur from 'stackblur-canvas'

import debounce from './debounce'
import imgNoise from './imgNoise'

class Acrylic extends Component {

  componentDidMount () {
    const self = this

    // not capturing this element
    self.showHideElement()

    // capturing body
    const init = (firstTime) => {
      html2canvas(document.body, {
        // logging: true,
        onrendered (canvas) {
          self.canvas = canvas

          self.blurEl.appendChild(self.canvas)

          canvas.style.position = 'absolute'
          const clientRect = canvas.getBoundingClientRect()

          canvas.style.top = `${-clientRect.top + window.scrollY}px`
          canvas.style.left = `${-clientRect.left + window.scrollX}px`
          self.canvas.style.transform = `translate(-${window.scrollX}px, -${window.scrollY}px)`
          if (firstTime) {
          }

          
          // blurring body
          StackBlur.canvasRGB(
            canvas,
            0,
            0,
            canvas.width,
            canvas.height,
            self.props.blur
          )
        }
      })
    }

    init(true)

    window.addEventListener('scroll', () => {
      if (this.props.position === 'fixed') {
        self.canvas.style.transform = `translate(-${window.scrollX}px, -${window.scrollY}px)`
      }
    })

    window.addEventListener('resize', debounce(() => {
      // console.log(self.canvas.width) 
      this.blurEl.innerHTML = ''
      setTimeout(() => {
        this.showHideElement()
        init()
      }, 10)
      this.canvas.width = window.innerWidth
      // self.canvas.height = window.innerHeight
    }, 100))
    
  }

  showHideElement = () => {
    const $$acrylics = document.querySelectorAll('.js-acrylic')
    if ($$acrylics) {
      $$acrylics.forEach(($acrylic) => {
        $acrylic.style.display = 'none'
        // $acrylic.style.transition = 'opacity 1s'
        const vv = setTimeout(() => {
          $acrylic.style.display = 'block'
          clearTimeout(vv)
        }, 20)
      })
    }
  }
  
  render () {
    return (
      <span
        className='js-acrylic'
      >
        <span
          ref={el => this.contentEl = el}
          style={{
            
            position: this.props.position,
            left: this.props.left,
            top: this.props.top,
            height: this.props.height,
            width: this.props.width,

            borderRadius: this.props.borderRadius,
            boxShadow: this.props.boxShadow,

            zIndex: 2
          }}
        >
          <span 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              background: this.props.colorOverlay,
              opacity: this.props.opacity,
              content: '',
              zIndex: -1,
            }}
          />
          <span 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              background: `url(${imgNoise})`,
              opacity: this.props.opacity / 3,
              content: '',
              zIndex: -2,
            }}
          />
          { this.props.children }
        </span>
        <span
          style={{
            
            position: this.props.position,
            left: this.props.left,
            top: this.props.top,
            height: this.props.height,
            width: this.props.width,

            borderRadius: this.props.borderRadius,
            boxShadow: this.props.boxShadow,

            zIndex: 1,

            overflow: 'hidden'
          }}
          ref={el => this.blurEl = el}
        />
      </span>
    )
  }
}

Acrylic.defaultProps = {
  blur: 30,

  position: 'fixed',
  left: 0,
  top: 0,
  width: 0,
  height: 0,

  colorOverlay: '#fff',
  opacity: 0.5,

  borderRadius: 0,
  boxShadow: null,
}

Acrylic.propTypes = {
  theme: PropTypes.string,
  blur: PropTypes.number,
}

export default Acrylic;