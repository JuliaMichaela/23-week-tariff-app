import './styles/App.css';
import { useState } from 'react';
import Tariff from './components/Tariff';
import tariffs from './components/Tariffs';
import themeA from "./styles/300.module.css";
import themeB from "./styles/450.module.css";
import themeC from "./styles/550.module.css";
import themeD from "./styles/1000.module.css";

function App() {
  const themes = [themeA, themeB, themeC, themeD];
  const [selectedId,setSelectedId] = useState(null);

  return (
    <div className="App">
      <div className="plans">
        {tariffs.map((tariff, i) => 
          <Tariff
            key={tariff.id}
            card={tariff}
            isSelected={tariff.id === selectedId}
            setId={setSelectedId}
            theme={themes[i]}
          />
          )
        }
      </div>
    </div>
  );
}

export default App;
