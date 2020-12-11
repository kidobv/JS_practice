const fetch = require("node-fetch");
const axios = require("axios");

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

getAsyncData = async () => {
    let response;
    // try{
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => console.log(json))

    // }
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const todo = await res.json();
        console.log(`fetch response: `, todo);

    }
    finally {
        console.log(`done fetch`);
    }

    try {
        response = await axios.get('https://jsonplaceholder.typicode.com/todos/2')
        console.log(`axios response: `, response.data);
    }
    finally {
        console.log(`done axios`);
    }
}

getAsyncData();

