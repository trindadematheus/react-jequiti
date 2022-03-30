# react-jequiti

> 🌱 Deixe seu site como o SBT

[![NPM](https://img.shields.io/npm/v/react-jequiti.svg)](https://www.npmjs.com/package/react-jequiti) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-jequiti
```

```bash
yarn add react-jequiti
```

## Usage

```tsx
import JequitiContainer from 'react-jequiti'
import 'react-jequiti/dist/index.css'

export default function MyApp() {
    return (
      // ... rest of project
      <JequitiContainer />
    )
}
```

## Props

### intervalTime?: number
You can set the interval time in miliseconds. Default is `10000`

```tsx
<GlobalJequiti intervalTime={5000} />
```

### zIndex?: number
You can set the z-index of the overlay. Default is `9999`

```tsx
<GlobalJequiti zIndex={500} />
```

## License

MIT © [trindadematheus](https://github.com/trindadematheus)
