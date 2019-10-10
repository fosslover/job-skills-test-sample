// src/resolvers.js

const resolvers = {
    User: {
        async courses (user) {
            return await user.getCourses()
        },
        async faculty(user) {
            return await user.getFaculty()
        }
    },
    Course: {
        async user (course) {
            return await course.getUser()
        }
    },
    Faculty: {
        async user (faculty) {
            return await faculty.getUser()
        }
    },
    Query: {
        async user (root, { id }, { models }) {
              return await models.User.findByPk(id)
        },
        async users (root, args, { models }) {
            return await models.User.findAll()
        },
        async course (root, { id }, { models }) {
              return await models.Course.findByPk(id)
        },
        async courses (root, args, { models }) {
            return await models.Course.findAll()
        },
        async faculty (root, { id }, { models }) {
            return await models.Faculty.findByPk(id)
        },
        async faculties (root, args, { models }) {
            return await models.Faculty.findAll()
        },
      },
      Mutation: {
        async createUser (root, { name, email }, { models }) {
            return await models.User.create({
                name,
                email,
            })
        },
        async updateUser(root, { id, name, email }, { models }) {
            return (await models.User.update({name, email}, {
                where: {id}
            }))[0]
        },
        async deleteUser(root, { id }, { models }) {
            return await models.User.destroy({ 
                where: {
                    id
                }
            })
        },
        async createCourse (root, { userId, title }, { models }) {
            return await models.Course.create({ userId, title })
        },
        async updateCourse(root, { id, title, userId }, { models }) {
            return (await models.Course.update({title, userId}, {
                where: {id}
            }))[0]
        },
        async deleteCourse(root, { id }, { models }) {
            return await models.Course.destroy({ 
                where: {
                    id
                }
            })
        },
        async createFaculty (root, { userId, name }, { models }) {
            return await models.Faculty.create({ userId, name })
        },
        async updateFaculty(root, { id, name, userId }, { models }) {
            return (await models.Faculty.update({name, userId}, {
                where: {id}
            }))[0]
        },
        async deleteFaculty(root, { id }, { models }) {
            return await models.Faculty.destroy( { 
                where: {
                    id
                }
            })
        },
        async removeUserFromFaculty(root, { userId, id }, { models }) {
            return await models.Faculty.destroy({
                where: {
                    userId, id
                }
            })
        },
        async removeUserFromCourse(root, { userId, id }, { models }) {
            return await models.Course.destroy({
                where: {
                    userId, id
                }
            })
        },
    },
}

export default resolvers