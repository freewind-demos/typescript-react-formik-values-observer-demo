import {Form, Formik, FormikProps} from 'formik';
import React from 'react'
import onFormikChange from "./onFormikChange";

type LoginProps = {
  username: string,
  onFormikChange_username: string,
}

export default function MyForm() {
  const initialValues: LoginProps = {
    username: 'aaa',
    onFormikChange_username: '',
  };

  return <div>
    <h1>Hello Formik</h1>
    <Formik initialValues={initialValues}
            onSubmit={() => undefined}>
      {(formikBag: FormikProps<LoginProps>) => {
        const {values, setFieldValue} = formikBag
        onFormikChange(values, setFieldValue);
        return <Form>
          <div>
            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setFieldValue('username', event.target.value)
            }} value={values.username}/>
            <div>{JSON.stringify(values)}</div>
          </div>
        </Form>
      }}
    </Formik>
  </div>
};
