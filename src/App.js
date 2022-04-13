import {Posts, SelectedUser, Users} from "./components";
import css from './App.module.css';
import {useState} from "react";
import {postsService} from "./services";

function App() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [posts, setPosts] = useState([]);

    const getUserId = async (userId) => {
        const {data} = await postsService.getPostByUserId(userId);
        setPosts(data);
    }

    const trigger = () => {
        setPosts([])
    }

  return (
    <div>
        <div className={css.wrapper}>
            <Users getUser={setSelectedUser} trigger={trigger}/>
            {selectedUser && <SelectedUser user={selectedUser} getUserId={getUserId}/>}
        </div>
        <Posts posts={posts}/>
    </div>
  );
}

export default App;
