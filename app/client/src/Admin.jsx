import axios from "axios";
import { useNavigate } from '@tanstack/react-router'
import { useState,useActionState, useTransition } from 'react'

function Admin(){ 
    return(
        <>
            <p>Welcome!</p>
            <Post />
        </>
    )
}
function Post() {
    //Will learn what this do later
    //Ripped straight out of the AI
    //Yes, I have tried reading the useActionSatte doc, no i dont get it
    //hjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhj
    async function postlogic(prevState, formData) {
        const title = formData.get("title");
        const content = formData.get("content");

        try {
            const response = await axios.post(
                "https://timelineserver-production.up.railway.app/api/post",
                { title, content },
                { withCredentials: true }
            );
            return { success: response.data.success };
        } catch (error) {
            console.error("Post failed", error);
            return { success: false, error: error.message };
        }
    }

    const [state, formAction] = useActionState(postlogic, { success: false });

    return (
        <>
            <h1>POST POST</h1>
            <form action={formAction}>
                <input name="title" />
                <textarea name="content" />
                <button type="submit">Post</button>
            </form>
            <p>Success = {state.success.toString()}</p>
        </>
    );
}
export default Admin;