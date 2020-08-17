import {FormikProps} from "formik";
import React from "react";
import {LoginProps} from "./MyForm";

type Props<T> = {
  formikProps: FormikProps<T>
}

export type FormikObserver<T> = React.FunctionComponent<Props<T>>;
