import React, {useEffect} from "react";
import {FormikObserver} from "./FormikObserer";
import {LoginProps} from "./MyForm";
import wait from "./wait";

async function asyncToUpper(value: string): Promise<string> {
  await wait(1000);
  return value.toUpperCase();
}

const UsernameFormikObserver: FormikObserver<LoginProps> = ({formikProps}) => {
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

export default UsernameFormikObserver;
