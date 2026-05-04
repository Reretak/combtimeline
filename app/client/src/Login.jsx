import axios from "axios";
import { useNavigate } from '@tanstack/react-router'

function Login(){
    // 1. Initialize the hook
    const navigate = useNavigate();

    // 2. Make the function async directly.
    // React 19 passes the FormData object as the first argument automatically.
    async function loginLogic(formData){
        const name = formData.get("name");
        const password = formData.get("password");

        try {
            // 3. Fix Axios: Move 'withCredentials' to the 3rd argument (config)
            const response = await axios.post(
                "https://timelineserver-production.up.railway.app/login",
                {
                    name: name,
                    password: password,   
                },
                {
                    withCredentials: true
                }
            );
            // 4. Use navigate() instead of redirect() for Client Actions
            // ye sthe data is needed idk why the response has data in it but Ig the AI is right
            if(response.data.success){
                navigate({ 
                    to: '/timeline/admin/'
                });
            }
            else{
                navigate({ 
                    to: '/timeline/'
                });
            }
            
        } catch (error) {
            console.error("Login failed", error);
            // You can handle error UI state here if needed
        }
    }

    return(
        <>
        <p>Login bla bla bla</p>
        {/* 5. Pass the function directly to action */}
        <form action={loginLogic}>
            <input name="name" />
            <input name="password" />
            <button type="submit">Login</button>
        </form>
        </>
    )
}

export default Login;
//Ty GLM