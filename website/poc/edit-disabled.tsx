import RcGantt from 'rc-gantt'
import React from 'react'
import { defaultProps } from './constants'
import { Data } from './types'

const App = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <RcGantt<Data> {...defaultProps} disabled hideTable />
    </div>
  )
}

export default App
