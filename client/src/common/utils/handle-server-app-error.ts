import {BaseResponseType} from "../types/common.types";
import {Dispatch} from "redux";
import {appActions} from "../../app/app.slice";


export const handleServerAppError = <D>(
  data: BaseResponseType<D>,
  dispatch: Dispatch,
  showError: boolean = true,
): void => {
  if (showError) {
    dispatch(appActions.setAppError({ error: data.messages.length ? data.messages[0] : "Some error occurred" }));
  }
};
