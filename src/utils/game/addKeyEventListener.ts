import { DirectionTypes } from '../../redux/slices/status/statusTypes';

export const addKeyEventListener = (
  direction: DirectionTypes,
  setNewDirection: (dir: DirectionTypes) => void
) => {
  const keyHandler = (e: KeyboardEvent) => {
    const code = e.code;

    if (code === 'ArrowUp') {
      if (
        direction === DirectionTypes.Bottom ||
        direction === DirectionTypes.Top
      ) {
        addKeyEventListener(direction, setNewDirection);
        return;
      }

      setNewDirection(DirectionTypes.Top);
      return;
    }
    if (code === 'ArrowLeft') {
      if (
        direction === DirectionTypes.Right ||
        direction === DirectionTypes.Left
      ) {
        addKeyEventListener(direction, setNewDirection);
        return;
      }

      setNewDirection(DirectionTypes.Left);
      return;
    }
    if (code === 'ArrowRight') {
      if (
        direction === DirectionTypes.Left ||
        direction === DirectionTypes.Right
      ) {
        addKeyEventListener(direction, setNewDirection);
        return;
      }

      setNewDirection(DirectionTypes.Right);
      return;
    }
    if (code === 'ArrowDown') {
      if (
        direction === DirectionTypes.Top ||
        direction === DirectionTypes.Bottom
      ) {
        addKeyEventListener(direction, setNewDirection);
        return;
      }

      setNewDirection(DirectionTypes.Bottom);
      return;
    }

    addKeyEventListener(direction, setNewDirection);
  };

  document.body.addEventListener('keydown', keyHandler, { once: true });

  return () => document.body.removeEventListener('keydown', keyHandler);
};
