import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Contacts extends Component {
    render() { 
        return (
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">
                        <h3><strong>Our location</strong></h3>
                    </div>
                
                <div class="row">
                    <div className="col-md-7">
                    <iframe title="Map" 
                    src="https://www.google.com/maps/d/embed?mid=1LPtIWTG5taaHf2FK_tTZSPD3p14vRfV0" 
                    style={{
                        border: '0',
                        width: '100%',
                        height: '350px',
                        frameborder: '0'
                    }} allowFullScreen />
                    </div>

                    <div className="col-md-5">
                        <h4><strong>Contact us</strong></h4>
                        <form>

                           <div className="form-group">
                               <input type="text" className="form-control" 
                               placeholder="Name"/>
                            </div> 

                            <div className="form-group">
                               <input type="email" className="form-control" 
                               placeholder="Email"/>
                            </div>

                            <div className="form-group">
                               <input type="tel" className="form-control" 
                               placeholder="Phone"/>
                            </div>

                            <textarea className="form-control"
                             cols="30" rows="3" placeholder="Message" />

                            <Link className="btn btn-outline-primary text-uppercase mt-1">
                                <i className="fa fa-paper-plane-0" aria-hidden="true" />
                                <i className="fab fa-telegram-plane"/>&nbsp;Send
                            </Link>

                        </form>
                    </div>

                </div>
              </div>
            </section>
          );
    }
}
 
export default Contacts ;