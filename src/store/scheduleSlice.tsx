import { createSlice } from '@reduxjs/toolkit'
import { generateTeacherSchList } from '../utils/Helper';

const initialState = {
    scheduleList: [],
    teacherSchList: [],

}

export const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        setSchedule: (state, action) => {
            state.scheduleList = action.payload;
            state.teacherSchList = generateTeacherSchList(action.payload);
        },
        addSchedule: (state, action) => {
            state.scheduleList = [...state.scheduleList, action.payload];
            state.teacherSchList = generateTeacherSchList(state.scheduleList);
        },
        updateSchedule: (state, action) => {
            const updatedSchedule = action.payload;
            state.scheduleList = state.scheduleList.map((schedule) =>
                schedule.id === updatedSchedule.id ? updatedSchedule : schedule
            );
            state.teacherSchList = generateTeacherSchList(state.scheduleList);
        },
        deleteSchedule: (state, action) => {
            const scheduleIdToDelete = action.payload;
            state.scheduleList = state.scheduleList.filter((schedule) => schedule.id !== scheduleIdToDelete);
            state.teacherSchList = generateTeacherSchList(state.scheduleList);
        },
    },
});

export const {
    setSchedule,
    addSchedule,
    updateSchedule,
    deleteSchedule,
} = scheduleSlice.actions

//selector
export const selectSchedule = (state) => state.schedule.scheduleList
export const selectTeacherSchedule = (state) => state.schedule.teacherSchList

export default scheduleSlice.reducer