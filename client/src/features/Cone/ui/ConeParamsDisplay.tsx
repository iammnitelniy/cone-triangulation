import React, {useState} from 'react';
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField} from "@mui/material";
import {FormikHelpers, useFormik} from "formik";
import {StyledError} from "../../../common/components/StyledError";
import {useAppDispatch} from "../../../common/hooks/useAppDispatch";
import {coneParamsThunks} from "../model/coneParams.slice";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store";

type FormikErrorType = any //Partial<Omit<ConeParamsType, 'id'>>

export const ConeParamsDisplay = () => {


    const dispatch = useAppDispatch();
    const cone = useSelector((state: AppRootStateType) => state.coneParams)


    const formik = useFormik({
        validate: (values) => {
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
            } else if (parseInt(values.radius) * 3 > parseInt(values.segments)) {
                errors.segments = "Segments must be at least 3 times greater than radius";
            }

            return errors;
        },
        initialValues: {
            height: "",
            radius: "",
            segments: "",
        },
        onSubmit: (values, formikHelpers) => {


           dispatch(coneParamsThunks.sendParams(values))

        },
    });


    return (
        <Grid container justifyContent="center">
            <Grid item xs={4}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormLabel>
                            <h2>Make your cone</h2>
                            <p>You should enter the data of your cone</p>
                            <p>Height, radius and number of segments</p>
                        </FormLabel>
                        <FormGroup>
                            <TextField label="height" margin="normal" {...formik.getFieldProps("height")} />
                            {formik.touched.height && formik.errors.height && <StyledError>{formik.errors.height}</StyledError>}
                            <TextField type="radius" label="radius" margin="normal" {...formik.getFieldProps("radius")} />
                            {formik.touched.radius && formik.errors.radius && <StyledError>{formik.errors.radius}</StyledError>}
                            <TextField type="segments" label="segments" margin="normal" {...formik.getFieldProps("segments")} />
                            {formik.touched.segments && formik.touched.radius && formik.errors.segments && <StyledError>{formik.errors.segments}</StyledError>}


                            <Button
                                type={"submit"}
                                variant={"contained"}
                                disabled={!(formik.isValid && formik.dirty)}
                                color={"primary"}
                            >
                                SEND
                            </Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    );
};

