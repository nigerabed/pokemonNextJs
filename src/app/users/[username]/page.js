export default function userDetailPage({params}){
   const  {username} = params;

    return(
        <>
        <h2> User Detail Page</h2>
            <h3>User :{username} </h3>
        </>
    )
}