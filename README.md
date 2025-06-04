# 🧠 React Context Practice – Project & Task Manager

This is a simple yet well-structured React application built with **Vite + TypeScript**, created as a personal project to practice and demonstrate state management using **React Context API**. The goal is to manage and display a list of projects, each containing its own list of tasks.

## 📌 About the Project

This application simulates a lightweight project management tool, where users can view a collection of projects and their associated tasks. Each project has a name and an ID, while each task contains a name and a status (e.g., completed or pending).

The project was developed following modern frontend best practices, including clean code structure, separation of concerns, component reusability, and centralized state management with Context API.

## 🛠 Tech Stack

- **React**
- **Vite**
- **TypeScript**
- **Tailwind CSS**
- **React Context API** for global state
- **Jest + React Testing Library** for unit and integration tests

## 🧪 Testing

The application includes unit and integration tests to ensure stability and prevent regressions. Tests cover the core logic of the context, components, and interactions between projects and tasks. This helps maintain high code quality and supports future scalability.

## 📁 Data Structure

```ts
// Project
{
  id: string;
  name: string;
  tasks: Task[];
}

// Task
{
  name: string;
  status: 'pending' | 'completed';
}
```

## ✨ Highlights

- Context-based state management without external libraries like Redux
- Modular and maintainable codebase
- Styled with Tailwind for responsive, clean UI
- Fully typed with TypeScript for safety and clarity
- Basic task status management and project hierarchy display

## 🤓 Personal Motivation

This project was part of my ongoing learning journey as a software developer focused on building clean and scalable frontend applications. It helped me reinforce concepts like context, component composition, and project organization in React.

# Clone the repository

`git clone https://github.com/edwinValero/ReactContextPractice.git`

# Navigate into the client directory

`cd ReactContextPractice/client`

# Install dependencies

`npm install`

# Start the development server

`npm run dev`

# Navigate into the server directory

`cd ReactContextPractice/server`

# Install dependencies

`npm install`

# Start the development server

`npm run dev`

## 🧱 Backend/API Requirements

This project depends on a separate backend service that serves the project and task data.

To get the application running properly:

Clone and run the backend project from:
👉 https://github.com/edwinValero/YourBackendRepo

Follow the setup instructions in that repository to start the API server (usually with npm install and npm run dev or similar).

Make sure the API is running on the expected port (e.g., http://localhost:3000) or/and setup a env.local with `VITE_API_URL` variable.
If needed, you can configure the API base URL in this project via an environment variable or configuration file.

Once the backend is running, you can start the frontend with:
