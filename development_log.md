# Development Log

### Stage 1

- Selected Task Management App as the project.
- Planned project architecture.
- Created project documentation.
- Initialized Git repository.
- Planned frontend and backend structure.

### Stage 2 - Frontend Initialization
- Created React frontend using Vite.
- Selected React with JavaScript and ESLint.
- Installed project dependencies.
- Successfully ran the React development server.
- Verified the default Vite React application in the browser.
- Organized the frontend project structure for future development.

Challenges:
- Learned how Vite creates a React project.
- Understood the purpose of the client folder.

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

- Cleaned the default Vite React project.
- Removed unnecessary demo files.
- Added a basic application layout.
- Created a scalable folder structure for the frontend.

## Stage 10 – Basic Frontend Layou
- Created reusable Navbar component.
- Created Home page component.
- Added global stylesheet.
- Connected components through App.jsx.

## Stage 11 – Task Form UI
- Created reusable TaskForm component.
- Added form fields for task details.
- Styled the task creation form.

## Stage 12 – Frontend Backend Integration (Add Task)
- Configured Axios for API communication.
- Connected the React form to the Express backend.
- Successfully created new tasks from the frontend.
- Verified task storage in MongoDB Atlas.

## Stage 13 – Task Display
- Created TaskCard component.
- Created TaskList component.
- Displayed tasks fetched from MongoDB.
- Verified frontend and backend integration.

## Stage 14 – Automatic Task Refresh

- Implemented parent-child communication using React props.
- Refreshed task list automatically after adding a new task.
- Improved user experience by eliminating manual page refresh.

## Stage 15 – Edit Task

- Implemented Edit Task functionality.
- Pre-filled the form with existing task details.
- Updated tasks using the backend API.
- Automatically refreshed the task list after updates.
- Reset the form after a successful update.

## Stage 16 – Delete Task

- Implemented Delete Task functionality.
- Added delete confirmation dialog.
- Removed tasks from MongoDB.
- Automatically refreshed the task list after deletion.

Observation:
Deleting tasks became much smoother after refreshing the task list instead of manually reloading the page.

## Stage 17 – Task Filtering

- Added task filtering by status.
- Implemented dynamic filtering using React state.
- Allowed users to switch between All, Pending, In Progress, and Completed tasks.

## Stage 18 – Task Search

- Added search functionality for tasks.
- Implemented real-time filtering by task title.
- Combined search with status filtering for improved usability.

## Stage 19 – Task Dashboard

- Added a dashboard displaying task statistics.
- Displayed Total, Pending, In Progress, and Completed task counts.
- Dashboard updates automatically whenever tasks are added, edited, or deleted.

## Stage 20 – Landing Page Development

- Designed a landing page for the application.
- Created reusable Hero, Features, and Footer components.
- Added navigation between the landing page and Task Manager using React Router.
- Improved the overall user interface and user experience.


## Stage 21 – UI Enhancement
- Improved dashboard layout and spacing.
- Styled task cards with status badges.
- Added icons using React Icons.
- Improved button styling and form layout.
- Added active navigation link highlighting.

Challenge:
- Adjusted the layout multiple times to improve readability and maintain a clean user interface.

## Stage 22 – Toast Notifications

- Integrated React Toastify.
- Added success notifications for task creation, updates, deletion, and completion.
- Added error notifications for failed operations.

Decision:
- Replaced browser alert messages with toast notifications to provide a better user experience.


## Stage 23 – Deployment

- Deployed the backend on Render.
- Configured MongoDB Atlas environment variables.
- Deployed the frontend on Vercel.
- Connected the deployed frontend with the deployed backend API.
- Verified all CRUD operations after deployment.

Challenge:
- Initially received 404 errors because the frontend API base URL did not include the '/api' path.
- Updated the Axios base URL and verified successful communication between the frontend and backend.

## Stage 24 – Final Testing

- Tested task creation.
- Tested editing existing tasks.
- Tested deleting tasks.
- Tested marking tasks as completed.
- Tested search functionality.
- Tested filtering by status.
- Verified dashboard statistics.
- Confirmed successful deployment on Vercel and Render.

## AI Assistance

AI Tool Used:
- ChatGPT

Areas where AI assisted:
- UI improvement suggestions.
- React component structuring.
- CSS styling guidance.
- Debugging frontend and backend issues.
- Deployment guidance for Render and Vercel.
- Documentation preparation.

Manual Work Performed:
- Implemented project structure.
- Wrote and modified React components.
- Developed backend APIs.
- Integrated frontend and backend.
- Tested CRUD functionality.
- Fixed bugs during development.
- Deployed the application successfully.