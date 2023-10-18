import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Createpost() {
    const [post, Setpost] = useState(
        {
            title: '',
            body: ''
        }
    );
    const HandleTitleChange = (e) => {
        // console.log('Title input changed:', e.target.value);
        Setpost({...post, title: e.target.value});
    }
    const HandlebodyChange = (e) => {
        // console.log('body input changed:', e.target.value);
        Setpost({ ...post, body: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can send the 'post' data to your server using a POST request
        console.log('Submitting post:', post);
        // You can use a library like Axios or fetch to send the data to your server.
        axios.post(baseURL, post)
            .then((response) => {
                console.log("Post created:", response.data);
                Setpost({ title: '', body: '' });
            })
            .catch((error) => {
                console.error("Error creating post:", error);
                // Handle the error here if the post creation fails.
            });
      };

    // console.log('Render component with state:', post);

    return (
        <div className="container" style={{marginTop:50}}>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                    Title
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    value={post.title}
                    placeholder="title"
                    onChange={HandleTitleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    body
                    </label>
                    <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    value={post.body}
                    placeholder="body"
                    onChange={HandlebodyChange}
                    />
                </div>
                <button type="submit" style={{backgroundColor: "black"}} className="btn btn-primary">
                    Create Post
                </button>
            </form>
        </div>
    )

}