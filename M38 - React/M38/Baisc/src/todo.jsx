// export default function Todo({task,isDone}){
//     return(
//         <div>
//             <h2>Todo</h2>
//             <li>{task}</li>
//         </div>
//     )
// }

// export default function Todo({task,isDone}){
   
//     if(isDone){
//         return(
//             <div>
//                 <h2>Done Tasks</h2>
//                 <li> {task}</li>
//             </div>
//         )
//     }
//     else{
//         return(
//             <div>
//                 <h2>Pending Tasks</h2>
//                 <li>{task}</li>
//             </div>
//         )
//     }
// }


//---Conditional Rendering: 3 ternary ( condition? true : false)

// export default function Todo({task,isDone}){

//     return isDone ? <li>Done:  {task}</li> : <li>Not Done: {task}</li>
// }

// export default function Todo({task,isDone}){

//     return isDone && <li>Completed Task : {task}</li>
// }

export default function Todo({task,isDone}){

    let listItem;

    if(isDone){
        listItem = <li>Done : {task}</li>
    }
    else{
         listItem = <li>Not Done  : {task}</li> 
    }

    return listItem
}