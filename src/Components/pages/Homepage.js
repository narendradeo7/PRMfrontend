import React from "react";
import Loginfrm from "../Loginfrm";
import maitlogo from "../images/maitlogo.png"

const Home = () => {
  return <div className="container-fluid homebody">
    <div className="row">
      <div className="col-md-10 col-12 mx-auto">

<div className="container-fluid homhead">
  <div className="row">
    <div className="col-md-6 homettl">
<img src={maitlogo} alt="" className="homelogo" />
    </div>

<Loginfrm/>
    


  </div>
</div>

      </div>
    </div>
  </div>;
};

export default Home;