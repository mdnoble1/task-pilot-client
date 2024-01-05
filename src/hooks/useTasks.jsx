import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useTasks = () => {
        const { user } = useAuth()

        const axiosSecure = useAxiosSecure();

        // console.log(user.email)

        


    // tan stack query 
    const { data : tasks= [], refetch } = useQuery({
        queryKey: ["task" , user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks?user_email=${user.email}`)
            return res.data;
        }
    });
    return [ tasks, refetch ];
};
 
export default useTasks;