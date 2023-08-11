import { Link } from "react-router-dom";
import Todo from 'Todo.jsx'

export default function Home(){
    return (
        <div>
            <h1>Home</h1>
            <Link to="/app"> APP </Link>
        </div>
     
    );


}