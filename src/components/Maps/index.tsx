import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGameMap } from '../../redux/slices/grid/gridSlice';
import { setMul } from '../../redux/slices/score/scoreSlice';
import { RootState } from '../../redux/store';
import {
  fillVirtualGrid,
  fillVirtualGrid2,
  fillVirtualGrid3,
  fillVirtualGrid4,
} from '../../utils';
import { MapGrid } from '../MapGrid';

export const Maps: React.FC<{ gridSize: number; close: () => void }> = ({
  close,
  gridSize,
}) => {
  const dispatch = useDispatch();
  const currMapId = useSelector((state: RootState) => state.grid.currMapId);

  const [mapIndex, setMapIndex] = React.useState(currMapId);

  const mulList = [1, 1.5, 2.5, 4.5];
  const maps = [];

  for (let i = 1; i <= 4; i++) {
    switch (i) {
      case 1:
        maps.push(
          <MapGrid
            onClick={() => setMapIndex(1)}
            selected={mapIndex === i}
            gridSize={gridSize}
            virtualGrid={fillVirtualGrid(gridSize).grid}
            name={'Default'}
            mul={mulList[i - 1]}
            key={i}
          />
        );
        break;
      case 2:
        maps.push(
          <MapGrid
            onClick={() => setMapIndex(2)}
            selected={mapIndex === i}
            gridSize={gridSize}
            virtualGrid={fillVirtualGrid2(gridSize).grid}
            name={'Сlosed box'}
            mul={mulList[i - 1]}
            key={i}
          />
        );
        break;
      case 3:
        maps.push(
          <MapGrid
            onClick={() => setMapIndex(3)}
            selected={mapIndex === i}
            gridSize={gridSize}
            virtualGrid={fillVirtualGrid3(gridSize).grid}
            name={'Labyrinth box'}
            mul={mulList[i - 1]}
            key={i}
          />
        );
        break;
      case 4:
        maps.push(
          <MapGrid
            onClick={() => setMapIndex(4)}
            selected={mapIndex === i}
            gridSize={gridSize}
            virtualGrid={fillVirtualGrid4(gridSize).grid}
            name={'Fourth dimension'}
            mul={mulList[i - 1]}
            key={i}
          />
        );
        break;
    }
  }

  const closeClickHandler = () => {
    close();
    dispatch(setGameMap(mapIndex));
    dispatch(setMul(mulList[mapIndex - 1]));
  };

  return (
    <div className="maps">
      <div className="maps__list">{maps}</div>
      <button onClick={closeClickHandler}>Select</button>
    </div>
  );
};
