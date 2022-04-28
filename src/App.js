import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CommentsPage, LoginPage, PostsPage, SinglePostPage, SingleUserPage, UsersPage} from "./pages";
import {RequireAuth} from "./hoc/RequireAuth";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':userId'} element={
                        <RequireAuth>
                            <SingleUserPage/>
                        </RequireAuth>
                    }>
                        <Route path={'posts'} element={<PostsPage/>}/>
                    </Route>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':postId'} element={<SinglePostPage/>}>
                        <Route path={'comments'} element={<CommentsPage/>}/>
                    </Route>
                </Route>
                <Route path={'/login'} element={<LoginPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
