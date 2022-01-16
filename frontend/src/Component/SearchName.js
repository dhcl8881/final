import React from 'react'
import QueryWrapper from '../Container/QueryWrapper'
import { TextField, Button } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import MarginWrapper from '../Container/MarginWrapper'

import { useQuery, useMutation } from '@apollo/client'
import { GET_ALL_CARDS, GET_NAME_CARDS } from '../graphql'

export default function SearchName({search}){


    let queryName = ""
    const handleInput = (e) => {
        queryName = e.target.value
    }

    
    const [getNameCards, {data, loading, error}] = useMutation(GET_NAME_CARDS)

    const handleSearch = async (_) => {
        const ret = await getNameCards({variables: { name: queryName }})
        search(queryName, ret.data.name, loading, error)
    }

    const { data: all_data, loading:all_loading, error: all_error} = useQuery(GET_ALL_CARDS)
    const handleShowAll = async (_) => {
        search("全部", all_data.cards, all_loading, all_error)
    }

    return (
        <QueryWrapper>
            <MarginWrapper right="5px">
                <TextField 
                    label="姓名"
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

            <MarginWrapper left="30px">
                <Button 
                    variant="outlined" 
                    onClick={handleShowAll}
                    >
                    顯示全部
                </Button>
            </MarginWrapper>
        </QueryWrapper>
    ) 
}