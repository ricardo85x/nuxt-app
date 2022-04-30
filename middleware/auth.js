export default  ({ redirect }) => {

    const loggedIn = true;

    if(!loggedIn) {
        redirect("/")
    }
    console.log("Auth middleware")
}