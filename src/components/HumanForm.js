import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const HumanForm = () => {

return (
    <Form>
        <Field type="text" name="name" placeholder="Name" />
        <Field type="text" name="email" placeholder="E-mail" />
        <Field type="text" name="password" placeholder="Password" />
        <label>
        <span>Terms of Service</span>
        <Field type="checkbox" name="terms-of-service" />
        <button type="submit">Submit</button>
      </label>
    </Form>
)

}

export default withFormik ({
    mapPropsToValues: (values) => {
        return {
            name: values.name || '',
            email: values.email || ''
        }
    }
    
})(HumanForm);