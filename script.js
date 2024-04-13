let totalArea = 3.1415 * 5 * 5 // Area of Circle= 3.1415 * r * r ; radius(r)= 5//
console.log(totalArea)//78.53= is the area of garden
let TotalCapacity = totalArea / 0.8 // Garden Area/ area 1 plant requires = Maximum number of plants in that area//
console.log(TotalCapacity)//98.17 plants is the max capacity of the garden


let Trees = 20
for (let week = 1; week <= 3; week++) {
    if (Trees = Trees * 2) {
        console.log(`${Trees}:"week"${week}`)
    }
    if (Trees > TotalCapacity * 0.8) {
        console.log(`"Pruned" :"week"${week}`)
    } else if (Trees >= TotalCapacity * 0.5) {
        console.log(`"Monitored" ::"week"${week}"`)
    } else { console.log(`"Planted" :"week"${week}`) }


}

//Part Two: no. of trees to start = 100 and 10 weeks of no pruning//

let treeNum = 100
for (let week = 1; week <= 10; week++) {
    console.log(`Trees=${treeNum} : WeekNo. = ${week}`) // 51200 trees in 10 weeks
    treeNum = treeNum * 2
}

let treeArea = 0.8
if (additionalArea = treeArea * 51200) {
    console.log(`Additional Area Required after 100 days :${additionalArea}`)//40960//
}
if (additionalArea = 40960) {
    console.log("Radius = ", Math.sqrt(additionalArea / 3.1415))

}

//treeNum=100; treeArea = 0.8; totalArea = 78.53
try {
    if (treeNum * treeArea > totalArea) {
        throw `The number of trees exceed the garden limit`
    }
    console.log("Limit Exceeded")
} catch (error) { console.log(`The catch b;ock is being executed with this error:${error}`) }




/** 
// week 1//
if( growth = 20 * 2 ) 
{
console.log(`${growth} : Week 1 Growth`)} //Week 1 Plant Growth = 40 plants//

if ( growth > TotalCapacity * 0.8){
    console.log("Pruned : Week 1")
} else if (growth> TotalCapacity * 0.5){
    console.log("Monitored : Week 1")
} else { console.log("Planted : Week 1")} // Week 1 Garden Decision : Planted //

//week 2//
let week2 = 2
if (growth2 = growth * 2)
{
    console.log(`${growth2} : Week 2 Growth`)} // Week 2 Plant Growth = 80 Plants //

if ( growth2 > TotalCapacity * 0.8){
    console.log("Pruned : Week 2")
} else if (growth2> TotalCapacity * 0.5){
    console.log("Monitored : Week 2")
} else { console.log("Planted : Week 2")} // Week 2 Garden Decision : Pruned //

// week 3//
if (growth3 = growth2 * 2) {
    console.log(`${growth3} : Week 3 Growth`) // Week 3 Plant Growth : 160
}
if ( growth3 > TotalCapacity * 0.8){
    console.log("Pruned : Week 3")
} else if (growth3> TotalCapacity * 0.5){
    console.log("Monitored : Week 3")
} else { console.log("Planted : Week 3")}

// ==========================================================================//

    let tree = 100
    let week10 = 10
    Growth10 = tree * 2 * 10
    if(AreaRequired_week10 = Growth10 * 0.8) {
        console.log ( `${AreaRequired_week10 - totalArea }: Additional Area Required `)
    }

        
 let t=100
 for( let week = 0; week <=10 ; week++)
 { console.log(t * 2)} */