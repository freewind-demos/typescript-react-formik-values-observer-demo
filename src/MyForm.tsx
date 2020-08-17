import {Form, Formik, FormikProps} from 'formik';
import React from 'react'
import FormikObserver from "./FormikObserver";

export type LoginProps = {
  username: string,
  usernameUpperCase: string,
}

export default function MyForm() {
  const initialValues: LoginProps = {
    username: 'aaa',
    usernameUpperCase: '',
  };

  return <div>
    <h1>Hello Formik</h1>
    <Formik initialValues={initialValues} onSubmit={() => undefined}>
      {(formikProps: FormikProps<LoginProps>) => {
        const {values, setFieldValue} = formikProps

        console.log("### render", {values})

        // Error: will change formik values infinitely if typing fast
        // (async function updateFormikValues() {
        //   return await onFormikChange(previousFormikValues, values);
        // })().then(newValues => {
        //   if (newValues !== values) {
        //     setValues(newValues)
        //   }
        // });

        return <Form>
          <div>
            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setFieldValue('username', event.target.value)
            }} value={values.username}/>
            <div>{JSON.stringify(values)}</div>
          </div>
          <FormikObserver formikProps={formikProps}/>
        </Form>
      }}
    </Formik>
  </div>
};
