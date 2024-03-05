import dayjs from 'dayjs'
import RcGantt from 'rc-gantt'
import React, { useState } from 'react'
import { defaultProps } from './constants'
import { Data } from './types'
import { createData } from './utils'

const App = () => {
  const [data, setData] = useState(createData(4, { randomDisabled: true }))

  return (
    <div style={{ width: '100%', height: 300 }}>
      <RcGantt<Data>
        {...defaultProps}
        data={data}
        hideTable
        onUpdate={async (row, startDate, endDate) => {
          console.log('update', row, startDate, endDate)
          setData(prev => {
            const newList = [...prev]
            const index = newList.findIndex(val => val.id === row.id)
            newList[index] = {
              ...row,
              startDate: dayjs(startDate).format('YYYY-MM-DD'),
              endDate: dayjs(endDate).format('YYYY-MM-DD'),
            }
            return newList
          })
          return true
        }}
      />
    </div>
  )
}

export default App
