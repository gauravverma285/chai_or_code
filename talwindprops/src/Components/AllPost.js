import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const baseURL = "https://jsonplaceholder.typicode.com/posts/";

export default function GetAllPostData() {
    const [post, Setpost] = useState(null);

    const history = useNavigate()
    const handleCreateNewPost = () => {
        history('/createpost')
    }

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            Setpost(response.data);
        });
    }, []);

    if (!post) return null;

    return (
        <div className="container">
            <button 
                type="button" style={{backgroundColor: "black"}} 
                className="btn btn-primary"
                onClick={handleCreateNewPost}>New Post
            </button>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>S.N.</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {post.map((postItem, index) => (
                        <tr key={postItem.id}>
                            <td>{index + 1}</td>
                            <td>{postItem.title}</td>
                            <td>{postItem.body}</td>
                            <td><a href={`/getpost/${postItem.id}`}><i className="bi bi-eye-fill"></i></a></td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>

    )
}