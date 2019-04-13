import { combineEpics } from 'redux-observable';
import { oneSliceEpic } from './one-slice-of-config-epic/oneSliceEpic';
import { secondSliceEpic } from './second-slice-of-config-epic/secondSliceEpic';

// Epics
export const configEpic = combineEpics(
    oneSliceEpic,
    secondSliceEpic,
);