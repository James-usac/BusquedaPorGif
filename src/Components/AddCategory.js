import { TextField } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
 
    const [inputValue, setInputValue] = React.useState('')

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(inputValue.trim().length > 2) {
            setCategories(prevCategories => [inputValue, ...prevCategories]);
            setInputValue('')
        }   
        console.log("submit Hecho")
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField 
                label="Buscar"
                variant="outlined"
                value={inputValue}
                onChange={(e) => handleChange(e)}
            />
        </form>
    )
}

//para indicar que el dato es requerido
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
