import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const baseURL = "https://jsonplaceholder.typicode.com/posts/";

export default function Getpost() {
    const [post, Setpost] = useState(
        {
            title: '',
            body: ''
        }
    );
    const { id } = useParams();

    const HandleTitleChange = (e) => {
        // console.log('Title input changed:', e.target.value);
        Setpost({...post, title: e.target.value});
    }
    const HandlebodyChange = (e) => {
        // console.log('body input changed:', e.target.value);
        Setpost({ ...post, body: e.target.value});
    }

    const history = useNavigate()
    const handleCreateNewPost = () => {
        history('/createpost')
    }

    useEffect(() => {
        axios.get(`${baseURL}/${id}`).then((response) => {
            Setpost(response.data);
        });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can send the 'post' data to your server using a POST request
        console.log('Submitting post:', post);
        // You can use a library like Axios or fetch to send the data to your server.
        axios.put(`${baseURL}/${id}`, post)
            .then((response) => {
                console.log("Post update:", response.data);
            })
            .catch((error) => {
                console.error("Error creating post:", error);
                // Handle the error here if the post creation fails.
            });
      };

    if (!post) return null;

    return(
        // <div>
        //     <h1>Post title {post}</h1>
        //     <p>Post description {post}</p>
        // </div>

        // <div className="container" style={{marginTop:100}}>
        //     <h1>Title  ::  {post.title}</h1>
        //     <p>Description ::  {post.body}</p>
        //     <button 
        //         type="button" style={{backgroundColor: "black"}} 
        //         className="btn btn-primary"
        //         onClick={handleCreateNewPost}>New Post</button>
        // </div>

        <div className="container" style={{marginTop:50}}>
            <form onClick={handleSubmit}>
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
                    Update Post
                </button>
            </form>
        </div>
    )
};