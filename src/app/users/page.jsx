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
  