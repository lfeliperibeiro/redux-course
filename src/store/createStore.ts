import {applyMiddleware, createStore, Middleware, Reducer} from "redux";
import {AuthActions, AuthState} from "./modules/auth/types";


export interface StoreState {
    auth: AuthState;
}

export type StoreAction = AuthActions

export default (reducers: Reducer<StoreState, StoreAction>, middlewares: Middleware[]) => {
    const enhancer = applyMiddleware(...middlewares)
    return createStore(reducers, enhancer);
}