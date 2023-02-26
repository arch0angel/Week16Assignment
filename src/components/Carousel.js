import Carousel from 'react-bootstrap/Carousel';

function AboutCarousel() {
    return (
        <div className='carousel'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=996&t=st=1677372250~exp=1677372850~hmac=56f457b12c8c6114af3e093e10b71fb4aaa4655b71624dea6db7434b74d58268"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Meet the Owners</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=996&t=st=1677372250~exp=1677372850~hmac=56f457b12c8c6114af3e093e10b71fb4aaa4655b71624dea6db7434b74d58268"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Our Mission Statement</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=996&t=st=1677372250~exp=1677372850~hmac=56f457b12c8c6114af3e093e10b71fb4aaa4655b71624dea6db7434b74d58268"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Idk Lmao</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  
  export default AboutCarousel;