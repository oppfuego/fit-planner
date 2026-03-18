import * as React from "react";
import Input, { InputProps } from "@mui/joy/Input";
import { useField } from "formik";
import { formFieldSx } from "@/components/ui/form/fieldStyles";

type FormikInputProps = InputProps & { name: string; formik?: boolean };

const InputUI: React.FC<FormikInputProps> = ({ formik, ...props }) => {
    if (formik && props.name) {
        const [field, meta] = useField(props.name);
        return (
            <>
                <Input {...field} {...props} error={!!meta.error && meta.touched} sx={formFieldSx} />
                {meta.touched && meta.error && (
                    <div style={{ color: "red", fontSize: 12 }}>{meta.error}</div>
                )}
            </>
        );
    }
    return <Input {...props} sx={formFieldSx} />;
};

export default InputUI;
