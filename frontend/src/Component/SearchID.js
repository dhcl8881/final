import React from 'react'
import QueryWrapper from '../Container/QueryWrapper'
import { TextField, Button } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import NewCard from './NewCard'
import MarginWrapper from '../Container/MarginWrapper'

import { useMutation } from '@apollo/client'
import { GET_GRADE_CARDS } from '../graphql'


export default function SearchName({search}){


    let cardID = ""
    const handleInput = (e) => {
        cardID = e.target.value
    }

    const [getGradeCards, {data, loading, error}] = useMutation(GET_GRADE_CARDS)
    const handleSearch = async (_) => {
        const ret = await getGradeCards({variables: { studentID: cardID }})
        search(cardID, ret.data.grades, loading, error)
    }


    return (
        <QueryWrapper>
            <MarginWrapper right="5px">
                <TextField 
                    label="學號的前三碼(小寫)"
                    size="small"
                    onChange={handleInput}
                    />
            </MarginWrapper>
            
            <Button 
                endIcon={<SearchIcon />} 
                variant="outlined"
                onClick={handleSearch}
                >搜尋
            </Button>

            <NewCard />
        </QueryWrapper>
    ) 
}