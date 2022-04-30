export default  ({ redirect }) => {

    const loggedIn = false;

    if(!loggedIn) {
        redirect("/")
    }
    console.log("Auth middleware")
}