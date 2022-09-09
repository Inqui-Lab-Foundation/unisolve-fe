import React from "react";
import { Modal, Form, FormGroup } from "react-bootstrap";
import { Label } from "reactstrap";
import { InputBox } from "../../stories/InputBox/InputBox";
import { Button } from "../../stories/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { URL, KEY } from "../../constants/defaultValues";
import { getNormalHeaders } from "../../helpers/Utils";
import axios from "axios";

function StepOne({ setOrgData, setHideOne, setHideTwo }) {
    // const handleClick = () => {
    //   setHideOne(false);
    //   setHideTwo(true);
    // };

    const inputDICE = {
        type: "text",
        placeholder: "Please enter your dice code to continue",
        className: "defaultInput",
    };

    const formik = useFormik({
        initialValues: {
            organization_code: "",
        },

        validationSchema: Yup.object({
            organization_code: Yup.string()
                .required("Required"),
        }),

        onSubmit: async (values) => {
            const axiosConfig = getNormalHeaders(KEY.User_API_Key);
            await axios
                .post(`${URL.checkOrg}`, JSON.stringify(values, null, 2), axiosConfig)
                .then((checkOrgRes) => {
                    if (checkOrgRes?.status == 200) {
                        if (Object.keys(checkOrgRes?.data?.data[0]).length) {
                            setOrgData(checkOrgRes?.data?.data[0]);
                            setHideOne(false);
                            setHideTwo(true);
                        } else {
                            formik.setErrors({
                                organization_code: "Oops..! Dice code seems incorrect",
                            });
                        }
                    } else {
                        formik.setErrors({
                            organization_code: "Oops..! Dice code seems incorrect",
                        });
                    }
                })
                .catch((err) => {
                    formik.setErrors({
                        organization_code: "Oops..! Dice code seems incorrect",
                    });
                    return err.response;
                });
        },
    });

    return (
        <Modal.Body>
            <Form
                className='form-row row mb-5 mt-3 py-5'
                onSubmit={formik.handleSubmit}
                isSubmitting
            >
                <FormGroup className='form-group' md={12}>
                    <Label className='mb-2' htmlFor='organization_code'>
            DICE CODE
                    </Label>
                    <InputBox
                        {...inputDICE}
                        id='organization_code'
                        name='organization_code'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.organization_code}
                    />
                    {formik.touched.organization_code &&
          formik.errors.organization_code ? (
                            <small className='error-cls'>
                                {formik.errors.organization_code}
                            </small>
                        ) : null}
                    {/* <span>Please enter your school DISE code to continue</span> */}
                </FormGroup>
                <div className='mt-5'>
                    <Button
                        label='CONTINUE'
                        // btnClass='primary w-100'
                        btnClass={!(formik.dirty && formik.isValid) ? "default" : "primary"}
                        size='large '
                        type='submit'
                        disabled={!(formik.dirty && formik.isValid)}
                    />
                </div>
            </Form>
        </Modal.Body>
    );
}

export default StepOne;
