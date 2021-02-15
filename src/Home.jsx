import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch.js'

    const Home = () => {
        

        const { data:blogs , isPending, Error} = useFetch('http://localhost:8000/blogs');

    
    return ( 
        
        <>
        <div className="home">
            { Error && <div> { Error }</div>}
            { isPending && <div style={{fontWeight:'bold', color:'blue', borderBottom:'2px solid blue'}}>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title='My Blogposts!' />}
            

        </div>
        </>
     );
}
 
export default Home;