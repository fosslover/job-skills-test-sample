import React from "react"
import { Link, graphql } from "gatsby"
import gql from 'graphql-tag'

import Layout from "../components/layout"
import SEO from "../components/utils/seo"
import DataTable from '../components/table/datatable'

const Course = ({ data }) => {

  const columns = [
    { title: 'ID', field: 'id' },
    { title: 'Title', field: 'title' },
    { title: 'Users', field: 'user' },
    { title: 'User ID For Enroll', field: 'userId' },
  ]

  return (
    <Layout>
      <SEO title={data.Site.siteMetadata.description} />
      <DataTable 
        title={data.Site.siteMetadata.description}
        type="courses" 
        columns={columns}
        courses={data.CoursesQuery.courses}
        add={addCourse}
        update={updateCourse}
        remove={removeCourse}
        list={listCourses}
      />
      <Link to="/">Go back to the main menu</Link>
    </Layout>
  )
  
}

const listCourses = gql`
  query courses {
    courses {
      id
      title
      user {
        id
      }
    }
  }
`

// This mutation is executed at run time by Apollo.
const addCourse = gql`
  mutation createCourse($title: String!, $userId: Int! ) {
    createCourse(title: $title, userId: $userId) {
      id
      title
    }
  }`

// This mutation is executed at run time by Apollo.
const updateCourse = gql`
  mutation updateCourse($id: ID!, $title: String!, $userId: ID ) {
    updateCourse(id: $id , title: $title, userId: $userId)
  }`

// This mutation is executed at run time by Apollo.
const removeCourse = gql`
  mutation deleteCourse($id: ID!) {
    deleteCourse(id: $id)
  }`


export const siteAndUsersQuery = graphql`
  query {
    Site: site {
      siteMetadata {
        description     
      }
    }
    CoursesQuery: digicationGraphqlStore {
      courses {
        id
        title
        user {
          id
        }
      }
    }
  }`

export default Course
