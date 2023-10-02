import {instance} from "../../../common/api";
import {BaseResponseType} from "../../../common/types/common.types";

export const coneParamsAPI = {
    post(coneParamsData: ConeParamsType) {
        return instance.post<BaseResponseType<ConeParamsType>>("", coneParamsData);
    },

};

export type ConeParamsType = {
    id?: string,
    height?: string,
    radius?: string,
    segments?: string,
}