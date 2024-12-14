# Omega Loan Prediction App - Client

## Introduction and Overview: Omega Loan Prediction Software

Omega Loan Prediction Software is a powerful client application developed by our team that utilizes predictive analytics and data science models to assess the eligibility of loan applicants. Built using Create React App and written in React, Omega streamlines the loan approval process by providing accurate predictions and insightful analysis to financial institutions.

### Purpose and Problem Solving:

The primary goal of Omega is to assist financial institutions in making informed decisions when evaluating loan applications. By leveraging advanced predictive analytics techniques, Omega provides an automated and efficient solution for assessing the creditworthiness of loan applicants. This helps minimize the risk of default and ensures better resource allocation, leading to improved operational efficiency and enhanced customer satisfaction.

### Front-end Architecture and Technologies:

Omega is built using React, a popular and widely adopted JavaScript library for building user interfaces. The application follows a component-based architecture, allowing for modular and reusable code. Create React App serves as the foundation, providing a streamlined setup and development experience.

The user interface of Omega is styled using Tailwind CSS, a utility-first CSS framework that enables rapid and responsive UI development. The Tailwind CSS approach promotes consistency and flexibility, ensuring a visually appealing and cohesive user experience.

To handle state management, Omega utilizes the Context API, a built-in feature of React. This approach simplifies the sharing of data and state across components, ensuring efficient and predictable application behavior.

For client-side routing, Omega employs React Router DOM, a popular routing library that enables seamless navigation and URL management within the application. This facilitates the creation of multiple views and a smooth user experience.

Server requests are handled by Axios, a versatile and widely-used HTTP client library. Axios provides a simple and efficient way to communicate with the back-end API, allowing Omega to retrieve and submit data as needed.

### Conclusion: 

Omega Loan Prediction Software combines the power of predictive analytics, data science models, and modern front-end technologies to revolutionize the loan approval process. By automating the assessment of loan applicants, Omega empowers financial institutions to make more accurate and efficient lending decisions. With its user-friendly interface, modular architecture, and integration of cutting-edge technologies, Omega is poised to redefine the loan prediction landscape, delivering tangible benefits to both financial institutions and loan applicants alike.


## Features

Omega Loan Prediction Software offers the following features:

1. Admin Account Creation: Administrators can create an admin account to access the system and manage loan predictions.

