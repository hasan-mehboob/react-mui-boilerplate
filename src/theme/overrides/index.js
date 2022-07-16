import { merge } from "lodash";
import Button from "./buttons";
import Typography from "./typography";

// if you want more theme reset add in the below function.

export default function ComponentOverrides(theme) {
  return merge(Button(theme), Typography(theme));
}
