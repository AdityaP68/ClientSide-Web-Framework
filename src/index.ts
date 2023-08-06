import { User } from "../models/Users";

const user = new User({name: "Aditya", age: 20})
user.set({name: "newName"})

console.log(user.get('name'))
console.log(user.get('age'))