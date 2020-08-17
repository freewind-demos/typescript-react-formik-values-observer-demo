function setFieldValueIfChanged(formikValues: any, setFieldValue: (key: string, value: string) => void, key: string, target: string) {
  const previousValue = formikValues[key]
  if (previousValue !== target) {
    setFieldValue(key, target);
  }
}

export default function onFormikChange(formikValues: any, setFieldValue: (key: string, value: string) => void): void {
  const username = formikValues.username;
  const target = username.toUpperCase();
  // to avoid formik trigger unnecessary change, we should set only on changes
  setFieldValueIfChanged(formikValues, setFieldValue, 'onFormikChange_username', target);
};
