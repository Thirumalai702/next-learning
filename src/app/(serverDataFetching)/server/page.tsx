type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
  };
  
  export default async function UsersServer() {
    const response = await fetch("https://jsonplaceholder.typicode.com/userss");
    const users: User[] = await response.json();
    console.log(users);
  
    return (
      <ul >
        {users.map((user) => (
          <li
            key={user.id}
            
          >
            <div >{user.name}</div>
            <div >
              <div>Username: {user.username}</div>
              <div>Email: {user.email}</div>
              <div>Phone: {user.phone}</div>
            </div>
          </li>
        ))}
      </ul>
    );
  }