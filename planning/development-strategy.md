# My Blog

> A Personal Full-Stack Blog allows the user to read all the blog and a single blog

---

## Data

> describe the data used in your project.
>
> - what properties?
> - what types?
> - what are array entries like?
>   Data are JSON object

---

<!--
## User Story Dependencies

![Story Dependency Diagram](img/userStories.png)

---

## WIREFRAME

![wireframe]()
-->

---

## 0.Setup

- fork the starter repo `tv4-validation-fs-template`
- turn on GitHub pages
- add collaborators
- add the first strategy plan
- add a simple README.md
- add milestone and labels

---

## 1. create a server using express

**As a developer , I want to create a server to allows the user to read all my posts or a single post**

### REPO

- This user story is developed on branch `1-server`.
- This branch is merged to `master` branch after completion.

### Task A

`server.js`

- this issue developed on a branch `1-server`
- require the necessary packages
- set up the port
- st up `Mongoose`
- start the server

---

## 2. create post model

**As a developer , I want to create a post model to validate the input**

### REPO

- This user story is developed on branch `2-postModel`.
- This branch is merged to `master` branch after completion.

### Task A

`postModel.js`

- this issue devolved on branch `2-postModel`
- import `mongoose`
- create post `Schema`
- create `.env` file and add `MongoDB` url
- add `.gitignore` file

---

## 3.create routes

**As a developer , I want to create different routes to provide the user with information about my blogs**

### REPO

- This user story is developed on branch `3-routes`.
- This branch is merged to `master` branch after completion.

### Task A

`postRoutes.js`

- this issue developed on a branch `3-routes`
- create a file `postRoutes.js`
- require `express` and `schema`
- create 3 routes `get app posts`, `get a post by id` , `post anew post`
- export `router`

---

## 4- create `html` for the front-end

**As a user I want to see the blog homepage to get more information about the owner and he is blogs**

### REPO

- This user story is developed on branch `4-html`.
- This branch is merged to `master` branch after completion.

### Task A

`postRoutes.js`

- this issue developed on a branch `4-html`
- create a file `index.htm`
- add icon
- install `react`,`react-dom`,`react-router-dom`, `axios`

---

## 5- React components

**As a user I want to see all the blogs and a single blog to read**

### REPO

- This user story is developed on branch `5-components`.
- This branch is merged to `master` branch after completion.

### Task A

`components/`

- this issue developed on a branch `5-components`
- create a component for a home page
- create a component Navbar
- create a component PostList
- create a component PostItem
- create a component Post
- import all components to App.js

### Task B

`style.css`

- add general styles `body` , `a`, `button`, `img`
- style the navbar component
- style the `PostList` component
- style the `PostItem` component
- style the `Post` component

---
