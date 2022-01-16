import React from 'react'
import QueryWrapper from '../Container/QueryWrapper'
import { collegeName } from '../Constants/collegeName'
import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import { useMutation } from '@apollo/client'
import { GET_DEPARTMENT_CARDS } from '../graphql'


export default function SearchDepartment({college, department, setDepartment, search}) {

    let departmentName = []
    for(var c of collegeName){
        if(c.code === college){
            departmentName = c.department
            break
        }
    }

    const [getDepartmentCards, {data, loading, error}] = useMutation(GET_DEPARTMENT_CARDS)

    const handleChange = async (_, newValue) => {

        setDepartment(newValue.slice(0,3))
        const queryDepartment = newValue.slice(3)
        const ret = await getDepartmentCards({variables: { department: queryDepartment }})
        search(queryDepartment, ret.data.departments, loading, error)
    }



    const content = departmentName.length === 0 ? 
        <> </> :
        <ToggleButtonGroup
            color="secondary"
            value={department}
            exclusive
            onChange={handleChange}
            >
            {
                departmentName.map((d) => (
                    <ToggleButton value={d.code+d.name}>
                        {d.name}
                    </ToggleButton>
                ))
            }
        </ToggleButtonGroup>


    return (
        <QueryWrapper>
            {content}
        </QueryWrapper>
    )
}
