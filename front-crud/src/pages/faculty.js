import React from "react"
import { Link, graphql } from "gatsby"
import gql from 'graphql-tag'

import Layout from "../components/layout"
import SEO from "../components/utils/seo"
import DataTable from '../components/table/datatable'

const Faculty = ({ data }) => {

  const columns = [
    { title: 'ID', field: 'id' },
    { title: 'Name', field: 'name' },
    { title: 'Users', field: 'user' },
    { title: 'User ID For Enroll', field: 'userId' },
  ]

  return (
    <Layout>
      <SEO title={data.Site.siteMetadata.description} />
      <DataTable 
        title={data.Site.siteMetadata.description}
        type="faculties" 
        columns={columns}
        courses={data.FacultiesQuery.courses}
        add={addFaculty}
        update={updateFaculty}
        remove={removeFaculty}
        list={listFaculties}
      />
      <Link to="/">Go back to the main menu</Link>
    </Layout>
  )
  
}

const listFaculties = gql`
  query faculties {
    faculties {
      id
      name
      user {
        id
      }
    }
  }
`

// This mutation is executed at run time by Apollo.
const addFaculty = gql`
  mutation createFaculty($name: String!, $userId: Int ) {
    createFaculty(name: $name, userId: $userId) {
      id
      name
    }
  }`

// This mutation is executed at run time by Apollo.
const updateFaculty = gql`
  mutation updateFaculty($id: ID!, $name: String!, $userId: ID ) {
    updateFaculty(id: $id , name: $name, userId: $userId)
  }`

// This mutation is executed at run time by Apollo.
const removeFaculty = gql`
  mutation deleteFaculty($id: ID!) {
    deleteFaculty(id: $id)
  }`


export const siteAndUsersQuery = graphql`
  query {
    Site: site {
      siteMetadata {
        description     
      }
    }
    FacultiesQuery: digicationGraphqlStore {
      faculties {
        id
        name
        user {
          id
        }
      }
    }
  }`

export default Faculty
