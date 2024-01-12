/* eslint-disable react/prop-types */
import useTasks from "../../../hooks/useTasks";

const TaskSpaceMain = ({ status }) => {
    

    // loading all tasks 
    const [tasks] = useTasks();

    // filtering task by status 
    const todoTasks = tasks.filter((item) => item.status === "To Do");
    const ongoingTasks = tasks.filter((item) => item.status === "On Going");
    const completedTasks = tasks.filter((item) => item.status === "Completed");

    // console.log(completedTasks)
    // console.log(tasks)
    // console.log(status)


    let text = "to do";
    let bg = "bg-slate-500";
    let tasksToMap = todoTasks;

    if(status === "ongoing"){
        text = "ongoing"
    }
    if(status === "completed"){
        text = "completed"
    }

    return (
        <section>
            <h2>{text}</h2>
        </section>
    );
};

export default TaskSpaceMain;