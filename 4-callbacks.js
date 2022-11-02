// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)

// const names = ['Andrew', 'Jen', 'Jess']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }

//         callback(data)
//     }, 2000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })

const add = (a, b, callback) => {
    c=a+b
    d=b-a
    setTimeout(() => {
      // console.log(d);
        callback(c);
        callback(d)
    }, 2000)

    setTimeout(()=>{
      callback(a)
    },3000)

    callback(b)
}

//setTimeout(callback,sec){
//   for this many sec loop
//   once end callback() --> no argument cal
//}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
