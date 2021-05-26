import { createStore } from "redux"
import reducer from "./reducer";

import Robert from "./../../images/usersPhoto/Robert.png";
import Kim from "./../../images/usersPhoto/Kim.png";
import Christy from "./../../images/usersPhoto/Christy.png";
import user from "./../../images/user.png";

const initialState = {
    users: [{
        name: "Viezh Robert", city: "Warsaw", country: "Poland", rating: 4.5,  photo: Robert,
        feedback: `“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.”.`
    },
    {
        name: "Yessica Christy", city: "Shanxi", country: "China", rating: 4.2,  photo: Kim,
        feedback: `“I like it because I like to travel far and still can connect with high speed.”.`
    },
    {
        name: "Kim Young Jou", city: "Seoul", country: "South Korea", rating: 4.5,  photo: Christy,
        feedback: `“This is very unusual for my business that currently requires a virtual private network that has high security.”.`
    },
    {
        name: "Jecky Chan", city: "Beijing", country: "China", rating: 5.0,  photo: user,
        feedback: `“bla bla bla bla bla bla bla bla bla bla bla bla blabla blabla blabla bla  bla bla bla bla  bla bla.”.`
    },
    {
        name: "Lee DO Hwa", city: "Cheju", country: "South Korea", rating: 4.5,  photo: user,
        feedback: `“Greate, Brilliant, Greate, Brilliant, Greate, Brilliant, Greate, Brilliant, Greate, Brilliant, Greate, Brilliant, Greate, Brilliant.”.`
    },
    {
        name: "Wendy", city: "Seoul", country: "South Korea", rating: 5.0, photo: user,
        feedback: `“This is very unusual for my business that currently requires a virtual private network that has high security.”.`
    }
    ]
}

const store = createStore(reducer, initialState);
export default store;