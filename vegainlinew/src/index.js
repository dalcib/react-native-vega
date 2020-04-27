import React from 'react'
import ReactDOM from 'react-dom'
import { Vega } from 'react-vega'
import './index.css'

// eslint-disable-next-line
let specx = {
  data: {
    values: [
      { a: 'A', b: 20 },
      { a: 'B', b: 34 },
      { a: 'C', b: 55 },
      { a: 'D', b: 19 },
      { a: 'E', b: 40 },
      { a: 'F', b: 34 },
      { a: 'G', b: 91 },
      { a: 'H', b: 78 },
      { a: 'I', b: 25 },
    ],
  },
  description: 'A simple bar chart with embedded data.',
  encoding: {
    y: { field: 'b', type: 'quantitative' },
    x: { field: 'a', type: 'ordinal' },
  },
  mark: 'bar',
}

/* function handleHover(...args) {
  const info = JSON.stringify(args)
  document.getElementById('bar-tip').innerHTML = info
} */

const Chart = () => {
  const [spec, setSpec] = React.useState(specx)
  React.useEffect(() => {
    document.addEventListener('message', (spec) => setSpec(JSON.parse(spec)))
    return () => window.removeEventListener('message', (spec) => setSpec(JSON.parse(spec)))
  }, [])

  return (
    <div>
      <h1>react-native-vega</h1>
      <Vega spec={spec} /*data={data}  signalListeners={this.handlers} */ />
      <pre>{spec}</pre>
    </div>
  )
}

ReactDOM.render(<Chart />, document.getElementById('root'))
