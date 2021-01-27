import {types} from "../types/types";

const initialState = {

  notes:[], 
  active:null
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state, 
        active:{
          ...action.payload
        }
      }

    case types.notesAddNew:
      console.log(action.payload)
      return{
        ...state, 
        notes:[action.payload, ...state.notes]
      }

    case types.notesLoad:
      return{
        ...state, 
        notes:[...action.payload]
      }

    case types.notesDelete:
      return{
        ...state, 
        active:null, 
        notes: state.notes.filter(note=>note.id!==action.payload)
      }

    case types.notesLogoutClean:
      return{
        ...state, 
        active:null, 
        notes:[]
      }
    default:
      return state
  }
};
