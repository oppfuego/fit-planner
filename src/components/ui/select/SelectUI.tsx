"use client";

import React from "react";
import Select, { SelectProps } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { useField } from "formik";
import { formFieldSx } from "@/components/ui/form/fieldStyles";

interface SelectOption {
    label: string;
    value: string;
}

type FormikSelectProps = Omit<SelectProps<string, false>, "children"> & {
    name: string;
    options: SelectOption[];
    formik?: boolean;
};

const SelectUI: React.FC<FormikSelectProps> = ({ formik, options, ...props }) => {
    if (formik && props.name) {
        const [field, meta, helpers] = useField<string>(props.name);

        return (
            <>
                <Select
                    {...props}
                    value={field.value || null}
                    onChange={(_, value) => helpers.setValue(value || "")}
                    onBlur={() => helpers.setTouched(true)}
                    color={meta.touched && meta.error ? "danger" : "neutral"}
                    sx={formFieldSx}
                >
                    {options.map((option) => (
                        <Option key={option.value} value={option.value}>
                            {option.label}
                        </Option>
                    ))}
                </Select>
                {meta.touched && meta.error && (
                    <div style={{ color: "red", fontSize: 12 }}>{meta.error}</div>
                )}
            </>
        );
    }

    return (
        <Select {...props} sx={formFieldSx}>
            {options.map((option) => (
                <Option key={option.value} value={option.value}>
                    {option.label}
                </Option>
            ))}
        </Select>
    );
};

export default SelectUI;
