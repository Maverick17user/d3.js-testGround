import { loger } from '../../common.js'

// Statistics
export default () => {
    const arr = [2, 8, 0, -1, 'ilikecandies', null, undefined]

    console.log('\n*=*=*=*=*=*=* Arrays / Statistics *=*=*=*=*=*=*')
    loger(0, 'arr', arr)
    console.log('*=*=*=*=*=*=*=*=*=*=*   *=*=*=*=*=*=*=*=*=*=*=*')

    // 1 .min()
    {
        const minInArr = d3.min(arr)
        loger(1, '.min(arr)', minInArr)
    }
    // 2 .max()
    {
        const maxInArr = d3.max(arr)
        loger(2, '.max(arr)', maxInArr)
    }
    // 3 .extent() - max & min
    {
        const extentInArr = d3.extent(arr)
        loger(3, '.extent(arr)', extentInArr)
    }
    // 4 .sum()
    {
        const sumOfArr = d3.sum(arr)
        loger(4, '.extent(arr)', sumOfArr)
    }
    // 5 .mean() - average value
    {
        const meanOfArr = d3.mean(arr)
        loger(5, '.mean(arr)', meanOfArr)
    }
}