// src/index.js

import express from 'express'
import models from '../models'
import finale from 'finale-rest'
import bodyParser from 'body-parser'

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Initialize finale
finale.initialize({
  app: app,
  sequelize: models
});

// Create REST resource
finale.resource({
  model: models.User,
  endpoints: ['/users', '/users/:id'],
  associations: true,
});

finale.resource({
  model: models.Course,
  endpoints: ['/courses', '/courses/:id'],
  associations: true,
});

finale.resource({
  model: models.Faculty,
  endpoints: ['/faculties', '/faculties/:id'],
  associations: true,
});

// Run server
app.listen({ port }, () => {
  console.log(`🚀Server ready at http://localhost:${ port }`);
});
