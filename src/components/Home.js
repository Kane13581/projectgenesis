import React from "react";

function Home() {
    return (
        <div className="HomePageSyle">
            <div className="HomeLoading">
                <div className="HomeLoading1">
                    <img
                        className="HomeLoadingStyle1"
                        src={require('./../assets/Home/Eye1.jpg')}
                        alt="Eye1.jpg" />
                </div>
                <div className="HomeLoading2">
                    <img
                        className="HomeLoadingStyle2"
                        src={require('./../assets/Home/Eye2.jpg')}
                        alt="Eye2.jpg" />
                </div>

            </div>
            <div className="Carousel">

                <div id="myCarousel" class="carousel slide" data-ride="carousel">

                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                        <li data-target="#myCarousel" data-slide-to="4"></li>
                        <li data-target="#myCarousel" data-slide-to="5"></li>
                    </ol>

                    <div class="carousel-inner">
                        <div class="item active">
                            <img
                                className="HomeCarFirstImg"
                                src={require('./../assets/Home/chipsetglow.jpg')}
                                alt="location.jpg" />
                        </div>

                        <div class="item">
                            <img
                                className="HomeCarFirstImg"
                                src={require('./../assets/Home/CogWheel.png')}
                                alt="location.jpg" />
                        </div>

                        <div class="item">
                            <img
                                className="HomeCarFirstImg"
                                src={require('./../assets/Home/leathermod.jpg')}
                                alt="location.jpg" />
                        </div>

                        <div class="item">
                            <img
                                className="HomeCarFirstImg"
                                src={require('./../assets/Home/leathermod.jpg')}
                                alt="location.jpg" />
                        </div>

                        <div class="item">
                            <img
                                className="HomeCarFirstImg"
                                src={require('./../assets/Home/CogWheel.png')}
                                alt="location.jpg" />
                        </div>
                        <div class="item">
                            <img
                                className="HomeCarFirstImg"
                                src={require('./../assets/Home/chipsetglow.jpg')}
                                alt="location.jpg" />
                        </div>
                    </div>

                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

            </div>

        </div>


    );
}

export default Home;