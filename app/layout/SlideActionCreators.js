import { BANNER_TOGGLE_NEXT, BANNER_TOGGLE_PREV } from './constants';

export const toggleNext = () => ({
  type: BANNER_TOGGLE_NEXT,
});

export const togglePrevious = () => ({
  type: BANNER_TOGGLE_PREV,
});
