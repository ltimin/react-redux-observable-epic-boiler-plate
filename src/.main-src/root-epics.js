import { combineEpics } from 'redux-observable';
import { configEpic } from './state/config/epic';
import { userEpic } from './state/user/epic';

// Epics
export const rootEpic = combineEpics(
    configEpic,
    userEpic,
);