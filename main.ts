import { data } from "./src/scripts/data";

const dataAsArray = Object.entries(data)
let maxIncomeSeason = dataAsArray[0]
dataAsArray.forEach(([seasons,data])=>{
    if (data.income>maxIncomeSeason[1].income){
        maxIncomeSeason = [seasons,data]
    }
})

console.log(`Самый прибыльный сезон: ${maxIncomeSeason[0]}`)
console.log(`Прибыль за этот сезон: ${maxIncomeSeason[1].income}`)