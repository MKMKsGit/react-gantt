import RcGantt from 'rc-gantt'
import React, { useState } from 'react'
import { defaultProps } from './constants'
import { Data } from './types'
import { createData } from './utils'

const App = () => {
  const [data, setData] = useState(createData(12))
  const [height, setHeight] = useState(500)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        gap: 10,
        minHeight: 550,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 10,
        }}
      >
        <p>current height: {height}</p>
        <input
          type='range'
          title='default-height'
          min={100}
          max={500}
          step={10}
          value={height}
          onChange={e => {
            setHeight(Number(e.target.value))
          }}
        />
      </div>
      <div style={{ width: '100%', height: height }}>
        <RcGantt<Data> {...defaultProps} disabled hideTable />
      </div>
    </div>
  )
}

export default App
