import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">

            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4 text-center">Manage in Minutes</h1>
                    <p class="lead text-center">A platform were Events organisers can directly connect with the costumers to provide them the best palce for Wedding, Parties or any event. This platform also has an Integrated payment gateway so that customers can directly pay to the organisers.</p>
                </div>
            </div>

            <div className="container px-2 py-3" id="featured-3">
                <h2 className="pb-2 border-bottom text-primary">
                    Features of Manage in Minutes
                </h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col mb-4">
                        <h3 className="text-primary">User friendly</h3>
                        <p>
                            Conncet with all the Events organisers near your place contact them and book the place instantaly.
                        </p>
                        <Link to="/users/login" className="btn btn-primary">
                            Login
                        </Link>
                    </div>
                    <div className="feature col mb-4">
                        <h3 className="text-primary">Easy to Use</h3>
                        <p>
                            Create an account on our safe servers and put your events on our database and connect with the customers.
                        </p>
                        <Link to="/users/signup" className="btn btn-primary">
                            Sign Up
                        </Link>
                    </div>
                    <div className="feature col mb-4">
                        <h3 className="text-primary">Free to use</h3>
                        <p>
                            Create and Maintain events without any charge. You can create any number of events you want for free.
                        </p>
                        <Link to="/events" className="btn btn-primary icon-link">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home