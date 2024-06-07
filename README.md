# Chat App

![Chat App Screenshot](https://github.com/rahulchauhan04/Chat-app/blob/main/frontend/chatapp.png)

This is a simple chat application built using Node.js, Express, and Socket.io. It allows users to join a chatroom and send messages to each other in real-time.

## Features

- Real-time messaging using Socket.io
- User-friendly interface
- Simple and clean design

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rahulchauhan04/Chat-app.git
   cd Chat-app

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the App

1. Start the server:

   ```bash
   node server.js
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

Here’s an overview of the project structure:

```
Chat-App/
├── .gitignore
├── .vscode/
│   └── settings.json
├── index.html
├── package-lock.json
├── package.json
├── script.js
├── server.js
└── style.css
```

- **index.html**: The main HTML file for the chat application.
- **package.json**: Contains metadata about the project and its dependencies.
- **package-lock.json**: Describes the dependency tree for the project.
- **script.js**: The main JavaScript file for handling client-side logic.
- **server.js**: The server-side JavaScript file that sets up the server and handles socket connections.
- **style.css**: The CSS file for styling the application.

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web framework for Node.js
- [Socket.io](https://socket.io/) - Library for real-time web applications

## Authors

- **Rahul Chauhan** - *Initial work* - [rahulchauhan04](https://github.com/rahulchauhan04)
