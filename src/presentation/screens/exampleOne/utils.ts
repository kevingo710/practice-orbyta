import {SandclockRow} from './hooks';

export const isFigureEmpty = (figure: SandclockRow[]): boolean => {
  return figure.length <= 0;
}
