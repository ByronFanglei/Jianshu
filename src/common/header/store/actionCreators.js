import * as actionType  from './actionType';

export const searchFocus = () => ({
  type: actionType.CHANGE_INPUT_FOCUS
})
export const searchBlur = () => ({
  type: actionType.CHANGE_INPUT_BLUR
})