import {CatForm, Cats, DogForm, Dogs} from "./components";
import './App.css';

function App() {
    return (
        <div className={'wrapper'}>
            <div>
                <CatForm/>
                <Cats/>
            </div>

            <div>
                <DogForm/>
                <Dogs/>
            </div>

        </div>
    );
}

export default App;
