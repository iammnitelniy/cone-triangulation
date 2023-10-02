import React from 'react';
import {ConeParamsDisplay} from "../features/Cone/ui/ConeParamsDisplay";
import {Cone3D} from "../features/Cone/ui/Cone3d";
import {AppContainer, ModelContainer, AppContent, ParamsContainer} from "../common/components/styledAppComponents";
import {Title} from "@mui/icons-material";


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