import { useDispatch, useSelector } from 'react-redux';
import { addCurrScoreToList } from '../../redux/slices/score/scoreSlice';
import { toggleGame } from '../../redux/slices/status/statusSlice';
import { RootState } from '../../redux/store';

export const Score: React.FC = () => {
  const dispatch = useDispatch();

  const { currScore, level } = useSelector((state: RootState) => state.score);

  const menuClickHandler = () => {
    if (currScore > 0) {
      const d = new Date();
      const date = d.toLocaleString();

      dispatch(addCurrScoreToList(date));
    }

    dispatch(toggleGame(false));
  };

  return (
    <div className="score-container">
      <div>
        Level: <span>{level}</span>
      </div>
      <div>
        Curr score: <span>{currScore}</span>
      </div>
      <button onClick={menuClickHandler}>Menu</button>
    </div>
  );
};
