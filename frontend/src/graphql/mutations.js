import {gql} from "@apollo/client"

export const GET_NAME_CARDS = gql`
    mutation name($name: String!) {
        name(name:$name) {
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

export const GET_DEPARTMENT_CARDS = gql`
    mutation departments($department: String!) {
        departments(department:$department) {
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

export const GET_COLLEGE_CARDS = gql`
    mutation colleges($college: String!) {
        colleges(college:$college) {
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

export const GET_GRADE_CARDS = gql`
    mutation grades($studentID: String!) {
        grades(studentID:$studentID) {
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

export const CREATE_NEW_CARD = gql`
    mutation createCard(
        $date: String!,
        $name: String!,
        $studentID: ID!,
        $college: String!,
        $department: String!,
        $pickupLocation: String!,
        $saveLocation: String!,
        $pickupContact: String!,
    ) {
        newStudent(studentID:$studentID) {
            date
            name
            studentID
            college
            department
            pickupLocation
            saveLocation
            pickupContact
        }
    }
`
