# Zap Task App

## Project Overview

The goal of this project is to build a **Zap Task App** where users can create, edit, complete, delete, and filter tasks. The app will be built using **React** for the front-end and **MongoDB** for the back-end. The app will also integrate MongoDB with React to store and manage tasks.

## Requirements

### 1) **Responsiveness**
- The design should adapt to desktop, tablet, and mobile screen sizes, ensuring usability across different devices.

### 2) **UI Components**
- **Header**: The app name should be visible with a simple navigation bar (if needed).
- **Task Input Field**: Users should be able to add tasks with an easy-to-use input field.
- **Task List**:
  - Display tasks with checkboxes to mark completion.
  - Show all tasks stored in the database dynamically.
- **Filter Options**:
  - Provide filters for categorizing tasks: **All**, **Completed**, **Pending**.
- **Delete Button**: Each task should have an option to be deleted.
- **Edit Task**: Users should be able to edit their tasks.
  
### 3) **Color Scheme & Typography**
- Keep the design clean and modern.
- Choose contrasting colors for buttons, input fields, and task statuses.
- Use legible fonts with proper spacing for readability.

### 4) **Design Consistency**
- Ensure a consistent layout across all screen sizes.
- Proper spacing between elements to avoid clutter.

### 5) **Backend Integration (MongoDB)**
- Use **MongoDB** to store tasks in the backend.
- Set up REST API endpoints to manage tasks: 
  - `POST /tasks`: Create a new task.
  - `GET /tasks`: Retrieve all tasks.
  - `PUT /tasks/:id`: Update a specific task.
  - `DELETE /tasks/:id`: Delete a specific task.
  
### 6) **Prototype (Optional)**
- Create basic interactions in Figma or use React to showcase functionality:
  - Adding a task, completing a task, deleting a task, and filtering tasks.
  
## Task Learning Points

By the end of this task, team members should have learned:
1. **MongoDB Basics**:
   - How to set up a MongoDB database.
   - How to perform CRUD operations in MongoDB.
2. **React with Backend Integration**:
   - How to use React to interact with a backend (MongoDB in this case).
   - Fetching data from the backend and displaying it in the front-end.
   - Sending requests from React (using `axios` or `fetch`).
3. **REST API Concepts**:
   - How to build and consume a RESTful API.
   - Understanding HTTP methods (GET, POST, PUT, DELETE) and their usage in an application.
4. **Task Management Logic**:
   - Managing the state of tasks (adding, editing, deleting, and filtering tasks).
   - Ensuring smooth communication between front-end and back-end to keep tasks in sync.
5. **Handling User Inputs**:
   - Capturing input from the user to create new tasks.
   - Validating and sanitizing inputs before saving to the database.

## Deliverables

- **Figma Design** (Optional): Create responsive designs for mobile, tablet, and desktop views.
- **Frontend**: React app that interacts with the backend and displays tasks.
- **Backend**: Node.js with Express and MongoDB for task storage and management.
- **CRUD Operations**: Implement API endpoints to create, read, update, and delete tasks.
- **Final Working App**: A fully functional Zap Task app where users can manage tasks.

## Task Assignment

- **Backend Developer**: Responsible for setting up MongoDB, Express API, and CRUD operations.
- **Frontend Developer**: Responsible for the React app, integrating the API, and designing UI components.
- **UI/UX Designer**: Responsible for creating a responsive Figma design and ensuring the UI is user-friendly and consistent.
- **QA Tester**: Test all features (task creation, editing, deletion, filtering) to ensure they work smoothly.

---

### Best Practices for Development

- **Code Organization**: Keep the code modular and clean for better maintainability.
- **Error Handling**: Properly handle errors and edge cases (e.g., task not found, invalid inputs).
- **State Management**: Ensure state management is handled efficiently in React (useState, useEffect, context API, or Redux if needed).
- **Security**: Make sure to sanitize inputs and handle any security concerns in the backend (e.g., SQL injection prevention).

---

## Learning Goals

By working on this project, you will have the opportunity to enhance your skills in full-stack development, particularly with React and MongoDB. You will also gain experience in building a task management app, handling both front-end and back-end tasks, and integrating them seamlessly.

Good luck, and let's create a seamless and efficient To-Do app together! 🚀
