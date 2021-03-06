import { GET_COMMENTS, ADD_COMMENT_SUCCESS } from "../actions/comments.actions";

const initialState = [];

export function commentReducers(state = initialState, action) {
    switch(action.type){
        case GET_COMMENTS:
            const comments = (action.comments);
            return [...comments];
        case ADD_COMMENT_SUCCESS:
            const comment = (action.comment);
            return [...state, comment];
        default:
            return state;
    }
}