import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ children, sx = {}, ...props }) => {
    return (
        <Button sx={{
            backgroundColor: "#ff5252",
            color: "#fff",
            fontWeight: 500,
            fontSize: "16px",
            padding: "7px 20px",
            borderRadius: "4px",
            textTransform: "none",
            "&:hover": {
                backgroundColor: "#ff4040"
            },
            ...sx   // allows extra styles if needed
        }}
            {...props}
        >{children}</Button>
    )
}

export default CustomButton;