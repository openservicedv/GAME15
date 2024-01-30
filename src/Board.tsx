import React from 'react';
import Tile from "./Tile";

interface BoardProps {
    tiles: number[]
}

const Board: React.FC<BoardProps> = ({tiles}) => {

    const renderRow = (rowIndex: number) => {
        return (
            <div>

                {tiles.slice(rowIndex * 4, (rowIndex + 1) * 4).map((value, index) => (
                    <Tile
                        key={index}
                        value={value}

                    />
                ))}
            </div>
        )
    }

    return (
        <div>
            <div>
                {[0, 1, 2, 3].map(renderRow)}
            </div>
        </div>
    );
};

export default Board;
