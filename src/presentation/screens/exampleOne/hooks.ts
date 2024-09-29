import { useState, useCallback } from 'react';

export type SandclockRow = string[];

export const useSandclockFigure = () => {
  const [numberOfAsterisk, setNumberOfAsterisk] = useState('');
  const [figure, setFigure] = useState<SandclockRow[]>([]);
  const [rotation, setRotation] = useState(0);

  const createSandclockFigure = useCallback(() => {
    const n = parseInt(numberOfAsterisk, 10);
    if (isNaN(n) || n < 1) return;

    let newFigure: SandclockRow[] = [];
    for (let i = n; i > 0; i--) {
      newFigure.push(Array(i).fill('*'));
    }
    for (let i = 2; i <= n; i++) {
      newFigure.push(Array(i).fill('*'));
    }
    setFigure(newFigure);
  }, [numberOfAsterisk]);

  const rotateFigure = (direction: 'left' | 'right') => {
    setRotation(current => (current + (direction === 'left' ? -90 : 90)) % 360);
  };

  return {
    numberOfAsterisk,
    setNumberOfAsterisk,
    figure,
    rotation,
    createSandclockFigure,
    rotateFigure
  };
};