import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SpaState, SPA_REDUCER_NODE } from "./spa.reducer";

export const userFeatureSelector = createFeatureSelector<SpaState>(SPA_REDUCER_NODE);

export const spaListSelector = createSelector(userFeatureSelector,
    state => state.spaList);
