import { Action } from "@ngrx/store";

export enum spaActionsType {
    create = '[SPA] create spa user'
}

export class spaCreateUser implements Action {
    readonly type = spaActionsType.create;
    constructor(public payload: { name: string }) {

    }
}

export type spaActions = spaCreateUser;