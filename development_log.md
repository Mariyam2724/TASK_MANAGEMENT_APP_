# Development Log

## Day 1

### Stage 1

- Selected Task Management App as the project.
- Planned project architecture.
- Created project documentation.
- Initialized Git repository.
- Planned frontend and backend structure.

### Stage 2 - Frontend Initialization

Completed Tasks:
- Created React frontend using Vite.
- Selected React with JavaScript and ESLint.
- Installed project dependencies.
- Successfully ran the React development server.
- Verified the default Vite React application in the browser.
- Organized the frontend project structure for future development.

Challenges:
- Learned how Vite creates a React project.
- Understood the purpose of the client folder.



## Day 1

## Stage 3 - Backend Setup

- Created the Express backend.
- Installed Express, CORS, Dotenv, Mongoose, and Nodemon.
- Created the backend folder structure.
- Configured the initial Express server.
- Tested the backend locally.

### Stage 4 – Task Model

- Created Task model using Mongoose.
- Added title, description, status and dueDate fields.
- Enabled automatic timestamps.

### Stage 5 – Task Controller

- Created taskController.js.
- Implemented Create Task API.
- Implemented Get All Tasks API.
- Implemented Update Task API.
- Implemented Delete Task API.
- Added error handling using try-catch blocks.

### Stage 6 – Task Routes

- Created taskRoutes.js.
- Connected CRUD controller functions with Express routes.
- Added GET, POST, PUT and DELETE endpoints.

### Stage 7 – Express Route Integration

- Connected task routes to Express using `/api/tasks`.
- Verified MongoDB connection.
- Verified API routing.

### Stage 8 – CRUD API Testing

- Successfully tested POST API.
- Successfully tested GET API.
- Successfully tested PUT API.
- Successfully tested DELETE API.
- Verified CRUD operations using Postman.


## Stage 9 – Frontend Cleanup

Completed:
- Cleaned the default Vite React project.
- Removed unnecessary demo files.
- Added a basic application layout.
- Created a scalable folder structure for the frontend.

## Stage 10 – Basic Frontend Layout

Completed:
- Created reusable Navbar component.
- Created Home page component.
- Added global stylesheet.
- Connected components through App.jsx.

## Stage 11 – Task Form UI

Completed:
- Created reusable TaskForm component.
- Added form fields for task details.
- Styled the task creation form.

## Stage 12 – Frontend Backend Integration (Add Task)

Completed:
- Configured Axios for API communication.
- Connected the React form to the Express backend.
- Successfully created new tasks from the frontend.
- Verified task storage in MongoDB Atlas.

## Stage 13 – Task Display

Completed:
- Created TaskCard component.
- Created TaskList component.
- Displayed tasks fetched from MongoDB.
- Verified frontend and backend integration.

## Stage 14 – Automatic Task Refresh

Completed:
- Implemented parent-child communication using React props.
- Refreshed task list automatically after adding a new task.
- Improved user experience by eliminating manual page refresh.

## Stage 15 – Edit Task

Completed:
- Implemented Edit Task functionality.
- Pre-filled the form with existing task details.
- Updated tasks using the backend API.
- Automatically refreshed the task list after updates.
- Reset the form after a successful update.

## Stage 16 – Delete Task

Completed:
- Implemented Delete Task functionality.
- Added delete confirmation dialog.
- Removed tasks from MongoDB.
- Automatically refreshed the task list after deletion.

## Stage 17 – Task Filtering

Completed:
- Added task filtering by status.
- Implemented dynamic filtering using React state.
- Allowed users to switch between All, Pending, In Progress, and Completed tasks.

## Stage 18 – Task Search

Completed:
- Added search functionality for tasks.
- Implemented real-time filtering by task title.
- Combined search with status filtering for improved usability.

## Stage 19 – Task Dashboard

Completed:
- Added a dashboard displaying task statistics.
- Displayed Total, Pending, In Progress, and Completed task counts.
- Dashboard updates automatically whenever tasks are added, edited, or deleted.