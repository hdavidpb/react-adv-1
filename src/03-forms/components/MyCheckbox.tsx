import { ErrorMessage, useField } from "formik";
interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: Props) => {
  const [field] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label>
        {label}

        <input className="text-input" type="checkbox" {...field} {...props} />
      </label>

      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
