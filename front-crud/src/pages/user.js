import React from "react"
import { Link, graphql } from "gatsby"
import gql from 'graphql-tag'

import Layout from "../components/layout"
import SEO from "../components/utils/seo"
import DataTable from '../components/table/datatable'

const User = ({ data }) => {

  const columns = [
    { title: 'Id', field: 'id' },
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email' },
  ]

  return (
    <Layout>
      <SEO title={data.Site.siteMetadata.description} />
      <DataTable 
        title={data.Site.siteMetadata.description}
        type="users"
        columns={columns}
        users={data.UsersQuery.users}
        add={addUser}
        update={updateUser}
        remove={removeUser}
        list={listUser}
      />
      <Link to="/">Go back to the main menu</Link>
    </Layout>
  )
  
}

const listUser = gql`
  query users {
    users {
      id
      name
      email
    }
  }
`

// This mutation is executed at run time by Apollo.
const addUser = gql`
  mutation createUser($name: String!, $email: String! ) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }`

// This mutation is executed at run time by Apollo.
const updateUser = gql`
  mutation updateUser($id: ID!, $name: String!, $email: String! ) {
    updateUser(id: $id , name: $name, email: $email)
  }`

// This mutation is executed at run time by Apollo.
const removeUser = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id)
  }`


export const siteAndUsersQuery = graphql`
  query {
    Site: site {
      siteMetadata {
        description     
      }
    }
    UsersQuery: digicationGraphqlStore {
      users {
        email
        id
        name
      }
    }
  }`

export default User
