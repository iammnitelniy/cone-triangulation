import { ConeParamsType } from "../../features/Cone/api/cone-params.api";
import { FormikErrors } from "formik";

type FormikErrorType = Partial<Omit<ConeParamsType, 'id'>>;

export const errorUtility = (values: ConeParamsType) => {
    const errors: FormikErrorType = {};

    if (!values.height) {
        errors.height = "Height is required";
    } else if (!/^[1-9][0-9]{0,2}$/.test(values.height)) {
        errors.height = "Height must be a natural number up to 999";
    }

    if (!values.radius) {
        errors.radius = "Radius is required";
    } else if (!/^[1-9][0-9]{0,2}$/.test(values.radius)) {
        errors.radius = "Radius must be a natural number up to 999";
    }

    if (!values.segments) {
        errors.segments = "Segments is required";
    } else if (!/^[1-9][0-9]{0,2}$/.test(values.segments)) {
        errors.segments = "Segments must be a natural number up to 999";
    } else if (parseInt(values.segments) < 5) {
        errors.segments = "Segments must be at least 5";
    } else if (parseInt(values.radius!) * 3 > parseInt(values.segments)) {
        errors.segments = "Segments must be at least 3 times greater than radius";
    }

    return errors;
};