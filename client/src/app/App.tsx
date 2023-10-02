import './App.css';
import {Cone3D} from "../features/Cone/ui/Cone3d";
import {ConeParamsDisplay} from "../features/Cone/ui/ConeParamsDisplay";



function App() {

    return (
        <div className={'App'}>

            <div className={'params'}><ConeParamsDisplay></ConeParamsDisplay></div>
            <div className={'model'}><Cone3D></Cone3D></div>
        </div>

    );
}

export default App;