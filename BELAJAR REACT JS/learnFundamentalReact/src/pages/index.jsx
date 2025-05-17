import posts from '../posts.json'
function Homepage() {
    return (
        <>
            <h1>Simple Blog</h1>
            {
                posts.map(blog
            )
            }
        </>
    )
}

export default Homepage;