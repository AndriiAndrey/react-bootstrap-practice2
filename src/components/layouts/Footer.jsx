import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer className="main-footer">
          <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>Footer</h4>
                        <ul className="list-unstyled">
                            <li> Hello world</li>
                            <li> Hello world</li>
                            <li> Hello world</li>
                            <li> Hello world</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Footer</h4>
                        <ul className="list-unstyled">
                            <li><a href ="/"> Hello world</a></li>
                            <li><a href ="/"> Hello world</a></li>
                            <li><a href ="/"> Hello world</a></li>
                            <li><a href ="/"> Hello world</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Footer</h4>
                        <ul className="list-unstyled">
                            <li><a href ="/"> Hello world</a></li>
                            <li><a href ="/"> Hello world</a></li>
                            <li><a href ="/"> Hello world</a></li>
                            <li><a href ="/"> Hello world</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Footer</h4>
                        <ul className="list-unstyled">
                            <li><a href ="/"> Hello world</a></li>
                            <li><a href ="/"> Hello world</a></li>
                            <li><a href ="/"> Hello world</a></li>
                            <li><a href ="/"> Hello world</a></li>
                        </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="text-xs-center" >
                        &copy;{new Date().getFullYear()} All rights reserved
                    </p>
                </div>

            </div>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
.footer-middle{
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}
.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
    padding-left: 2rem;
}
ul li a {
    color: var(--mainGrey)
}

ul li a:hover {
    color: var(--mainLightGrey);
}

`;