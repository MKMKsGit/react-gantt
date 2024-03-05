import { GanttLocale, GanttProps } from '../../dist/types'
import { Data } from './types'
import { createData } from './utils'

const localeTH: GanttLocale = {
  today: 'วันนี้',
  day: 'วัน',
  days: 'วัน',
  week: 'สัปดาห์',
  month: 'เดือน',
  quarter: 'ไตรมาส',
  halfYear: 'ครึ่งปี',
  firstHalf: 'ครึ่งแรก',
  secondHalf: 'ครึ่งหลัง',
  majorFormat: {
    day: 'DD MMMM YYYY',
    week: 'MMMM YYYY wo [week]',
    month: 'MMMM YYYY',
    quarter: 'YYYY [Q]Q',
    halfYear: 'YYYY-',
  },
  minorFormat: {
    day: 'D',
    week: 'wo [week]',
    month: 'MMMM YY',
    quarter: '[Q]Q',
    halfYear: 'YYYY-',
  },
}

export const defaultProps: GanttProps<Data> = {
  data: createData(3),
  columns: [
    {
      name: 'name',
      label: 'Custom Title',
      width: 100,
    },
  ],
  locale: localeTH,
  hideTable: false,
  tableCollapseAble: false,
  disabled: false,
  alwaysShowTaskBar: false,
  showUnitSwitch: false,
  unit: 'month',
  renderLeftText: () => {
    return null
  },
  renderRightText: () => {
    return null
  },
  renderBarThumb: () => {
    return null
  },
  onUpdate: async (row, startDate, endDate) => {
    console.log('update', row, startDate, endDate)
    return true
  },
}

export const Type = ['PRODUCT', 'EXAM']
