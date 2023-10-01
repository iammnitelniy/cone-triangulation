import {instance} from "../../../common/api";
import {BaseResponseType} from "../../../common/types/common.types";

export const coneParamsAPI = {
    post(coneParamsData: ConeParamsType) {
        return instance.post<BaseResponseType<ConeParamsType>>("", coneParamsData);
    },
    // logout() {
    //     return instance.delete<BaseResponseType<{ userId?: number }>>("auth/login");
    // },
    // me() {
    //     return instance.get<BaseResponseType<{ id: number; email: string; login: string }>>("auth/me");
    // },
};

export type ConeParamsType = {
    id?: string,
    height?: string,
    radius?: string,
    segments?: string,
}