/**
Эта функция предназначена для того, чтобы избавиться от дублирования кода по созданию типов в санке
 */ import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, AppRootStateType} from "../../app/store";
import {BaseResponseType} from "../types/common.types";


export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppRootStateType;
  dispatch: AppDispatch;
  rejectValue: null | BaseResponseType;
}>();
