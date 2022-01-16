import React from 'react'
import QueryWrapper from '../Container/QueryWrapper'
import { collegeName } from '../Constants/collegeName'
import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import { useMutation } from '@apollo/client'
import { GET_COLLEGE_CARDS } from '../graphql'

export default function SearchCollege({college, setCollege, search}) {

    const [getCollgeCards, {data, loading, error}] = useMutation(GET_COLLEGE_CARDS)

    const handleChange = async (_, newValue) => {
        
        setCollege(newValue.slice(0,1))
        const queryCollege = newValue.slice(1)
        const ret = await getCollgeCards({variables: { college: queryCollege }})
        search(queryCollege, ret.data.colleges, loading, error)
    }


    return (
        <QueryWrapper>
            <ToggleButtonGroup
                color="primary"
                value={college}
                exclusive
                onChange={handleChange}
                >
                {
                    collegeName.map((c) => (
                        <ToggleButton value={c.code + c.name}>
                            {c.name}
                        </ToggleButton>
                    ))
                }
            </ToggleButtonGroup>
        </QueryWrapper>
    )
}
