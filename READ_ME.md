# Event Registration Website Lab Assignment
​
## Objective
Build an event registration website using Node.js, Express, and React. Implement a backend server for event data management and a React front-end for user interactions. Incorporate basic user authentication and organize code using middleware and routes folders.
​
## Setup and Structure
​
### Backend (`event-server`)
- **Structure**:
  - **Main File**: `index.js`
  - **Folders**: `routes`, `middleware`
  - **Data Store**: In-memory arrays for events and users.
    - Example structure for events data:
      ```javascript
      const events = [
        {
          id: 1,
          name: "Tech Conference 2023",
          description: "An annual conference for tech enthusiasts, featuring talks from industry leaders, workshops, and networking opportunities.",
          date: "2023-07-15",
          location: "Convention Center, Silicon Valley", 
          attendees: [1] // contains user IDs
        }
      ];
      ```
    - Example structure for users data:
      ```javascript
      const users = [
        { 
          userId: 1, 
          username: "bettycrocker", 
          password: "cake" 
        }
      ]
      ```
    You can make use of ChatGPT to generate more mock data for you by using these as templates. 
​
### Frontend (`event-client`)
- **React App**: Created using `create-react-app`.
​
## Instructions
Your first step should be to create a new Git repository that will contain both your client and server folders.
​
### Backend Setup
1. **Initialize Backend**:
   ```bash
   mkdir event-server
   cd event-server
   npm init -y
   npm install express jsonwebtoken
   ```
​
2. **Setup File Structure**:
​
  * Create `index.js` in the root.
  * Create `routes` and `middleware` folders.
​
3. **index.js**:
  
    * Setup Express and import `routes` and `middleware`.
      ```js
      const express = require('express');
      const app = express();
      app.use(express.json());
      // Import routes and middleware here
​
      const PORT = 3001;
      app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
      ```
​
4. **Middleware**:
​
    * In `middleware`, create `authMiddleware.js`.
    * Implement JWT token authentication logic.
​
5. **Routes**:
​
    * In `routes`, create `eventsRoutes.js` and `usersRoutes.js`.
    * Implement event handling and user authentication routes.
    * Authenticated users should be able to:
      1. Register for existing events
      2. Add new events
      3. See available events
    * Unauthenticated users should only be able to:
      1. See available events