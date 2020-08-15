import React from "react";
import "./component.css";
import baboon from "../mosaicBaboon.jpg";
import bookbar from "../bookbar.png";
import developer from "../developer.png";
import solution from "../solution.png";


export default class Work extends React.Component {
    render() {
        return(
            <div className="margin" id="work-id">
                <div className="col-sm-6">
              <h3 className="headings head ml-4">3. My Work and Certifications</h3> 
              <hr className="horizontal"/>
              </div>

            <div className="row">
   
              <div class="card col-sm-6 card-background" >
                <img class="card-img-top card-image" src={baboon} alt="Card cap"/>
                <div class="card-body">
                <h5 class="intro-start card-title">Image Processing</h5>
                <p class="para-style card-text">Built an Image processing application to apply six filters on an image such as greyscale, sepia, mosaic, dithering, blur, and sharpen.
                Made use of MVC architecture, SOLID principles, and design patterns.</p>
                <p className="para-style">Note: This repo is private, drop a request to make it public.</p>
                <a class="github" href="http://github.com/itachi1994/ImageProcessingApplication/" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-2x float-right"></i></a>
                </div>
                </div>
        
                
                <div class="card col-sm-6 card-background" >
                <a href="https://frontend-bookbar.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img class="card-img-top card-image-book" src={bookbar} alt="Card cap"/></a>
                <div class="card-body">
                <h5 class="intro-start card-title ">BookBar Web App</h5>
                <p class="para-style card-text mb-4">Collaborated on building a FullStack application. A user can register and login as either a buyer or a seller. A buyer can place an order on the books currently being sold by a seller.
                 A seller can sell multiple books, and customize the price and quantity of the books he wants to sell.</p>
                 <p></p>
                <a class="github" href="https://github.com/itachi1994/BookBar-frontend" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-2x float-right"></i></a>
                </div>
                 </div>
            

         
                <div class="card col-sm-6 card-background" >
                <a href="https://www.youracclaim.com/badges/a4f99f6f-9e01-43ea-90b7-a783a3be1b1f/linked_in_profile" target="_blank" rel="noopener noreferrer"><img class="card-img-top card-image-book" src={developer} alt="Card cap"/></a>
                <div class="card-body">
                <h5 class="intro-start card-title ">AWS Certified Developer</h5>
                <p class="para-style card-text mb-4"> Validity: 2020-2023</p>
                </div>
                </div>
       
             
                <div class="card col-sm-6 card-background" >
                <a href="https://www.youracclaim.com/badges/54574a16-bc9b-41e8-8e26-93b50ca3cd59?source=linked_in_profile" target="_blank" rel="noopener noreferrer"><img class="card-img-top card-image-book" src={solution} alt="Card cap"/></a>
                <div class="card-body">
                <h5 class="intro-start card-title ">AWS Certified Solution Architect</h5>
                <p class="para-style card-text mb-4"> Validity: 2020-2023</p>
                </div>

                </div>
        
              </div>
            </div>
        );
    }
}    