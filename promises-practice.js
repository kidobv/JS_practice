//Really good video on Promises => https://www.youtube.com/watch?v=vn3tm0quoqE&ab_channel=Fireship

let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2) {
        resolve('Success');
    }
    else {
        reject('Failed');
    }
})

p.then((message) => {
    //console.log('This is in the then ' + message);
}).catch((message) => {
    //console.log('This is in the catch ' + message);
});

// For the tech screen the exercise was to make "post requests" but my interviewer 
// didn’t want me to make actual requests so we made promises for the tasks 
// that just did like a console log. And then yes we used promise.all

// const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => res.json())
//     .then(todo => console.log(todo))

const codeBlocker = () => {
    let i = 0;
    while (i < 1000000000) { i++ }
    return '1 Billion loops done!'
}

//failed attempt to remove blocking code off the main thread
const codeBlockerPromise = () => {
    return new Promise((resolve, reject) => {
        let i = 0;
        while (i < 2000000000) { i++; }
        //this is blocking because we want sync 2 to print out first
        console.log("test blocking")
        //the creation of the Promise and while loop will be executed in the main thread, the only thing that will go to the micro task queue is the resolve()
        resolve('2 Billion loops done!');
    })
}

//the only way to put the code off the main thread is by resolving the promise this will put the task in the micro queue, then execute the blocking code
const codeBlockerResolved = () => {
    return Promise.resolve().then(v => {
        let i = 0;
        while (i < 10000000000) { i++; }
        console.log("test non-blocking")
        return '10 Billion loops done!';
    })
}

// console.log('sync 1')
// console.log(codeBlocker())
// codeBlockerPromise().then(data=> console.log(data))
// codeBlockerResolved().then(data=> console.log(data))
// console.log('sync 2')

const getFlavor = async (food) => {
    const flavors = {
        cake: 'sweet',
        cheese: 'savory',
        lemon: 'sour',
    }
    //By using the async keyword the function will automatically wrap the return statement in a Promise.resolve()
    return flavors[food]
}
//console.log(getFlavor("cake").then(console.log))
//getFlavor("lemon").then(console.log)

//async await in series, we don't need to wait for cake unless we need its result to get lemon
const mixFlavors = async () => {
    const a = await getFlavor("cake");
    const b = await getFlavor("lemon");
    //By using the async keyword the function will automatically wrap the return statement in a Promise.resolve()
    return [a, b]
}
//mixFlavors().then(console.log)


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//delay(3000).then(() => console.log('runs after 3 seconds'));

const getFlavorDelayed = (food) => {
    const flavors = {
        cake: 'sweet',
        cheese: 'savory',
        lemon: 'sour',
    }
    const result = new Promise((resolve, reject) =>
        setTimeout(() => resolve(flavors[food]), 500)
    );
    return result;
}
//we can see that the delay adds up from the two promesis being solved in series
const mixFlavorsDelayed = async () => {
    const start = Date.now()
    const a = await getFlavorDelayed("cake");
    const b = await getFlavorDelayed("lemon");
    console.log("Elapsed: ", `${Date.now() - start}ms`)
    return [a, b]
}
//mixFlavorsDelayed().then(res => console.log("serial", res))

//to parallelize them we can use await Promise.all() instead of await per promise. Promise.race() will return which ever finished first
const mixFlavorsParallel = async () => {
    const start = Date.now()
    const a = getFlavorDelayed("cake");
    const b = getFlavorDelayed("lemon");
    const flavors = await Promise.all([a, b]);
    console.log("Elapsed: ", `${Date.now() - start}ms`)
    return flavors
}
//mixFlavorsParallel().then(res => console.log("parallel", res))

//remember you can use try catch to catch any errors from promises
const badMix = async () => {
    try {
        const start = Date.now()
        const a = getFlavorDelayed("cake");
        const b = getFlavorDelayed("lemon");
        const flavors = await Promise.all([a, b]);
        console.log("Elapsed: ", `${Date.now() - start}ms`)
        throw "broken !"
        return flavors;
    } catch (error) {
        console.error("aaaaaaaaah")
        return error
    }
}
//badMix().then(res => console.log(res));

const fetchAllFlavors = async () => {
    const foods = ["cake","lemon", "cheese"]
    try {
        const start = Date.now()
    ////the await in this case is not going to pause execution instead it will continue and resolve the promises concurrently
        // const flavors = foods.map(async f => {            
        //     const flavor = await getFlavorDelayed(f)
        //     console.log(flavor);
        //     return flavor;
        // });  
        // console.log("Elapsed: ", `${Date.now() - start}ms`)
        // return flavors;

    ////This is a more clear way if we want to execute them concurrently
        // const flavorsP = foods.map( f => {
        //     const flavor = getFlavorDelayed(f)
        //     console.log(flavor);
        //     return flavor;
        // });  

        // const res = await Promise.all(flavorsP)
        // console.log("Elapsed: ", `${Date.now() - start}ms`)
        // return res;

    ////we can use a traditional for loop to resolve them in series
        let resultSync = [];
        for (const f of foods) {
            const res = await getFlavorDelayed(f);
            console.log(res)
            resultSync.push(res);
        }
        console.log("Elapsed: ", `${Date.now() - start}ms`)
        //return result;  

    ////we can use a traditional for loop with await to resolve them in parallel, looping over promises
        const flavors = foods.map(f => getFlavorDelayed(f))        
        const result = []
        for await (const f of flavors) {
            console.log(f);
            result.push(f);
        }
        console.log("Elapsed: ", `${Date.now() - start}ms`)
        return result;
        
    } catch (error) {
        console.error("aaaaaaaaah", error)
        return error
    }
}
//console.log(fetchAllFlavors()) 
fetchAllFlavors().then(r => console.log(r));

//Netflix practice

// Create a function that batches fetch requests 

let queue = [];

async function getFullName(idx){
    let name = getName(idx);
    let lastName = getLastName(idx);
    queue.push(name, lastName);

    if(queue.length >= 3){
       return Promise.all(queue)
    }
}

function getName(idx){
    // return new Promise((resolve, reject) => {
    //     if(idx == 1)
    //         resolve("Kidany")
    //     else
    //         resolve("Amelia")
    // })
    return Promise.resolve().then(v => {
        if (idx == 1)
            return "kidany"
        else
            return "Amelia"
    })
}

function getLastName(idx){
    return new Promise((resolve, reject) => {
        if (idx == 1)
            resolve("Berrios")
        else
            resolve("Vance")
    })
}

getFullName(1)
getFullName(2).then(res => console.log(res))