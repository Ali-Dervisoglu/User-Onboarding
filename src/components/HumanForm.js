import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const HumanForm = ({ errors, touched, status }) => {
    
    // const [humans, setHumans] = useState([]);

    // useEffect(() => {if (status) {
    //     setAnimals([ ...animals, status ])
    //   }
    // }, [status])

    return (
        <Form>
            {touched.name && errors.name && <p className="error">{errors.name}</p>}
            <Field type="text" name="name" placeholder="Name" />
            {touched.email && errors.email && <p className="error">{errors.email}</p>}
            <Field type="text" name="email" placeholder="E-mail" />
            {touched.password && errors.password && <p className="error">{errors.password}</p>}
            <Field type="text" name="password" placeholder="Password" />
            {touched.termsOfService && errors.termsOfService && <p className="error">{errors.termsOfService}</p>}
            <label>
                <span>Terms of Service</span>
                <Field type="checkbox" name="termsOfService" />
                <button type="submit">Submit</button>
            </label>
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
            name: values.name || '',
            email: values.email || '',
            password: values.password || '',
            termsOfService: values.termsOfService || false
        }
    },
    validationSchema: yup.object().shape({
        name: yup.string('Name must be a string!').required('Name is required!'),
        email: yup.string('Email must be a string!').required('Email is required!'),
        password: yup.string('Password must be a string!').required('Password is required!'),
        termsOfService: yup.boolean().oneOf([true], 'Terms of Service must be accepted!')
    }),

    handleSubmit: (values, { setStatus }) => {
        axios.post('https://reqres.in/api/users', values)
            .then((res) => {
                setStatus(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log('Error:', err);
            })
    }
    })(HumanForm);