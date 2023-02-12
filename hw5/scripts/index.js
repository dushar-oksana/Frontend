"use strict";

// Task 1
// -- "Winter" || "Summer" && "Srping" || "Autumn"
    // First goes && operator and return last true: "Winter" || "Spring" || "Autumn". Then goes || operator and return furst true, which is "Winter" 
// -- ("Winter" || "Summer") && ("Srping" || "Autumn")
    // Parenteties are superior, so first goes || operations in parenteties: "Winter" && "Spring". Then && operator returns last true, which is "Spring"
// -- !"" && !505 && !!0 && !"Hello!"
    // Not goes before &&, so we will get true && false && false && false. && returns first false or last true, so it return false
// -- !!(!"" && !505 && !!0 && !"Hello!")
    // first go expression in parenteties, where we first go through ! operator: !!(true && false && false && false) and then && - !!false. Then goease fisrt ! -> !true and one more ! -> false. So result should be false
// -- "Как дела?" && (!505 && !!0) || "Hello!"
    // first goes expression in parenteties which returns false. Then goes && operator, which return false.  Then goes || operator which return equivalent of true - "Hello!"
// -- (false || "Новая строка" && "" || 2023) && !(0 && 10 && "Еще одна строка")
    // First goes left parenteties. Insid first && operator, which return "" (false). false || "" || 2023 return first true which is 2023. Then goes expression in the right parenteties. && operator returns first false - 0. Not operator makes it true. So we have 2023 && true. As && operator return first false or last true, result will be true
// -- false || "Новая строка" && "" || 2023 && !0 && 10 && "Еще одна строка"
    // First go ! operator, so we get false || "Новая строка" && "" || 2023 && true && 10 && "Еще одна строка". Then go && operators fron left to right, so we get false || "" || "Еще одна строка". || will retunr last false or first true, so result will be "Еще одна строка"


// Task 2
function hasProp(object, searchKey) {
    for (let key in object) {
        if (key === searchKey) {
            return object[searchKey];
        } 
    }
    return false;
}

const dog = {
    name: "Enton",
    breed: "Mix",
    city: "Berlin",
    age: 0,
}

console.log(hasProp(dog, "name"));
console.log(hasProp(dog, "gender"));

// Task 3
function returnAddress(array, idSearch) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]["id"] === idSearch) {
            return array[i]["address"];
        }
    }
    return "Sorry, this user doesn't exist"
}

const users = [
    {
        id: 1,
        userName: "Oksana",
        address: "Berlin, Germany",
    },
    {
        id: 2,
        userName: "Tamara",
        address: "Prague, Czech",
    },
    {
        id: 3,
        userName: "Manami",
        address: "Ichikawa, Japan",
    }
];

console.log(returnAddress(users, 2));
console.log(returnAddress(users, 4));

// Task 4
const books = [
    {
        id: 1,
        title: "The Dark Tower: The Gunslinger",
        author: "Stephen King",
        description: "The story centers Roland Deschain, the last gunslinger, who has been chasing his adversary, 'the man in black' for many years. The novel fuses Western fiction with fantasy, science fiction, and horror, following Roland's trek through a vast desert and beyond in search of the man in black.",
        price: 10,
        photo: "#",
        discount: 0,
        getLink: function() {
            let bookId = this.id;
            return `books/item-${bookId}`;
        },
        discountedPrice: function() {
            if (this.discount !== 0) {
                let dis = (100 - this.discount) / 100;
                return this.price * dis;
            } else {
                return this.price;
            }
        },
    },
    {
        id: 2,
        title: "Carrie",
        author: "Stephen King",
        description: "Carrie is a 1974 horror novel by American author Stephen King. Taking place in Chamberlain, Maine, it revolves around Carrie White, a friendless, bullied high-school girl from an abusive religious household who discovers she has telekinetic powers.",
        price: 10,
        photo: "#",
        discount: 10,
        getLink: function() {
            let bookId = this.id;
            return `books/item-${bookId}`;
        },
        discountedPrice: function() {
            if (this.discount !== 0) {
                let dis = (100 - this.discount) / 100;
                return this.price * dis;
            } else {
                return this.price;
            }
        },
    },
    {
        id: 3,
        title: "Lord of the Flies",
        author: "William Golding",
        description: "The story of a group of young boys who find themselves alone on a deserted island. They develop rules and a system of organization, but without any adults to serve as a civilizing impulse, the children eventually become violent and brutal.",
        price: 9,
        photo: "#",
        discount: 20,
        getLink: function() {
            let bookId = this.id;
            return `books/item-${bookId}`;
        },
        discountedPrice: function() {
            if (this.discount !== 0) {
                let dis = (100 - this.discount) / 100;
                return this.price * dis;
            } else {
                return this.price;
            }
        },
    },
    {
        id: 4,
        title: "The Door into Summer",
        author: "Robert A. Heinlein",
        description: "It is 1970, and electronics engineer Dan Davis has finally made the invention of a lifetime: a household robot with extraordinary abilities, destined to dramatically change the landscape of everyday routine. Then, with wild success just within reach, Dan's greedy partner and even greedier fiancée steal his work and leave him penniless, and trick him into taking the long sleep—suspended animation for thirty years.",
        price: 9,
        photo: "#",
        discount: 0,
        getLink: function() {
            let bookId = this.id;
            return `books/item-${bookId}`;
        },
        discountedPrice: function() {
            if (this.discount !== 0) {
                let dis = (100 - this.discount) / 100;
                return this.price * dis;
            } else {
                return this.price;
            }
        },
    },
]

for (let i = 0; i < books.length; i++) {
    console.log(`Book title: ${books[i]["title"]}`);
    console.log(`Author: ${books[i]["author"]}`);
    console.log(`Description: ${books[i]["description"]}`);
    console.log(`Photo: ${books[i]["photo"]}`);
    console.log(`Link: ${books[i].getLink()}`);
    console.log(`Price: ${books[i].discountedPrice()}`);
}