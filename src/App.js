import './App.css';
import {Comments, Posts, Users} from "./components";

function App() {
    return (
        <div>
            <div className={'users_posts'}>
                <Users/>
                <Posts/>
            </div>
            <Comments/>
        </div>
    );
}

export default App;