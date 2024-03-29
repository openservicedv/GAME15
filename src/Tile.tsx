import React from 'react';

interface TileProps {
    index: number
    el: number
    empty: number
    isTileDisable: boolean[]
    tiles: number[]
    setEmpty: (empty: number) => void
}

const Tile: React.FC<TileProps> = ({isTileDisable, tiles, index, empty, setEmpty, el}) => {
    const handleTileClick = () => {
        if (tiles[index]) {
            [tiles[index], tiles[empty]] = [tiles[empty], tiles[index]]
        }
        setEmpty(index)
    }
    return (
        <div>
            <button
                className={tiles[index] === 16 ? "tile-white" : "tile-gray"}
                disabled={isTileDisable.find((el, i) => i === index)}
                onClick={handleTileClick}
            >{el === 16 ? "" : el}
            </button>
        </div>
    );
};

export default Tile
