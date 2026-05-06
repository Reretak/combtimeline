import axios from "axios";
import { useNavigate } from '@tanstack/react-router'
import { useState,useActionState, useTransition } from 'react'

function Admin(){ 
    return(
        <>
            <p>Welcome!</p>
            <Post />
            <PostPut />
            <PostDelete />
            <Tag />
            <TagPut />
            <TagDelete />
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
            console.error("Post Post failed", error);
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

function PostPut() {
    async function postlogic(prevState, formData) {
        const title = formData.get("title");
        const content = formData.get("content");
        const id = formData.get("id")

        try {
            const response = await axios.put(
                "https://timelineserver-production.up.railway.app/api/post/"+id,
                { title, content },
                { withCredentials: true }
            );
            return { success: response.data.success };
        } catch (error) {
            console.error("Put post failed", error);
            return { success: false, error: error.message };
        }
    }

    const [putstate, putformAction] = useActionState(postlogic, { success: false });

    return (
        <>
            <h1>PUT POST</h1>
            <form action={putformAction}>
                <input name="title" />
                <textarea name="content" />
                <input name="id" type="number"/>
                <button type="submit">Update Post</button>
            </form>
            <p>Success = {putstate.success.toString()}</p>
        </>
    );
}
function PostDelete() {
    async function postlogic(prevState, formData) {
        const id = formData.get("id")
        try {
            const response = await axios.delete(
                "https://timelineserver-production.up.railway.app/api/post/"+id,
                {},
                { withCredentials: true }
            );
            return { success: response.data.success };
        } catch (error) {
            console.error("Delete post failed", error);
            return { success: false, error: error.message };
        }
    }

    const [delstate, delformAction] = useActionState(postlogic, { success: false });

    return (
        <>
            <h1>DELETE POST</h1>
            <form action={delformAction}>
                <input name="id" type="number"/>
                <button type="submit">Delete Post</button>
            </form>
            <p>Success = {delstate.success.toString()}</p>
        </>
    );
}

function Tag() {
    async function taglogic(prevState, formData) {
        const name = formData.get("name");

        try {
            const response = await axios.post(
                "https://timelineserver-production.up.railway.app/api/tag",
                { name },
                { withCredentials: true }
            );
            return { success: response.data.success };
        } catch (error) {
            console.error("Tag failed", error);
            return { success: false, error: error.message };
        }
    }

    const [tagstate, tagformAction] = useActionState(taglogic, { success: false });

    return (
        <>
            <h1>POST TAG</h1>
            <form action={tagformAction}>
                <input name="name" />
                <button type="submit">Post tag</button>
            </form>
            <p>Success = {tagstate.success.toString()}</p>
        </>
    );
}

function TagPut() {
    async function taglogic(prevState, formData) {
        const id = formData.get("id")
        const name = formData.get("name")

        try {
            const response = await axios.put(
                "https://timelineserver-production.up.railway.app/api/post/"+id,
                {name},
                { withCredentials: true }
            );
            return { success: response.data.success };
        } catch (error) {
            console.error("Put tag failed", error);
            return { success: false, error: error.message };
        }
    }

    const [puttagstate, puttagformAction] = useActionState(taglogic, { success: false });

    return (
        <>
            <h1>PUT POST</h1>
            <form action={puttagformAction}>
                <input name="name" />
                <input name="id" type="number"/>
                <button type="submit">Update Tag</button>
            </form>
            <p>Success = {puttagstate.success.toString()}</p>
        </>
    );
}
function TagDelete() {
    async function taglogic(prevState, formData) {
        const id = formData.get("id")
        try {
            const response = await axios.delete(
                "https://timelineserver-production.up.railway.app/api/post/"+id,
                {},
                { withCredentials: true }
            );
            return { success: response.data.success };
        } catch (error) {
            console.error("Delete tag failed", error);
            return { success: false, error: error.message };
        }
    }

    const [deltagstate, deltagformAction] = useActionState(taglogic, { success: false });

    return (
        <>
            <h1>DELETE TAG</h1>
            <form action={deltagformAction}>
                <input name="id" type="number"/>
                <button type="submit">Delete Tag</button>
            </form>
            <p>Success = {deltagstate.success.toString()}</p>
        </>
    );
}

export default Admin;