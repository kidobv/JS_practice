function person(id, friends) {
    let _friends = friends;
    let _id = id;
    return {
        getId: function () {
            return _id;
        },
        getFriends: () => {
            return _friends;
        },
        setValues: (id, friends) => {
            _id = id;
            _friends = friends;
        },
        addFriend: (person) => {
            _friends.add(person);
        }
    }
}


let person1 = person(1, new Set());
let person2 = person(2, new Set());
let person3 = person(3, new Set());
let person4 = person(4, new Set());
let person5 = person(5, new Set());
let person6 = person(6, new Set());

makeFriends = (p1, p2) => {
    // add each other
    p1.addFriend(p2);
    p2.addFriend(p1); 
    
    //merge friends
    const friendList = mergeFriendsList(p1, p2);
    
    for (const p of friendList) {
        p.setValues(p.getId(), friendList);
    }
}

mergeFriendsList = (p1, p2) =>{
    //merge friend list    
    const uniqueList = new Set();
    let p1Friends = p1.getFriends();
    let p2Friends = p2.getFriends();
    for (let p of p1Friends) {
        uniqueList.add(p);
    }
    for (let p of p2Friends) {
        uniqueList.add(p);
    }
    return uniqueList;
}

areFriends = (p1, p2) => {
    if (p1.getFriends().has(p2) && p2.getFriends().has(p1)) {
        return true;
    }
    return false;
}

getArrayOfFriends=(person)=>{
    let friends = [];
    for (let p of person.getFriends()) {
        friends.push(p.getId());
    }
    return friends;
}

console.log(areFriends(person2, person1));
makeFriends(person3, person4);
makeFriends(person2, person3);
console.log(areFriends(person1, person4));
makeFriends(person5, person6);
makeFriends(person5, person1);
console.log(areFriends(person1, person6));
makeFriends(person1, person2);
console.log(areFriends(person2, person5));

console.log(getArrayOfFriends(person1));
console.log(getArrayOfFriends(person2));
console.log(getArrayOfFriends(person3));
console.log(getArrayOfFriends(person4));
console.log(getArrayOfFriends(person5));
console.log(getArrayOfFriends(person6));

