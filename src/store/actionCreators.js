import { CHANGE_INPUT_VALUE,ADD_LIST_VALUE,DEL_LIST_VALUE } from './actionType';

export const gethandInputChange = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});
export const gethandBtnClick = () => ({
    type: ADD_LIST_VALUE
});
export const gethandListDelete = (index) => ({
    type: DEL_LIST_VALUE,
    index
});