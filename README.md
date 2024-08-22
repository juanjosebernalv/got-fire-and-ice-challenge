## **Project Description**

This project appears to be a web application that consumes the "An API of Ice and Fire" API to display information about the houses from the "Game of Thrones" series. The application is built using React and Next.js, and is structured with reusable components.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
First, This application was built using **node v.20.3.1** please verify that you have the correct version of node by using this parameter:

```bash
node --version
```
> [!IMPORTANT]
> You must have node 20 or higher to view correctly: **node --version __v20.3.1__**

Second, This application was built using **npm 9.6.7** please verify that you have the correct version of npm by using this parameter:

```bash
npm --version
```
> [!IMPORTANT]
> You must have node 9 or higher to view correctly: **npm --version __9.6.7__**

Third, install packages

```bash
npm install
```

Fourth, run the development server:

```bash
npm run dev
```
> [!NOTE]
> Open [http://localhost:3000](http://localhost:3000) with your browser to see the result of the simple version that has no pagination and only queries the first page of the /houses api

> [!IMPORTANT]
>  Open [http://localhost:3000/pages/1](http://localhost:3000/pages/1) with your browser to see the version that uses dynamic routes and has built-in pagination

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.



**Architecture:**

- **Next.js:** Employs Next.js for routing and server-side rendering of pages.
- **React:** Components are built with React, enabling a dynamic and reactive user interface.
- **Services:** Has a service layer (getHouses in app/services/iceandfire) to handle API calls.
- **Styling:** Uses SCSS and Tailwind for styling, promoting better organization and modularity in CSS styles.
- **Interfaces:** Utilizes TypeScript to define interfaces (IHouse) and ensure static typing.

This modular and well-organized structure facilitates the maintenance and scalability of the project.

**Key Features:**

- **API Consumption:** Uses the "An API of Ice and Fire" API to fetch data about houses.
- **Reusable Components:** Employs components like HouseCard to display information consistently.
- **Styling:** Uses SCSS and Tailwind files for styling (ex: Houses.scss).
- **Navigation:** Implements navigation between pages using Next.js's Link.
- **Pagination:** Includes pagination functionality to navigate through different pages of results Using a reusable client-side component.

**Main Component Summary:**

- **Presentational Components:** Such as HouseCard, which are responsible for displaying information in a styled manner.
- **Page Components:** Like Houses, which represent complete pages and handle data fetching logic.
- **Navigation Components:** Utilize Next.js's Link to manage navigation between pages, Like Pagination.

## **Explanation of Server Components and Client Components**

In Next.js, components can be categorized as either **Server Components** or **Client Components**. This distinction is crucial for optimizing performance and user experience.

### **Server Components**

- **Definition:** These are components that are rendered on the server.
- **Advantages:**
  - **Improved Performance:** Initial load times are faster because the HTML is pre-rendered.
  - **Better SEO:** Search engines can index the pre-rendered content, improving SEO.
  - **Enhanced Security:** Less exposure of sensitive data to the client.
- **Code Example:** The _Houses.tsx_ component is an example of a Server Component. It's defined as an async function that fetches data from the server before rendering.

### **Client Components**

- **Definition:** These components are rendered on the client (browser).
- **Advantages:**
  - **Increased Interactivity:** They allow for more interactive UIs and can handle user events.
  - **Local State:** They can maintain and manage local state.
- **Code Example:** The _Pagination.tsx_ component is is a Client Component used to handle pagination in the application. It allows users to navigate through different pages of content.

**In summary,** the choice between server and client components depends on the specific needs of each part of your application. Server components are ideal for static content or content that changes infrequently, while client components are better suited for parts of the interface that require high interactivity and state management.

**Conclusion**

Server Components: Used for tasks that require pre-rendering and performance optimization.

Client Components: Used for interactivity and client-side state management.

This combination allows us to leverage the best of both worlds, optimizing both performance and user experience.

### **Best Practices for Structuring React Components in a Next.js Project**

1. **Component Organization**:
    - **Atomic Design**: Organize components by their level of complexity and reusability (Atoms, Molecules, Organisms, Templates, Pages).
    - **Feature-Based**: Group components by feature or functionality.
2. **File Naming**:
    - Use **PascalCase** for component file names (e.g., HouseCard.tsx).
    - Use **index.tsx** for default exports within a folder.
3. **Component Folder Structure**:
    Each component should have its own folder containing the component file, styles, and tests.
    Example:
```bash
    - components/
      - shared/
        - HouseCard/
          - HouseCard.tsx
          - HouseCard.scss
          - index.ts
```