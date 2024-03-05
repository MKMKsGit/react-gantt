import RcGantt from 'rc-gantt'
import React from 'react'
import { defaultProps } from './constants'
import { Data } from './types'
import { createData } from './utils'

const App = () => {
  const defaultDate1 = new Date()
  const defaultDate2 = new Date(new Date().setFullYear(defaultDate1.getFullYear() + 1))
  const defaultDate3 = new Date(new Date().setFullYear(defaultDate1.getFullYear() + 2))

  const data1 = createData(5, { allDisabled: false, startDate: defaultDate1 })
  const data2 = createData(5, { allDisabled: false, startDate: defaultDate2 })
  const data3 = createData(5, { allDisabled: false, startDate: defaultDate3 })

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        Class 1
        <div style={{ width: '80%', height: 200 }}>
          <RcGantt<Data> {...defaultProps} data={data1} defaultDate={defaultDate1} disabled hideTable />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        Class 2
        <div style={{ width: '80%', height: 200 }}>
          <RcGantt<Data> {...defaultProps} data={data2} defaultDate={defaultDate2} disabled hideTable />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        Class 3
        <div style={{ width: '80%', height: 200 }}>
          <RcGantt<Data> {...defaultProps} data={data3} defaultDate={defaultDate3} disabled hideTable />
        </div>
      </div>
    </div>
  )
}

export default App
