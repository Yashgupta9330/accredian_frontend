import React from "react";
import { TextField, FormControl, FormHelperText, FormLabel } from "@mui/material";
import { FormFieldProps } from "./types";



const InputField: React.FC<FormFieldProps> = ({
    type,
    placeholder,
    name,
    label,
    register,
    error,
    helper = false,
    valueAsNumber,
}) => {
    return (
        <FormControl fullWidth margin="normal">
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <TextField
                id={name}
                type={type}
                error={!!error}
                helperText={error?.message}
                placeholder={placeholder}
                {...register(name, { valueAsNumber })}
                variant="outlined"
                fullWidth
                margin="dense"
            />
            {helper && (
                <FormHelperText>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        style={{ width: "1em", height: "1em", verticalAlign: "middle", marginRight: "4px" }}
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    {/* Helper text can go here */}
                </FormHelperText>
            )}
        </FormControl>
    );
};

export default InputField;
