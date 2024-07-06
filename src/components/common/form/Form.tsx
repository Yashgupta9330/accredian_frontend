import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import InputField from "./InputField";
import { FormData, formSchema } from "./types";
import { fields } from "../../../data/field";
import toast from "react-hot-toast";

interface FormDialogProps {
    buttonClassName?: string;
}

const FormDialog: React.FC<FormDialogProps> = ({buttonClassName}) => {
    const [open, setOpen] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema), // Apply the zodResolver
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        setLoading(true);
        console.log(data);
        try {

            if(data.friendEmail===data.yourEmail){
                toast.error('Both Email should be different');
                setLoading(false);
                return;
            }

            const response = await axios.post('https://accredian-backend-glsy.onrender.com/api/referrals', data);

            if (response.status === 201) {
                toast.success('Referral Sent Successfully');
                setResponseMessage(response.data.message);
                console.log(response.data.message)
            } 
            else {
                toast.error("error submitting form",response.data.errors);
                setResponseMessage(response.data.errors ? response.data.errors.join(', ') : 'Something went wrong');
                console.log(response.data.errors)
            }
        } 
        catch (error) {
            console.error('Error submitting form:', error);
            toast.error("error submitting form");
            setResponseMessage('An error occurred while submitting the form');
        }

        // Close the dialog
        setLoading(false);
        reset();
        setOpen(false);
    };

    const handleCancel = () => {
        // Reset the form when Cancel is clicked
        setLoading(false);
        reset();
        setOpen(false);
    };

    return (
        <>
            <button
                className={`${buttonClassName}`}
                onClick={() => setOpen(!open)}
            >
                Refer Now
            </button>
            <div className="flex items-center justify-center">
            <Dialog open={open} onClose={() => setOpen(false)} className="">
                <DialogTitle className="w-full text-center title"><span className="text-[24px] font-semibold">Enter your Details</span></DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {fields.map((field) => (
                            <InputField
                                key={field.name}
                                name={field.name}
                                type={field.type}
                                label={field.label}
                                placeholder={field.placeholder}
                                register={register}
                                error={errors[field.name as keyof FormData]}
                            />
                        ))}
                        <DialogActions>
                            <Button onClick={handleCancel}>
                              <span className="bg-black text-[#FFFFFF] px-6 py-2 rounded-lg">Cancel</span> 
                            </Button>
                            <Button type="submit" disabled={loading}>
                            <span className="bg-black text-[#FFFFFF] px-6 py-2 rounded-lg">{loading ? 'Submitting...' : 'Submit'}</span>
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
            </div>
            {responseMessage && <p>{responseMessage}</p>}
        </>
    );
};

export default FormDialog;
