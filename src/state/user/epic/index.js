import { combineEpics } from 'redux-observable';
import { oneSliceEpic } from './one-slice-of-user-epic/oneSliceEpic';
import { secondSliceEpic } from './second-slice-of-user-epic/secondSliceEpic';

// Epics
export const userEpic = combineEpics(
    oneSliceEpic,
    secondSliceEpic,
);