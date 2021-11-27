import React from 'react'

const About = () => {
    return (
        <>
            <div className="container mt-4">
                <div className="jumbotron">
                    <h1 className="display-4">Siddharth</h1>
                    <p>Links</p>
                    <p className="lead">
                        <a  href="http://">Linkedin</a>
                        <br />
                        <a href="http://">Github</a>
                        <br />
                    </p>
                    <hr className="my-4" />

                    <p>Name : Siddharth</p>
                    <p>email : siddharth6780@gmail.com</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">
                            Learn more
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default About
