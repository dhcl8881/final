import {gql} from "@apollo/client"

export const GET_ALL_CARDS = gql`
    query cards {
        cards {
            caseID
            date
            name
            studentID
            college
            department
            pickupLocation
            saveLocation
            pickupContact
            code
        }
    }
`

