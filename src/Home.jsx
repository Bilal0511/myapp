import React from 'react'


function Home() {
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg?w=2000" className="d-block w-100 vh-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1284549946/photo/digital-marketing-concept-online-advertisement.jpg?s=612x612&w=0&k=20&c=KWrdOaQbNF41m3TDDSn9JqvKDeHuMtvDiMPJOCGP4d0=" className="d-block w-100 vh-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://groovedigitalmarketing.com/wp-content/uploads/2021/04/dispensary_marketing_agency_ft.png" className="d-block w-100 vh-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Home