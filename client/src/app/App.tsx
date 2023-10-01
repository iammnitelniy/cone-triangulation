import React, {useEffect, useState} from 'react';
import './App.css';
import {ConeParamsDisplay} from "../features/Cone/ui/ConeParamsDisplay";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store";

function App() {


    const coneH = useSelector((state: AppRootStateType) => state.coneParams.height)
    const coneR = useSelector((state: AppRootStateType) => state.coneParams.radius)
    const coneS = useSelector((state: AppRootStateType) => state.coneParams.segments)
    // const [data, setData] = useState<any>(null);
    //
    // useEffect(() => {
    //     fetch("/api/coneParams/6519a8cf8c28de0af57bf5ce")
    //
    //         .then((res) => res.json())
    //         .then((data) => setData({height: data.height, radius: data.radius, segments: data.segments}));
    //
    //
    // }, []);


    const onClickHandler = () => {
        console.log(coneH, coneR, coneS)

        // const url = '/api/coneParams/';
        // const requestData = {
        //     height: 15, // Замените на нужные значения
        //     radius: 15,  // Замените на нужные значения
        //     segments: 15,  // Замените на нужные значения
        // };
        //
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(requestData),
        // })
        //     .then((res) => {
        //         if (!res.ok) {
        //             throw new Error('Ошибка HTTP, статус ' + res.status);
        //         }
        //         return res.json();
        //     })
        //     .then((responseData) => {
        //         // Обработка данных, полученных от сервера
        //         console.log('Данные, полученные после POST-запроса:', responseData);
        //     })
        //     .catch((error) => {
        //         // Обработка ошибки
        //         console.error('Произошла ошибка при выполнении POST-запроса:', error);
        //     });
    }

  return (
      <div className="App">
        <header className={'App-header'}>
          {/*<img src={logo} className="App-logo" alt="logo" />*/}

          {/*<p>{!data ? "Loading..." : `${data.height}  ${data.radius}  ${data.segments}`} </p>*/}
            <button style={{height: "100px", width: '100px'}} onClick={() => {onClickHandler()}}>+</button>

        </header>
          <ConeParamsDisplay />
      </div>
  );
}

export default App;
