import logo from "./logo.svg";
import "./App.css";
import AutomaticBatching from "./components/00_AutomaticBatching";
import UseTransition from './components/01_useTransition';
import UseDeferredValue from './components/02_useDeferredValue';
import UseId from './components/03_useId';
import UseInsertionEffect from './components/04_useInsertionEffect';
import UseSyncExternalStore from './components/05_UseSyncExternalStore';
import SuspenseDemo from './components/06_Suspense';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div>
          <img src={logo} width="500px" className="App-logo" alt="logo" />
          <h1>React v18</h1>
        </div> */}

        <div>
          <img src={logo} width="300px" className="App-logo-small" alt="logo" />
        </div>

        <div>
          <h1>React v18</h1>
          {/* <h2>Automatic Batching</h2> */}
          {/* <h2>Nuevos Hooks</h2> */}
          {/* <h4>
            useTransition - useDeferredValue - useId - useInsertionEffect -
            useSyncExternalStore - Suspense
          </h4> */}
          {/* <h2>Concurrencia</h2>
          <h5>Es un conjunto de nuevas características que ayudan a las aplicaciones de React a mantener la capacidad de respuesta y ajustarse con elegancia a las capacidades del dispositivo del usuario y la velocidad de la red.</h5>
          <h5>Algunas de estas funciones aún son experimentales y están sujetas a cambios.</h5> */}
        </div>

        <div>
          {/* <AutomaticBatching /> */}
          {/* <UseTransition /> */}
          {/* <UseDeferredValue /> */}
          {/* <UseId /> */}
          {/* <UseInsertionEffect /> */}
          {/* <UseSyncExternalStore /> */}
          {/* <SuspenseDemo /> */}
        </div>
        
        {/* <div>
        <img width="500px" alt="meme" src="./attention.jpg" />
      </div> */}

        {/* <div>
          <img width="500px" alt="meme" src="./atsistemas.png" />
        </div> */}
      </header>
    </div>
  );
};

export default App;
