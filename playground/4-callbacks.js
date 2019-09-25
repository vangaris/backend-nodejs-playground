// setTimeout(()=>{
//     console.log("Two seconds are up")
// }, 2000)

// const names = ['Andrew', 'Jen','Jess']

// const shorTnames = names.filter((name)=>{
//     return name.lenght < 4
// }) 


// const geocode =(address, callback)=>{
    
//     setTimeout(()=>{
//         const data = {
//             longitude: 0,
//             latitude:0
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('Athens',(data)=>{
//     console.log(data)
// })


const add = (x, y, callback) =>{
    setTimeout(()=>{
        const sum = x + y;
        callback(sum);

    },2000)
}

add(1,2,(sum)=>{
    
    console.log(sum)

})

