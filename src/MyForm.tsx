import React from 'react'
import {Formik, FormikProps, FormikActions, Form, Field, ErrorMessage} from 'formik';

type LoginProps = {
  username: string,
  password: string,
}

export default function MyForm() {
  const initialValues: LoginProps = {
    username: 'aaa',
    password: '',
  };

  function onSubmit(values: LoginProps, actions: FormikActions<LoginProps>) {
    console.log({values, actions});
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false)
  }

  function validate(values: LoginProps) {
    const errors: Partial<LoginProps> = {};
    if (!values.username) {
      errors.username = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  }

  function generatePassword(form: FormikProps<LoginProps>) {
    form.setFieldValue('password', '123456');
  }

  return <div>
    <h1>Hello Formik</h1>
    <Formik initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}>
      {(formikBag: FormikProps<LoginProps>) =>
        <Form>
          <div>
            <Field type="text" name='username'/>
            <ErrorMessage name="username" component="span"/>
          </div>
          <div>
            <label>Password:
              <Field type='password' name='password'/>
            </label>
            <button type='button' onClick={() => generatePassword(formikBag)}>Generate Password</button>
            <ErrorMessage name="password" component="span"/>
          </div>
          <div>
            <button>Login</button>
          </div>
        </Form>
      }
    </Formik>
  </div>
};
