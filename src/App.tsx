import React, {useState} from 'react';
import './App.css';
import Board from "./Board";

const App: React.FC = () => {

    const initTiles = Array(16).fill(0)
        .map((el, index) => el = index)

    const [tiles, setTiles] = useState(initTiles)

    return (
        <div className="App">
            <Board
                tiles={tiles}
            />
        </div>
    );
}

export default App;
