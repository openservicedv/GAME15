import React, {useEffect, useState} from 'react';
import './App.css';
import Board from "./Board";

const App: React.FC = () => {

    const [tiles, setTiles] = useState(Array(16)
        .fill(0)
        .map((el, index) => index)
        .sort(() => Math.random() - 0.4))
    const [empty, setEmpty] = useState(0)
    const [isTileDisable, setIsTileDisable] = useState(Array(16)
        .fill(true));
    const array: number[] = []
    const row = (n: number) => (Math.floor(n / 4))
    const col = (n: number) => (n % 4)

    const handleDisable = () => {
        let booleanArray: (boolean | number)[] = [...tiles]
        console.log(`zero is here - ${empty}`)
        console.log(`row - ${row(empty)}`)
        console.log(`col - ${col(empty)}`)
        tiles.forEach((el, index) => {
            if (el <= 15 && el >= 0 && row(index) === row(empty) && ((empty + 1) === index || (empty - 1) === index)) {
                array.push(index)
            }
            if (el <= 15 && el >= 0 && col(index) === col(empty) && ((empty + 4) === index || (empty - 4) === index)) {
                array.push(index)
            }
        })
        array.forEach(element => {
            booleanArray = booleanArray.map((el, i) => (i === element ? false : el))
        })
        setIsTileDisable(booleanArray)
    }

    const checkGame = () => {
        if (tiles.every((el, i) => el - 1 === i)) {
            setIsTileDisable(isTileDisable.map(el => true))
            console.log("победа!")
        }
    }

    useEffect(() => {
        setEmpty(tiles.indexOf(0, 0))
        // console.log(empty)
    }, []);

    useEffect(() => {
        handleDisable()
    }, [empty, setEmpty]);

    useEffect(() => {
        checkGame();
    }, [tiles, setTiles]);

    return (
        <div className="App">
            {/*<h1>{JSON.stringify(isTileDisable)}</h1>*/}
            <Board
                tiles={tiles}
                setTiles={setTiles}
                empty={empty}
                setEmpty={setEmpty}
                isTileDisable={isTileDisable}
                setIsTileDisable={setIsTileDisable}
            />
        </div>
    );
}

export default App;
