import { Link } from "react-router-dom";
import "./carousel.css";
import "./categories.css";


const Home = () => {

  return (
    <>
      {/* Carousel  */}
      <div
        id="myCarousel"
        className="carousel slide carousel-fade "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="overlay-image"
              style={{
                "backgroundImage":
                  "url('https://source.unsplash.com/1920x1080/?nature,water')",
              }}
            ></div>

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Example headline.</h1>
                <p>
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="overlay-image"
              style={{
                "backgroundImage":
                  "url('https://source.unsplash.com/1920x1080/?nature,water')",
              }}
            ></div>

            <div className="container">
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>
                  Some representative placeholder content for the second slide
                  of the carousel.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="overlay-image"
              style={{
                "backgroundImage":
                  "url('https://source.unsplash.com/1920x1080/?nature,water')",
              }}
            ></div>

            <div className="container">
              <div className="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>
                  Some representative placeholder content for the third slide of
                  this carousel.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Browse gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <hr className="featurette-divider" />

      {/* Categories Start  */}
      <div className="container1">
        <div className="card1">
          <div className="content1">
            <h3>Editing</h3>
            <p>Everything related to those stuff</p>
            <Link className="nav-link active" to="/categories">
              Explore
            </Link>
          </div>
        </div>
        <div className="card1">
          <div className="content1">
            <h3>Photography</h3>
            <p>Everything related to those stuff</p>
            <Link className="nav-link active" to="/categories">
              Explore
            </Link>
          </div>
        </div>
        <div className="card1">
          <div className="content1">
            <h3>Event Planning</h3>
            <p>Everything related to those stuff</p>
            <Link className="nav-link active" to="/categories">
              Explore
            </Link>
          </div>
        </div>
      </div>
      <hr className="featurette-divider" />

      {/* Features  */}

      <div className="mx-5">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              First featurette heading.
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div className="col-md-5">
            <img
              src="https://source.unsplash.com/1920x1080/?nature,water"
              className="d-block rounded w-100"
              alt="..."
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Oh yeah, it’s that good.
              <br />
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p className="lead">
              Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              src="https://source.unsplash.com/1920x1080/?nature,water"
              className="d-block rounded w-100"
              alt="..."
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              And lastly, this one.
              <span className="text-muted">Checkmate.</span>
            </h2>
            <p className="lead">
              And yes, this is the last block of representative placeholder
              content. Again, not really intended to be actually read, simply
              here to give you a better view of what this would look like with
              some actual content. Your content.
            </p>
          </div>
          <div className="col-md-5">
            <img
              src="https://source.unsplash.com/1920x1080/?nature,water"
              className="d-block rounded w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
      <hr className="featurette-divider" />

      {/* Reviews */}
      <div className="container">
        <div className="row">
          <div className="col-md-4 p-2">
            <div className="card">
              <div className="card-header">Review</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>A well-known quote, contained in a blockquote element.</p>
                  <footer className="blockquote-footer">Ryekin</footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-2">
            <div className="card">
              <div className="card-header">Review</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>A well-known quote, contained in a blockquote element.</p>
                  <footer className="blockquote-footer">M1KE</footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-2">
            <div className="card">
              <div className="card-header">Review</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>A well-known quote, contained in a blockquote element.</p>
                  <footer className="blockquote-footer">NERO</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
