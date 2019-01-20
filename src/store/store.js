import { createStore, combineReducers } from 'redux';
import { reducres } from '../reducres/reducers';

export const store = createStore(
    combineReducers(
        {
            state: reducers
        }
    )
)