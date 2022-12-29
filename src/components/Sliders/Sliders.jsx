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
