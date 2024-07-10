import React from 'react'

interface User{
    id:number;
    name:string;
}

const UsersPage =async () => {
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[ ]=await res.json();

  return (
    < >
    <h1 className='text-gray-600'>Users</h1>
    <p>{new Date().toLocaleDateString()}</p>
    <ul className='text-gray-900'>
{users.map(user=><li key={user.id}>{user.name}</li>)}
    </ul>
    </>
  )
}

export default UsersPage
