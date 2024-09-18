import { InputFormControlProps } from "@/interfaces/inputFormControl";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const CustomFormControl = ({ isPassword, onChange, title }: InputFormControlProps) => {

    const [showPassword, setShowPassword] = useState(true);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault()
        onChange(e.target.value)
    }


    return (
        <FormControl sx={{
            m: 2,
        }}
            variant="outlined"
        >
            <InputLabel variant="outlined" style={{ 'color': 'var(--foreground)' }} htmlFor={title}>{title}</InputLabel>
            <OutlinedInput
                label={title}
                id={title}
                type={isPassword ? 'password' && !showPassword ? 'text' : 'password' : 'text'}
                placeholder={isPassword ? '' : 'jhondoe@gmail.com'}
                sx={{
                    color: 'var(--foreground)',
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'var(--foreground)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'var(--foreground)',
                    },
                }}

                onChange={(e) => handleOnChangeInput(e)}
                endAdornment={
                    isPassword && (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleClickShowPassword}
                            >
                                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                            </IconButton>
                        </InputAdornment>
                    )
                }
            />

        </FormControl>
    )
}

export default CustomFormControl;