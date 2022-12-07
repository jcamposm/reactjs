/*import 'bootstrap/dist/css/bootstrap.min.css';

export const Sliders = () => {

return (
    <div>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://media.spdigital.cl/file_upload/Desktop%20-%20Hero%203_Navidad_1773e24b.png" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://media.spdigital.cl/file_upload/Desktop%20-%20Hero%202Navidad_1d22ecb8.png" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../../img/slider1.jpg" alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
)
}*/
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

export const Sliders = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.spdigital.cl/file_upload/Desktop%20-%20Hero%203_Navidad_1773e24b.png"
          alt="First slide"
        />

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.spdigital.cl/file_upload/Desktop%20-%20Hero%202Navidad_1d22ecb8.png"
          alt="Second slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}
