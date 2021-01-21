import React from 'react';

class ImageView extends React.Component{
    render(){/*bootstrap carousel*/
        return <div className="imageViewDiv">
            <div className = "carouselContainer">
            <div id="testCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className= "carouselImg" src="./images/artpiece1.png" alt="Pyramid"/>
                    </div>
                    <div className="carousel-item">
                        <img className = "carouselImg" src="./images/artpiece2.png" alt="Sphere"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#testCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#testCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon"></span>
    </a>
    </div>
    </div>
    </div>
    }
}

export default ImageView;