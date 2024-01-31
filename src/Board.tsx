import React from 'react';
import Tile from "./Tile";

interface BoardProps {
    tiles: number[]
    empty: number
    isTileDisable: boolean[]
    setTiles: (tiles: number[]) => void
    setEmpty: (empty: number) => void
    setIsTileDisable: (isTileDisable: boolean[]) => void
}

const Board: React.FC<BoardProps> = ({tiles, empty, setEmpty, isTileDisable, setIsTileDisable}) => {

    return (
        <div className="container">
            <div className="board">
                {tiles.map((el, index) => (
                    <Tile
                        key={index}
                        index={index}
                        el={el}
                        empty={empty}
                        setEmpty={setEmpty}
                        isTileDisable={isTileDisable}
                        tiles={tiles}
                    />
                ))}
            </div>
        </div>
    )
}

export default Board;
