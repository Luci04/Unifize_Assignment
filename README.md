# React Table App

This project is a simple React-based table component that displays rows of data with interactive features such as hover effects, conditional formatting, and icons. The app is built to showcase clean and reusable component design while maintaining a responsive and accessible UI.

---

## **How to Run the Code**

### **1. Prerequisites**

- **Node.js** (v14 or later recommended)
- **npm** or **yarn** (for managing dependencies)

### **2. Clone the Repository**

```
git clone https://github.com/Luci04/Unifize_Assignment

cd Unifize_Assignment

```

## **3. Install Dependencies**

Run the following command to install all required dependencies:

npm install

#### OR

yarn install

### **4. Start the Development Server**

Run the following command to start the app in development mode:

npm start

# OR

yarn start
The app will be available at http://localhost:3000.

### **Technical Decisions**

Sub-Components: Used a dedicated Avatar component for rendering user information to keep the code modular and scalable.
Styling

Utilized Tailwing CSS classes for styling, leveraging group-hover effects and transitions to create a smooth and modern UI.

Conditional class application is used extensively to handle different states (e.g., row.showDate or row.amount > 0).
Icons

Used react-icons library for lightweight, consistent, and scalable icons.

While the application was built with responsiveness and interactivity in mind, I was unable to implement the following due to time constraints:

- Adding aria-label attributes to buttons for screen reader compatibility.
- Implementing comprehensive SEO optimizations.
