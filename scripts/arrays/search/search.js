import { loger } from '../../common.js'

// Search
export default () => {
    const arr = [2, 8, 0, -1, 'ilikecandies', null, undefined]

    console.log('\n*=*=*=*=*=*=* Arrays / Search *=*=*=*=*=*=*')
    loger(0, 'arr', arr)
    console.log('*=*=*=*=*=*=*=*=*=*   *=*=*=*=*=*=*=*=*=*=*')

    // 1 .scan(arr) - index of minimal arr element according comporator (AC)
    {
        // 1.1 (difault, without comporator) 
        // as a function(a, b) { return a - b; } -> min arr elem AC
        let scanOfArr = d3.scan(arr)
        loger(1.1, '.scan(arr, no?comporator)', scanOfArr)
        
        // 1.2 (without comporator) 
        // as a function(a, b) { return b - a; } -> max arr elem AC
        scanOfArr = d3.scan(arr, function(a, b) { return b - a; })
        loger(1.2, '.scan(arr, with?comporator)', scanOfArr)
    }
    // TODO: 2 .ascending(a, b) -> -a > b -> true as 1; false as -1
    {
        const ascendingOfArr = d3.ascending(4, 3) // 4 > 3 -> true as 1
        loger(2, '.ascending(a, b)', ascendingOfArr)
    }
    // TODO: 3 .descending(a, b) -> -1 if its false, 1 if its true
    {
        const ascendingOfArr = d3.descending(5,0) 
        loger(3, '.descending(a, b)', ascendingOfArr)
        // 5,3,0 it's a descending -> true as 1
    }
}