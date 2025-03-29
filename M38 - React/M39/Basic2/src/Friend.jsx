import {use} from "react"
export default function Friends({friendsPromise}){

    const friends = use(friendsPromise);
    return(
        <div>
            <h3>Friends : {friends.length}</h3>
        </div>
    )
}