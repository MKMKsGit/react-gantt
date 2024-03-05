import dayjs from 'dayjs'
import { Type } from './constants'
import { Data } from './types'

export const createData = (
  length: number,
  options?: {
    startDate?: Date
    randomDisabled?: boolean
    allDisabled?: boolean
    withType?: boolean
  }
) => {
  const { startDate = dayjs().toDate(), randomDisabled = false, allDisabled = false, withType = false } = options || {}
  const result: Data[] = []
  for (let i = 0; i < length; i++) {
    result.push({
      id: i,
      name: 'Title ' + (i + 1),
      startDate: dayjs(startDate)
        .add(i * 2, 'day')
        .format('YYYY-MM-DD'),
      endDate: dayjs(startDate)
        .add(i + Math.random() * 20 + 4, 'day')
        .format('YYYY-MM-DD'),
      disabled: allDisabled || (randomDisabled && Math.random() > 0.5),
      type: withType ? Type[i % 2] : undefined,
    })
  }
  return result
}
