import { User } from "../models/Users";

const user = new User({name: 'lmao dead', age: 222});

user.save()