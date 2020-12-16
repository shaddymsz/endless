import React from "react";
import {Field, Form, Formik} from "formik";
import '../../../assets/css/custom-form.css'

const PolicyQuestions = () => {
    return (
        <React.Fragment>
            <div className="row m-t-45">
                <div className="col-md-12">
                    <div className="package-grid-block text-center">
                        <Formik initialValues={{}}
                                validationSchema={{}}
                                onSubmit={(values) => console.log(values)}>
                            <Form className="theme-form">
                                <img src="https://www.yourloanadvisors.com/wp-content/uploads/2016/07/hdfc.png"
                                     className="check-img-new" alt="logo"/>

                                <div className="col-md-12 mb-3 mt-2">
                                    <label>Is your existing policy with HDFC ERGO?</label>
                                    <br/><br/>
                                    <div className="form-check-inline ml-3">
                                        <div className="form-check-inline">
                                            <Field className="form-check-input" type="radio"
                                                   id="officeSpaceNo"
                                                   name="officeSpace" value="no"/>
                                            <label className="form-check-label"
                                                   htmlFor="officeSpaceNo">No</label>
                                        </div>

                                        <Field className="form-check-input" type="radio"
                                               id="officeSpace"
                                               name="officeSpace" value="self"/>
                                        <label className="form-check-label"
                                               htmlFor="officeSpace">Yes</label>
                                    </div>

                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PolicyQuestions;