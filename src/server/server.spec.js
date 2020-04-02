/*
import { addNewTask, updateTask } from './communicate-db'

(async function(){
    await addNewTask({name:"Spec task",isComplete:true,id:"TEST-1"});
    console.info("Added task");
    await updateTask({name:"Spec Task (UPDATED)",id:"TEST-1",isComplete:false});
    console.info("Task updated");
})();*/

import {addNewTask, updateTask} from "./server";

(async function f() {
    await addNewTask({
        name: "My task 2",
        id:"123456"
    });

    await updateTask({
        id:"12345",
        name:"My task 2 is updated"
    });
})();

