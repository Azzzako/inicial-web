import { CustomButtonProps } from "@/interfaces/inputFormControl"
import { Button } from "@mui/material"

const CustomButton = ({ title, onClick }: CustomButtonProps) => {
    return (
        <Button
            sx={{
                backgroundColor: 'var(--foreground)',
                padding: '8px',
                color: 'white',
                textTransform: 'none',

            }}
            variant="contained"
            size="large"
            onClick={onClick}
        >
            {title}
        </Button>
    )
}

export default CustomButton;