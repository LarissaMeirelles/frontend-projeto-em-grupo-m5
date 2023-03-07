

function Mycarousel() {
  return (
        <div>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                <div className="carousel-item active" style={{width: "100%", height: "500px"}}>
            <img className="d-block carossel" src="src/img/contaimg.png" style={{width: "100%", height: "500px"}}/>
          </div>
          <div className="carousel-item" style={{width: "100%", height: "500px"}}>
            <img className="d-block carossel" src="src/img/contaimg2.png" alt="Second slide" style={{width: "100%", height: "500px"}}/>
          </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
                </a>
              </div>
        </div>

  )
}



export default Mycarousel;