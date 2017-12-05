import { get } from '../get'

const result1 = getSearchData(0,'北京','all','123456')
// result1.then(res=>{
//     res.json()
// }).then(json=>{
//     console.log(json)
// })

export function getSearchData(page, cityName, category, keyword) {
    const keywordStr = keyword ? '/' + keyword : ''
    const result = get('/api/search/' + page + '/' + cityName + '/' + category + keywordStr)
    return result
}