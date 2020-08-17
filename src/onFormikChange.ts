import {LoginProps} from "./MyForm";
import wait from "./wait";

// Not used
export default async function onFormikChange(previousValues: LoginProps | undefined, currentValues: LoginProps): Promise<LoginProps> {
  console.log("### onFormikChange", {previousValues, currentValues})
  await wait(1000);
  const previousUserName = previousValues?.username;
  const currentUserName = currentValues.username;
  if (previousUserName !== currentUserName) {
    return {
      ...currentValues,
      usernameUpperCase: currentUserName.toUpperCase()
    }
  }
  return currentValues;
};
