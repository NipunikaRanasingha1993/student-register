import Action from "../../pages/Action/Action.jsx";
import View from "../../pages/View/View.jsx";

const routes = [
    {
        name : "Action",
        key : "action",
        path : "/action",
        component : <Action/>
    },
    {
        name : "View",
        key : "view",
        path : "/view",
        component : <View/>
    },
]
export default routes;