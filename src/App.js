import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CommentsPage, PostsPage, SinglePostPage, SingleUserPage, UsersPage} from "./pages";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
        <Route path={'users'} element={<UsersPage/>}>
            <Route path={':userId'} element={<SingleUserPage/>}>
                <Route path={'posts'} element={<PostsPage/>}/>
            </Route>
        </Route>
        <Route path={'posts'} element={<PostsPage/>}>
            <Route path={':postId'} element={<SinglePostPage/>}>
                <Route path={'comments'} element={<CommentsPage/>}/>
            </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
