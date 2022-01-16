import React from 'react'
import TextField from '@mui/material/TextField'

export default function DialogInput({label, setValue}){


    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <TextField
            label={label}
            type="text"
            fullWidth
            variant="standard"
            required
            onChange={handleChange}
        />
    )
}