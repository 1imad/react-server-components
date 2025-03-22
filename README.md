# React Server Components: The Future of Fast Web Apps

[](https://www.linkedin.com/in/syedimadahmed/)

![Syed Imaduddin Ahmed](https://media.licdn.com/dms/image/v2/C5603AQEo1ghDHFGCIg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1632794637286?e=1747872000&v=beta&t=AwpPImTi6WbamifkfIkhiSY7qvXM23Sqq8lFoWwHw-Q)

[](https://www.linkedin.com/in/syedimadahmed/)

## Syed Imaduddin Ahmed

Full-Stack Engineer

React is evolving, and one of its biggest game-changers is  **React Server Components (RSC)**. If you've heard the term but aren’t sure what it means, or why it's important, don't worry I’ll explain it in simple terms.

By the end of this post, you'll understand what React Server Components are, why they matter, and how to use them to build faster, more efficient apps.

### What Are React Server Components?

Imagine you have a  **restaurant**.

-   **Server Components**  are like the  **chefs in the kitchen**—they prepare food (data) and serve it directly to the table.
-   **Client Components**  are like the  **waiters,** they bring menus, take orders, and handle interactions (buttons, forms, animations).

With traditional React, the  **client (browser) does most of the work**—it fetches data, processes it, and updates the UI. This can slow things down, especially on slow networks or less powerful devices.

**React Server Components change this.**  They run directly on the server, fetch data there, and send  **ready-to-display**  HTML to the browser. This means:

**Faster loading times**  – Less JavaScript sent to the browser.  **Better SEO**  – Search engines can easily read the content. I**mproved performance**  – Works great even on slow devices.

### How Do React Server Components Work?

React Server Components only work in frameworks that support them, like  **Next.js 13+**.

Let’s break it down with a simple example:

1.  **You request a webpage (e.g.,** example.com/products).
2.  **The server fetches data from a database or API.**
3.  **The server builds the page and sends the complete HTML to your browser.**
4.  **Your browser just displays the page—no extra work needed!**

With traditional React, your browser would have to download JavaScript, fetch data, process it, and then display it. That’s a lot of extra steps that slow things down.

  

### Example: Building a React Server Component From Scratch

Let’s build a simple  **User List page**  using React Server Components in  **Next.js 14+**.

### Step 1: Set Up a Next.js Project

If you don’t have a Next.js project, install one by running:

npx create-next-app my-app
cd my-app
npm run dev

Make sure you select the  **App Router (app/ directory)**  during setup.

### Step 2: Create a Server Component

Inside your project, create a new file:

app/users/page.jsx

This file is a  **React Server Component**—meaning it runs only on the server.

// app/users/page.jsx
// This is a Server Component—it fetches data before sending HTML to the browser.

async function getUsers() {
  // Fetch data from an API
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers(); // Fetch data on the server

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-2 border rounded">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

### Step 3: Run the App

Start your development server:

npm run dev

Then, open  [**http://localhost:3000/users**](http://localhost:3000/users)  in your browser.

You’ll see a list of users, and guess what?  **No JavaScript is running on the client!**  The HTML is fully prepared on the server and just displayed in the browser.

### Why Should You Care About Server Components?

-   **Faster Load Times**
-   **Better SEO (Search Engine Optimization)**
-   **Smaller JavaScript Bundles**
-   **Secure Data Fetching**

### When to Use?

**Use Server Components for:**  Pages that mainly display data (e.g., blogs, product pages). Fetching data securely (e.g., databases, API calls). Reducing JavaScript load on the client.

**Use Client Components for:**  Buttons, forms, and interactive elements. Anything that needs useState, useEffect, or event listeners.