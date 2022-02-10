import { spa } from "../../model/spa";
import { spaActions, spaActionsType } from "./spa.actions";

export const SPA_REDUCER_NODE = 'spa';

export interface SpaState {
    idIncrement: number;
    spaList: spa[];
}

const initialState: SpaState = {
    idIncrement: 1,
    spaList: []

};

export const spaReducer = (state = initialState, action: spaActions) => {

    switch (action.type) {
        case spaActionsType.create:
            return {
                ...state,
                idIncrement: state.idIncrement + 1,
                spaList: [
                    ...state.spaList,
                    {
                        id: state.idIncrement,
                        name: action.payload.name,
                        completed: false
                    }
                ]
            };
        default:
            return state;
    }

};