import RcGantt from 'rc-gantt'
import React from 'react'
import { defaultProps } from './constants'
import { Data } from './types'

const App = () => {
  const data = [
    {
      id: 0,
      name: 'Title 1',
      startDate: '2024-03-05',
      endDate: '2024-03-15',
      disabled: false,
      type: 'PRODUCT',
    },
    {
      id: 1,
      name: 'Title 2',
      startDate: '2024-03-06',
      endDate: '2024-03-16',
      disabled: false,
      type: 'EXAM',
    },
    {
      id: 2,
      name: 'Title 3',
      startDate: '2024-03-07',
      endDate: '2024-03-17',
      disabled: false,
      type: 'PRODUCT',
    },
  ]

  return (
    <div style={{ width: '100%', height: 300 }}>
      <RcGantt<Data>
        {...defaultProps}
        data={data}
        disabled
        hideTable
        renderBar={props => {
          const { record, width } = props
          const { type } = record

          switch (type) {
            case 'PRODUCT':
              return <div style={{ background: 'green', height: 20, width }} />
            case 'EXAM':
            default:
              return <div style={{ background: 'red', height: 20, width }} />
          }
        }}
      />
    </div>
  )
}

export default App