![image](https://github.com/gneisscode/Client/assets/103408439/65b5e7df-55e8-4617-9f5b-7a97b5d5abec)

2. Team Management: Admins have the ability to add other admins to their company or organization's team, allowing for collaboration and shared access to loan prediction data.

![image](https://github.com/gneisscode/Client/assets/103408439/f2cbcaca-3bb6-4a1f-b9c3-48151e2eb4d5)

3. Loan Prediction Model: The software utilizes a powerful predictive analytics data science model to assess the eligibility of loan applicants. This model provides accurate predictions to aid in decision-making processes.

4. Personalized Dashboard: Users are presented with a personalized dashboard that displays statistics on loans approved and rejected. The dashboard provides an overview of key metrics, enabling admins to make informed decisions and track the performance of loan predictions.

![image](https://github.com/gneisscode/Client/assets/103408439/ef0d9cf3-32b3-4d8c-92cc-c17d9f3ddf4f)

5. PDF Upload and Auto-fill: Admins can easily upload borrower information in the form of a PDF file. The software automatically extracts the data and populates the borrower's application section in the dashboard, streamlining the data entry process.

![image](https://github.com/gneisscode/Client/assets/103408439/0730b2c3-98f8-4daa-ac46-84166043fcdd)


6. Direct Communication: The app allows admins to send loan eligibility status directly to the loan applicants. This feature facilitates efficient communication and improves the overall user experience.

![image](https://github.com/gneisscode/Client/assets/103408439/c9d80565-ff88-43ec-95d7-8accbeb30b1a)

By incorporating these features, Omega Loan Prediction Software offers administrators a comprehensive solution for managing loan predictions. The combination of user-friendly features and advanced analytics empowers admins to streamline their loan assessment processes and make well-informed decisions efficiently.

Feel free to customize and expand upon these features to accurately represent the capabilities of your application.


## Installation and Setup

To get started with Omega Loan Prediction Software, follow the steps below to set up your development environment:

### Prerequisites

Before proceeding with the installation, ensure that you have the following tools installed on your machine:

1. Visual Studio Code (VSCode): A popular code editor for web development. You can download it from the official website: [https://code.visualstudio.com/](https://code.visualstudio.com/)

2. Node.js and npm: Omega requires Node.js and npm (Node Package Manager) to manage dependencies and run scripts. You can download them from the official website: [https://nodejs.org/](https://nodejs.org/)

### Dependencies

Omega Loan Prediction Software has the following dependencies:

- React (^18.2.0): A JavaScript library for building user interfaces.
- React DOM (^18.2.0): Provides React-specific methods for manipulating the DOM.
- React Router DOM (^6.11.2): A routing library for React applications.
- Axios (^1.4.0): A library for making HTTP requests from the browser.
- React Icons (^4.9.0): A library of customizable icons for React.
- React Select (^5.7.3): A flexible and customizable select input component for React.
- React Hook Form (^7.43.9): A library for building forms in React with easy form validation.
- Chart.js (^4.3.0): A JavaScript charting library for creating interactive and responsive charts.
- React Chartjs 2 (^5.2.0): A React wrapper for Chart.js to simplify integration with React applications.
- React Toastify (^9.1.3): A notification library for React applications.
- PDF-lib (^1.17.1): A library for creating and modifying PDF documents in JavaScript.
- @testing-library/react (^13.4.0): A testing utility for testing React components.
- @testing-library/jest-dom (^5.16.5): Provides custom DOM element matchers for Jest.
- @testing-library/user-event (^13.5.0): Simulates user interactions for testing React components.
- Web Vitals (^2.1.4): An interface for measuring web performance metrics.

Additionally, Omega Loan Prediction Software uses the following development dependencies:

- Autoprefixer (^10.4.14): A PostCSS plugin to parse CSS and add vendor prefixes automatically.
- PostCSS (^8.4.23): A tool for transforming CSS with JavaScript.
- Tailwind CSS (^3.3.2): A utility-first CSS framework for rapid UI development.

Please note that the version numbers provided are examples and may not reflect the latest versions available. Make sure to update the versions based on your actual dependencies.

### Installation Steps

1. Clone the repository:

   ```bash
   git clone <repository_url>

   ```

2. Open the project in Visual Studio Code:

    ```bash
    cd omega-client
    code .

    ```
3. Install the project dependencies:

    ```bash
    npm install

    ```

4. Install the necessary development dependencies:

    ```bash
    npm install tailwindcss postcss autoprefixer --save-dev

    ```  

5. Build the Tailwind CSS stylesheets:

    ```bash
    npx tailwindcss build src/index.css -o src/styles.css

    ```    

### Development Server

To start the development server and run Omega Loan Prediction Software locally, use the following command:

    ` npm start `

The application will be accessible at http://localhost:3000 in your browser.

### Building for Production

To build the application for production deployment, use the following command:

  ```bash
  npm run build

 ```
 This command creates an optimized production-ready build of Omega in the build folder.


### Testing

To run the tests for Omega Loan Prediction Software, use the following command:

 ```bash
 npm test

```
This command executes the test cases defined in the project.


### Browser Compatibility

Omega Loan Prediction Software has been tested and verified to work on the following browsers:

Google Chrome (latest version)
Mozilla Firefox (latest version)
Please ensure that you are using a compatible browser for the best experience.

That's it! You have now successfully installed and set up Omega Loan Prediction Software on your development environment. You're ready to start exploring and customizing the application as per your requirements.


## Design Guidelines 

<!-- Document the design principles, UI/UX guidelines, and visual components used in the app. Include color schemes, typography, layout, and interaction patterns. Provide examples and usage guidelines for consistency. -->
## UI/UX Guidelines

primary colour - Shades of blue
Secondary Coulour - Tints of blue
Visual/ Action colour - green, Red, orange

## Typography
font-family: 'Inter';

## Layout
Grid Layout: A grid-based layout arranges content and elements in a structured grid system, typically with rows and columns. It provides an organized and balanced appearance to the design, making it popular for websites, print materials, and user interfaces.

1000 rows 8px
16 columns

## interaction patterns
1. Primary and Secondary button
2. Input field 
3. Toogle
4. Checkbox


## Project Structure

<!-- Describe the structure of the front-end codebase, including folders, files, and naming conventions. Explain the organization of components, stylesheets, scripts, and any other relevant assets. -->


## Architecture and Components

<!-- Explain the high-level architecture of the front-end, including the main components and their interactions. Provide diagrams or flowcharts to illustrate the structure and relationships between components. -->


## API Documentation

<!-- provide detailed documentation for all the endpoints, request/response formats, and any authentication mechanisms used. Include examples of API calls and expected responses. -->


## Component Documentation

<!-- Document each front-end component used in the app, including reusable UI elements, forms, navigation, and any custom components. Describe their purpose, props/inputs, state, methods, and usage guidelines. Include code examples and screenshots where applicable. -->


## Styling and Theming

<!-- Explain the approach to styling and theming in the app, such as CSS frameworks, preprocessors, or CSS-in-JS solutions used. Provide guidelines for consistent styling, including class naming conventions, global styles, and responsive design considerations. -->



## Error Handling

<!-- Outline the strategies for handling errors and edge cases in the client app. Document how error messages are displayed to users, how validation is handled, and any error logging or reporting mechanisms in place. -->


