import { OpenDialogProps } from "@/interfaces/openDialog";
import CustomButton from "@/widgets/custom_button/CustomButton";
import CustomFormControl from "@/widgets/input_form_control/CustomFormControl";
import { Dialog, DialogTitle, FormHelperText, Snackbar } from "@mui/material";
import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import React, { useState } from "react";


const CreateAccount = ({ isOpen, setIsOpen }: OpenDialogProps) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [snackState, setSnackState] = useState({ state: false, message: '' })
    const [error, setError] = useState({ state: false, message: '' })

    const handleOnclose = () => {
        setIsOpen(false)
        setSnackState({ state: false, message: '' })
        setError({ state: false, message: '' })
        setEmail('')
        setConfirmPassword('')
        setPassword('')
    }


    const handleSendData = () => {
        const regExpEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (email === '') {
            setError({ state: true, message: 'Tienes que ingresar un Email valido' })
            setTimeout(() => {
                setError({ state: false, message: '' })
            }, 3000);
        } else if (!email.match(regExpEmail)) {
            setError({ state: true, message: 'El formato de Email es invalido' })
            setTimeout(() => {
                setError({ state: false, message: '' })
            }, 3000);
        } else {
            setError({ state: false, message: '' })
            setSnackState({
                state: true,
                message: 'Se ha enviado un email a tu bandeja de correo electrónico con las instrucciones para recuperar tu contraseña'
            });
        }
    };


    const requirements = {
        passwordLength: password.length > 5,
        passwordMatch: password === confirmPassword && password.length > 0,
        passwordHasUpperCase: /[A-Z]/.test(password),
        passwordHasLowerCase: /[a-z]/.test(password),
        passwordHasNumber: /\d/.test(password),
        hasSpecialChar: /[@!#$%&/?¡¿*+_]/.test(password),
    }


    return (
        <Dialog
            open={isOpen}
            onClose={() => handleOnclose()}
            fullWidth={true}
            className=""
        >
            <DialogTitle className="text-[var(--foreground)]">Nuevo registro de cuenta</DialogTitle>

            <CustomFormControl isPassword={false} title="Correo electronico*" onChange={setEmail} />
            <FormHelperText className="px-5 text-red-600">
                {error.message}
            </FormHelperText>
            <CustomFormControl isPassword={true} title="Contraseña*" onChange={setPassword} />
            <CustomFormControl isPassword={true} title="Confirmar contraseña*" onChange={setConfirmPassword} />
            <ul className={`flex flex-col justify-start w-full p-6`}>
                <li className={`${requirements.passwordLength ? "text-green-600" : "text-red-600"} flex flex-row gap-1 items-center`}>{requirements.passwordLength ? <FaCheck /> : <FaX />}Minimo 6 caracteres</li>
                <li className={`${requirements.passwordHasUpperCase ? "text-green-600" : "text-red-600"} flex flex-row gap-1 items-center`}>{requirements.passwordHasUpperCase ? <FaCheck /> : <FaX />}Al menos una letra mayúscula</li>
                <li className={`${requirements.passwordHasLowerCase ? "text-green-600" : "text-red-600"} flex flex-row gap-1 items-center`}>{requirements.passwordHasLowerCase ? <FaCheck /> : <FaX />}Al menos una letra minúscula</li>
                <li className={`${requirements.passwordHasNumber ? "text-green-600" : "text-red-600"} flex flex-row gap-1 items-center`}>{requirements.passwordHasNumber ? <FaCheck /> : <FaX />}Al menos un número</li>
                <li className={`${requirements.hasSpecialChar ? "text-green-600" : "text-red-600"} flex flex-row gap-1 items-center`}>{requirements.hasSpecialChar ? <FaCheck /> : <FaX />}Al menos un carácter especial de estos:
                    @!#$%&/?¡¿*+_</li>
                <li className={`${requirements.passwordMatch ? "text-green-600" : "text-red-600"} flex flex-row gap-1 items-center`}>{requirements.passwordMatch ? <FaCheck /> : <FaX />}Las contraseñas deben coincidir</li>

            </ul>

            <div className="py-7 flex gap-2 justify-center">
                <CustomButton title="Crear cuenta" onClick={handleSendData} />
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

export default CreateAccount;