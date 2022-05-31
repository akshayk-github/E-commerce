import React, { useState } from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Login(props) {

    const [userType, setuserType] = useState("Login");

    let Login = {
        email: yup.string().email("enter valid email").required("please enter email"),
        password: yup.string().required("please enter password")
    }

    let Signup = {
        name: yup.string().required(),
        email: yup.string().email("enter valid email").required("please enter email"),
        password: yup.string().required("please enter password")
    }

    let Forgotpass = {
        email: yup.string().email("enter valid email").required("please enter email"),
    }

    let schema, initialVal;

    // let schema = yup.object().shape();

    if (userType === "Login") {
        schema = yup.object().shape(Login);
        initialVal = {
            email: '',
            password: ''
        }
    } else if (userType === "Signup") {
        schema = yup.object().shape(Signup);
        initialVal = {
            name: '',
            email: '',
            password: ''
        }
    } else if (userType === "Forgotpass") {
        schema = yup.object().shape(Forgotpass);
        initialVal = {
            email: '',
        }
    }


    const formik = useFormik({
        initialValues: initialVal,
        validationSchema: schema,
        onSubmit: values => {
            if (userType === 'Login') {
                console.log('Successfully Login 👍');
            } else if (userType === 'Signup') {
                console.log('Successfully Signup 👍');
            } else if (userType === 'Forgotpass') {
                console.log('Your OTP is : 852002');
            }
            // alert(JSON.stringify(values, null, 2));
        },
    });

    console.log(formik.errors.email);

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
                                            userType === "Forgotpass" ?
                                                <h1 className="fashion_taital">Forgot password</h1>
                                            :
                                            userType === "Login" ?
                                                <h1 className="fashion_taital">Login</h1>
                                                :
                                                <h1 className="fashion_taital">Signup</h1>
                                        }
                                        <Formik value={formik}>
                                            <Form onSubmit={formik.handleSubmit}>
                                                {
                                                    userType === "Forgotpass" ?
                                                    <FormGroup>
                                                            <Label htmlFor="exampleEmail">
                                                                Email
                                                            </Label>
                                                            <br></br>
                                                            <Input id="exampleEmail" className="mail_bt_contact" name="email" placeholder="with a placeholder" type="email" onChange={formik.handleChange} />
                                                            {
                                                                formik.errors.email ? <p>{formik.errors.email}</p>
                                                                    :
                                                                    null
                                                            }
                                                        </FormGroup>
                                                        :
                                                        null
                                                }
                                                {
                                                    userType === "Signup" ?
                                                        <FormGroup>
                                                            <Label htmlFor="exampleEmail">
                                                                Name
                                                            </Label>
                                                            <br></br>
                                                            <Input id="exampleName" className="mail_bt_contact" name="name" placeholder="Enter Name" type="text"
                                                                onChange={formik.handleChange} />
                                                            {
                                                                formik.errors.email ? <p>{formik.errors.email}</p>
                                                                    :
                                                                    null
                                                            }
                                                        </FormGroup>
                                                        :
                                                        null
                                                }
                                                {
                                                    (userType === "Login" || userType === "Signup") &&
                                                    <>
                                                        <FormGroup>
                                                            <Label htmlFor="exampleEmail">
                                                                Email
                                                            </Label>
                                                            <br></br>
                                                            <Input id="exampleEmail" className="mail_bt_contact" name="email" placeholder="with a placeholder" type="email" onChange={formik.handleChange} />
                                                            {
                                                                formik.errors.email ? <p>{formik.errors.email}</p>
                                                                    :
                                                                    null
                                                            }
                                                        </FormGroup>
                                                        {/* <br></br> */}
                                                        <FormGroup>
                                                            <Label htmlFor="examplePassword">
                                                                Password
                                                            </Label>
                                                            <br></br>
                                                            <Input id="examplePassword" className="mail_bt_contact" name="password" placeholder="password placeholder" type="password"
                                                                onChange={formik.handleChange} />
                                                            {
                                                                formik.errors.password ? <p>{formik.errors.password}</p>
                                                                    :
                                                                    null
                                                            }
                                                        </FormGroup>
                                                    </>
                                                }
                                            </Form>
                                        </Formik>
                                        <div>
                                            {
                                                userType === "Login" ?
                                                    <div className='text-center'>
                                                        <Button style={{margin:"10px auto 0" }} color="primary" type="submit" className="d-block">Login</Button>
                                                    
                                                        <a style={{cursor:"pointer" }} className="mt-4 d-inline-bloc" onClick={() => setuserType("Forgotpass")}>Forgot password ? </a>                                                        

                                                        <Button style={{margin:"10px auto 0" }} color="primary" type="submit" className="d-block" onClick={() => setuserType("Signup")}>Sign Up</Button>
                                                    </div>
                                                    :
                                                    <div>

                                                        <Button color="primary" type="submit" className="mt-4">
                                                            {userType === "Signup" ?
                                                            "Sign Up"
                                                            :
                                                            "Send OTP"
                                                        }
                                                            </Button>
                                                        <Button color="primary" type="submit" className="mt-4" onClick={() => setuserType("Login")}>Login</Button>
                                                    </div>
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