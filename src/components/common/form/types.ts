import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

// Define Zod schema for form validation
export const formSchema: ZodType<FormData> = z.object({
    yourName: z.string().min(1, "Your name is required"),
    yourEmail: z.string().min(1, "Your Email is required").email("Invalid email address"),
    friendName: z.string().min(1, "Friend's name is required"),
    friendEmail: z.string().min(1, "Friend Email is required").email("Invalid email address"),
});

// Define TypeScript interface for form data
export type FormData = {
    yourName: string;
    yourEmail: string;
    friendName: string;
    friendEmail: string;
};

// Define TypeScript interface for form field props
export type FormFieldProps = {
    type: string;
    placeholder: string;
    name: any; // Use keyof FormData to ensure name is a valid key of FormData
    label: string;
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    helper?: boolean;
    valueAsNumber?: boolean;
    options?: readonly unknown[];
    isMulti?: boolean;
};

// Define valid field names explicitly
export type ValidFieldNames = "yourName" | "yourEmail" | "friendName" | "friendEmail";
