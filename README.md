[![npm version](https://img.shields.io/npm/v/react-acrylic.svg?style=flat-square)](https://www.npmjs.com/package/react-acrylic)

# React Acrylic

Frost glass effect, Acrylic Material react component

Inspired by [Fluent Design's Acrylic Material](https://docs.microsoft.com/en-us/windows/uwp/style/acrylic)

This one uses `html2canvas`, which takes dynamic ‘screenshots’ of the content to blur.

![Layer](/static/layer.jpg "Layer")

## Usage
```jsx

import React, { Component } from 'react'
Import Acrylic from 'react-acrylic'

class YourComponent extends Component {
  render() {
    <Acrylic
      colorOverlay='#eee'
      opacity='0.4'

      position='fixed'
      top='100px'
      left='100px'
      width='300px'
      height='200px'

      blur={40}
      borderRadius='2px'
      borderRadius='2px'
    >
      <span>Hello Acrylic</span>
    </Acrylic>
  }
}
```

## Props


| Props | Default value |
| --------------|---------------|
| `position` | `'fixed'`,
| `left` | `0`,
| `top` | `0`,
| `width` | `0`,
| `height` | `0`,
| `colorOverlay` | `'#fff'` |
| `opacity` | `0.5` |
| `borderRadius` | `0` |
| `boxShadow` | `null` |
| `blur` | `30` |
