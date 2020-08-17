import {FormikProps, getIn} from "formik";
import {useEffect} from "react";
import {LoginProps} from "./MyForm";
import wait from "./wait";

type Props = {
  formikProps: FormikProps<LoginProps>
}

async function asyncToUpper(value: string): Promise<string> {
  await wait(1000);
  return value.toUpperCase();
}

export default function FormikObserver({formikProps}: Props) {
  const {values, setFieldValue} = formikProps;
  const username = values.username;

  useEffect(() => {
    async function updateToUpper() {
      const upper = await asyncToUpper(username);
      setFieldValue('usernameUpperCase', upper);
    }

    updateToUpper();
  }, [username])

  return null;
};
