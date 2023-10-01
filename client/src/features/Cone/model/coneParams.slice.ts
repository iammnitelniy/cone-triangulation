import {createSlice} from "@reduxjs/toolkit";

import {coneParamsAPI, ConeParamsType} from "../api/cone-params.api";
import {createAppAsyncThunk} from "../../../common/utils/create-app-async-thunk";
import {handleServerAppError, thunkTryCatch} from "../../../common/utils";


const sendParams = createAppAsyncThunk<any, any>("", async (arg, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    return thunkTryCatch(thunkAPI, async () => {
        const res = await coneParamsAPI.post(arg);
        if (res.request.status === 200) {
            debugger
            return res.data;
        } else {
            const isShowAppError = !res.data.fieldsErrors.length;
            handleServerAppError(res.data, dispatch, isShowAppError);
            return rejectWithValue(res.data);
        }
    });
});


const initialState: ConeParamsType = {};

const slice = createSlice({
    name: "coneParams",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sendParams.fulfilled, (state, action) => {
        debugger
                state.height = action.payload.height;
                state.radius = action.payload.radius;
                state.segments = action.payload.segments;
                console.log(state)
            })

    },
});

export const coneParamsSlice = slice.reducer;
export const coneParamsThunks = {sendParams};
