
const About = () => {
  return (
    <>
      <div id="about-me" className="container-fluid">
        <div className="row col-sm-12">
          <div
            id="pic-container"
            className="col-md-4 col-lg-4 col-sm-12 text-center"
          >
            
            <div id="picture-text">
              <p>Aydene M. Lopez Laclaustra</p>
              <p>
                Full stack developer certified by <br />
                the University of Central Florida
              </p>
              <p></p>
            </div>
          </div>
          <div id="bio" className=" col-md col-lg col-sm-12">
            <div id="bio-card" className="card">
              <div className="card-body">
                <h5 className="card-title">Bio</h5>
                <p className="card-text">
                She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease. She reluctantly crept a little closer with the encouragement of her friends as the fear continued to build. She couldn't help but feel that something horrible was about to happen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;