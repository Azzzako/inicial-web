import { OpenDialogProps } from "@/interfaces/openDialog";
import CustomButton from "@/widgets/custom_button/CustomButton";
import CustomFormControl from "@/widgets/input_form_control/CustomFormControl";
import { Dialog, DialogTitle, FormHelperText, Snackbar } from "@mui/material";
import React, { useState } from "react";


const ForgotPassword = ({ isOpen, setIsOpen }: OpenDialogProps) => {

    const [email, setEmail] = useState('')
    const [snackState, setSnackState] = useState({ state: false, message: '' })
    const [error, setError] = useState({ state: false, message: '' })

    const handleOnclose = () => {
        setIsOpen(false)
        setSnackState({ state: false, message: '' })
        setError({ state: false, message: '' })
        setEmail('')
    }


    const handleSendEmail = () => {
        const regExpEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (email === '') {
            setError({ state: true, message: 'Tienes que ingresar un Email valido' })
        } else if (!email.match(regExpEmail)) {
            setError({ state: true, message: 'El formato de Email es invalido' })
        } else {
            setError({ state: false, message: '' })
            setSnackState({
                state: true,
                message: 'Se ha enviado un email a tu bandeja de correo electrónico con las instrucciones para recuperar tu contraseña'
            });
        }
    };


    return (
        <Dialog
            open={isOpen}
            onClose={() => handleOnclose()}
            fullWidth={true}
            className="text-center"
        >
            <DialogTitle className="text-[var(--foreground)]">Recuperación de contraseña</DialogTitle>

            <CustomFormControl isPassword={false} title="Correo electronico*" onChange={setEmail} />
            <FormHelperText className="px-5 text-red-600">
                {error.message}
            </FormHelperText>

            <div className="py-7 flex gap-2 justify-center">
                <CustomButton title="Recuperar contraseña" onClick={handleSendEmail} />
                <CustomButton title="Cancelar" onClick={handleOnclose} />
            </div>
            <Snackbar
                open={snackState.state}
                autoHideDuration={3000}
                onClose={() => setSnackState({ state: false, message: '' })}
                message={snackState.message}
            />


        </Dialog>
    )
}

export default ForgotPassword;