import React, { useState } from 'react';
import { Button, Form, FormGroup } from 'reactstrap';
import * as yup from 'yup';
import { Formik, useFormik } from 'formik';

function Login(props) {

    const [userType, setuserType] = useState("Login");

    let login = {
        email: yup.string().email("enter valid email").required("please enter email"),
        password: yup.string().required("please enter password")
    }

    let Signup = {
        name: yup.string().required(),
        email: yup.string().email("enter valid email").required("please enter email"),
        password: yup.string().required("please enter password")
    }

    let forgotpass = {
        email: yup.string().email("enter valid email").required("please enter email"),
    }

    let initialVal;

    let schema = yup.object().shape();

    if (userType === "Login") {
        schema = yup.object().shape(login);
        initialVal = {
            email: '',
            password: ''
        }
    } else {
        
    }

    console.log(formik.errors.email);

    const formik = useFormik({
        initialValues: initialVal,
        validationSchema: schema,
        onSubmit: values => {
            if (userType === 'Login') {
                console.log('Successfully Login 👍');
            } else if (userType === 'Signup') {
                console.log('Successfully Signup 👍');
            } else if (userType === 'forgotPassword') {
                console.log('Your OTP is : 852002');
            }
            // alert(JSON.stringify(values, null, 2));
        },
    });

    return (

        <div>
            <div className="fashion_section">
                <div id="main_slider">
                    <div className="">
                        <div className="mt-5">
                            <div className="container">

                                <div className="row">
                                    <div className="col-3"></div>
                                    <div className="col-6">
                                        {
                                            userType === "Login" ?
                                                <h1 className="fashion_taital">Login</h1>
                                                :
                                                <h1 className="fashion_taital">Signup</h1>
                                        }
                                        <Formik values={formik}>
                                            <Form onSubmit={formik.handleSubmit}>
                                                {
                                                    userType === "Signup" ?
                                                        <FormGroup>
                                                            <label htmlFor="exampleEmail">
                                                                Name
                                                            </label>
                                                            <br></br>
                                                            <input id="exampleName" class="mail_bt_contact" name="name" placeholder="Enter Name" type="text" />
                                                        </FormGroup>
                                                        :
                                                        null
                                                }
                                                {
                                                    (userType === "Login" || userType === "Signup") &&
                                                    <>
                                                        <FormGroup>
                                                            <label htmlFor="exampleEmail">
                                                                Email
                                                            </label>
                                                            <br></br>
                                                            <input id="exampleEmail" className="mail_bt_contact" name="email" placeholder="with a placeholder" type="email"  onChange={formik.handleChange}/>
                                                            {
                                                                formik.errors.email ? <p>{formik.errors.email}</p>
                                                                    :
                                                                    null
                                                            }
                                                        </FormGroup>
                                                        {/* <br></br> */}
                                                        <FormGroup>
                                                            <label htmlFor="examplePassword">
                                                                Password
                                                            </label>
                                                            <br></br>
                                                            <input id="examplePassword" class="mail_bt_contact" name="password" placeholder="password placeholder" type="password" />
                                                        </FormGroup>
                                                    </>
                                                }
                                            </Form>
                                        </Formik>
                                        <div>
                                            {
                                                userType === "Login" ?
                                                    <>
                                                        <Button color="primary" type="submit" className="mt-4">Login</Button>
                                                        <Button color="primary" type="submit" className="mt-4" onClick={() => setuserType("Signup")}>Sign Up</Button>
                                                    </>
                                                    :
                                                    <>
                                                        <Button color="primary" type="submit" className="mt-4">Sign Up</Button>
                                                        <Button color="primary" type="submit" className="mt-4" onClick={() => setuserType("Login")}>Login</Button>
                                                    </>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-3"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Login;