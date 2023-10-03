import {Cone3D} from "../features/Cone/ui/Cone3d";
import {ConeParamsDisplay} from "../features/Cone/ui/ConeParamsDisplay";
import {AppContainer, AppContent, ModelContainer, ParamsContainer} from "../common/components/styledAppComponents";

function App() {
    return (
        <AppContainer>
            <AppContent>
                <ParamsContainer>
                    <ConeParamsDisplay />
                </ParamsContainer>
                <ModelContainer>
                    <Cone3D />
                </ModelContainer>
            </AppContent>
        </AppContainer>
    );
}

export default App;