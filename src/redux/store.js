import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import ThunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer";
import settingsReducer from "./settingsReducer";

let reducers = combineReducers({
    app: appReducer,
    profileSection: profileReducer,
    usersSection: usersReducer,
    auth: authReducer,
    form: formReducer,
    settings: settingsReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(ThunkMiddleware)
));

window.store = store;

export default store;