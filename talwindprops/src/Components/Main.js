import React from "react";

const Main = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Your Logo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/allpost">All Posts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/createpost">New Post</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/annual">Annual Report</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/team">Teams</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blogs">Blogs</a>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-primary" href="/signin">Sign In</a>
            </nav>
        </div>
    );
};

export default Main;
