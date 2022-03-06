# GOATPAD V1 Design Document

A forum style site inspired by Reddit

---

## What can a user do?

1. Login
2. See a list of posts
3. Filter the list by category
4. Search for posts
5. Post a message with in category
   - Categories are tag based, posts require at least one
6. Rate a message
7. Comment on a message
8. Rate a Comment
9. Comment on a comment
10. Notifications
11. Messaging
12. Get a link to a post to share outside

---

## What technologies to use for the client software?

- Main framework: [React](https://reactjs.org/)
- State Management: [Redux Toolkit](https://redux-toolkit.js.org/)
- Form validation: [Formik](https://formik.org/), [React Hook Form](https://react-hook-form.com/)
- API Calls: [Axios](https://axios-http.com/), [Apollo/GraphQL](https://www.apollographql.com/)
- Styling: [Styled components](https://styled-components.com/) AND we are building our own UI Library package

---

## What technologies to use for our API?

- Main Framework: [Express.js](https://expressjs.com/), [Strapi](https://strapi.io/)
- Database: [PostgreSQL](https://www.postgresql.org/), [Firebase](https://firebase.google.com/), or [Mongo](https://www.mongodb.com/)
- Authentication: [Firebase](https://firebase.google.com/) or [Passport](https://www.passportjs.org/)
- Data validation: [Joi](https://github.com/sideway/joi#readme), [express-validation](https://github.com/andrewkeig/express-validation)
- DB construction/communication: [Mongoose](https://mongoosejs.com/), [Knex](https://knexjs.org/), [TypeORM](https://typeorm.io/#/), [Prisma](https://www.prisma.io/), [Apollo/GraphQL](https://www.apollographql.com/)

---

## What technologies for our UI Library

- [Storybook](https://storybook.js.org/), [Bit](https://bit.dev/)
- [SASS](), [Styled components](https://styled-components.com/),
