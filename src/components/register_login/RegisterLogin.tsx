import { OpenDialogProps } from "@/interfaces/openDialog";
import { Dialog } from "@mui/material";
import CustomFormControl from "../../widgets/input_form_control/CustomFormControl";
import { useState } from "react";
import CustomButton from "../../widgets/custom_button/CustomButton";
import ForgotPassword from "../forgot_password/ForgotPassword";
import CreateAccount from "../create_account/CreateAccount";

const RegisterLogin = ({ isOpen, setIsOpen }: OpenDialogProps) => {


    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [openForgotDialog, setOpenForgotDialog] = useState(false);
    const [openCreateAccountDialog, setOpenCreateAccountDialog] = useState(false)

    const handleSubmitButton = () => {
        const credentials = {
            password,
            email,
        }
        console.log(credentials);
        
    }

    const handleOnClose = () => {
        setPassword('')
        setEmail('')
        setIsOpen(false)
    }


    return (
        <Dialog
            className="flex flex-col w-full justify-center text-center"
            open={isOpen}
            onClose={() => handleOnClose()}
            maxWidth='xs'
            fullWidth={true}
        >
            <ForgotPassword isOpen={openForgotDialog} setIsOpen={setOpenForgotDialog}/>
            <CreateAccount isOpen={openCreateAccountDialog} setIsOpen={setOpenCreateAccountDialog}/>
            <div className="flex flex-col">

                <CustomFormControl isPassword={false} title="Correo electronico*" onChange={setEmail} />
                <CustomFormControl isPassword={true} title="Contraseña*" onChange={setPassword} />

                <div className="py-7 flex flex-col w-[100%] justify-center items-center gap-5">
                    <CustomButton title="Iniciar sesión" onClick={() => handleSubmitButton()} />
                    <span onClick={() => setOpenForgotDialog(true)} className="text-[var(--foreground)] font-bold cursor-pointer">¿Olvidaste tu contraseña?</span>
                    <div className="border-t-2 border-[var(--foreground)] w-72 md:w-96"></div>
                    <span className="text-[var(--foreground)]">¿Aún no tienes cuenta?</span>
                    <CustomButton title="Crear una cuenta"  onClick={() => setOpenCreateAccountDialog(true)}/>
                </div>
            </div>


            <div className="flex flex-col">
                <hr />

            </div>
        </Dialog>
    )
}

export default RegisterLogin;