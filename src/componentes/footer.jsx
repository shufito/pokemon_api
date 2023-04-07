import React from 'react';

const Footer = () => {
    return ( <>
    <div className="container">
        <footer className="d-flex flex-wrap justify-content-around justify-content-md-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 align-items-center">
                <a className="mb-3 mb-md-0 text-light text-decoration-none d-block" href="https://www.linkedin.com/in/jo%C3%A3o-victor-silva-profissional/">© 2022 João Victor</a>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-light" href="https://www.linkedin.com/in/jo%C3%A3o-victor-silva-profissional/"><i className="bi bi-linkedin"></i></a></li>
                <li className="ms-3"><a className="text-light" href="https://github.com/shufito"><i className="bi bi-github"></i></a></li>
            </ul>
            
            
        </footer>
    </div>
    </> );
}
 
export default Footer;