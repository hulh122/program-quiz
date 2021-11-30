console.log('start');

async function test(){
    console.log('111');

    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('finish')
            resolve('haha');
        },6000)
    })

    console.log('start promise2')

    return await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('finish2')
            resolve('haha2');
        },6000)
    })
}

test().then((data)=>
    console.log(data)
)

console.log('end');
