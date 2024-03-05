import dayjs from 'dayjs'
import RcGantt from 'rc-gantt'
import React, { useState } from 'react'
import { defaultProps } from './constants'
import { Data } from './types'

const App = () => {
  const [defaultDate, setDefaultDate] = useState(new Date())

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        gap: 10,
      }}
    >
      <input
        type='date'
        title='default-date'
        value={dayjs(defaultDate).format('YYYY-MM-DD')}
        onChange={e => {
          setDefaultDate(new Date(e.target.value))
        }}
      />
      <div style={{ width: '100%', height: 300 }}>
        <RcGantt<Data>
          key={`gantt-for-${defaultDate.toDateString()}`}
          {...defaultProps}
          defaultDate={defaultDate}
          disabled
          hideTable
        />
      </div>
    </div>
  )
}

export default App
