import {MainLayout} from "./layouts";
import {CarsPage, NotFoundPage, SingleCarPage} from "./pages";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {
  return (
   <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'cars'}/>}/>
            <Route path={'cars/:id'} element={<SingleCarPage/>}/>
            <Route path={'cars'} element={<CarsPage/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Route>
   </Routes>
  );
}

export default App;
