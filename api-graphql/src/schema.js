import { gql } from 'apollo-server-express'

const typeDefs = gql`
    type User {
        id: Int!
        name: String!
        email: String!
        courses: [Course!]!
        faculty: Faculty
    }

    type Course {
        id: Int!
        title: String
        user: User
    }

    type Faculty {
        id: Int!
        name: String
        user: User
    }

    type Query {
        user(id: Int!): User
        course(id: Int!): Course
        faculty(id: Int!): Faculty
        users: [User!]!
        courses: [Course!]!
        faculties: [Faculty!]!
    }

    type Mutation {
        createUser(name: String!, email: String!): User!
        updateUser(id: ID!, name: String!, email: String!): Int!
        deleteUser(id: ID!): Int!
        createCourse(userId: Int!, title: String!): Course!
        updateCourse(id: ID!, title: String!, userId: ID): Int!
        deleteCourse(id: ID!): Int!
        createFaculty(userId: Int, name: String!): Faculty!
        updateFaculty(id: ID!, name: String!, userId: ID): Int!
        deleteFaculty(id: ID!): Int!
        removeUserFromFaculty(userId: ID!, id: ID!): Int!
        removeUserFromCourse(userId: ID!, id: ID!): Int!
    }
`

export default typeDefs