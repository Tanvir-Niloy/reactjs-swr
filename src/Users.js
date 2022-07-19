import useSWR from 'swr'


function Users() {

  const {data,error} = useSWR("https://jsonplaceholder.typicode.com/users")
 
  if(error) return <h1>{error}</h1>
  return (
    <div>
     {data ? data.map((users)=>{

        return <h1>{users.name}</h1>
     }): <h1>Loading....</h1>}
    </div>
  );
}

export default Users;
