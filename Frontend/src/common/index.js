const backendUrl = "http://localhost:8000";

const summeryApi={
    SignUp:{
        url: `${backendUrl}/api/signup`,
        method: "POST",
    },
    Login:{
        url: `${backendUrl}/api/login`,
        method: "POST",
    },
    ProfilePage:{
        url: `${backendUrl}/api/profile`,
        method: "GET",
    }
}


export default summeryApi;