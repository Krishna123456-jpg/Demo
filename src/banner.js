import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <div>
      <Carousel style={{ marginTop: "2rem" }}>
        <Carousel.Item style={{ textAlign: "center" }}>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
            alt="First slide"
            style={{ width: "90%", height: "70vh", textAlign: "center" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ textAlign: "center" }}>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
            alt="Second slide"
            style={{ width: "90%", height: "70vh", textAlign: "center" }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ textAlign: "center" }}>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
            alt="Third slide"
            style={{ width: "90%", height: "70vh", textAlign: "center" }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
