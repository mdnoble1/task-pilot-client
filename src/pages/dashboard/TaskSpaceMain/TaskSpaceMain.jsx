import useTasks from "../../../hooks/useTasks";

const TaskSpaceMain = () => {

    // loading all tasks 
    const [tasks] = useTasks();

    // filtering task by status 
    const todoTasks = tasks.filter((item) => item.status === "To Do");
    const ongoingTasks = tasks.filter((item) => item.status === "On Going");
    const completedTasks = tasks.filter((item) => item.status === "Completed");

    console.log(completedTasks)



    return (
        <section>
            TAsk space
        </section>
    );
};

export default TaskSpaceMain;