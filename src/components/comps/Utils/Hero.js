import React from "react";
import { 
  MDBView,
  MDBMask
 } from "mdbreact";
import { useSelector } from "react-redux";

const Hero = () => {
  const serverUrl = useSelector(state => state.app.serverUrl)

  return (
    <MDBView src={`${serverUrl}assets/images/hero.jfif`}>
      <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
        <h2>The only official website to download repacked games</h2>
        <h5>we provides you a lot of free repacked games that you can easil download</h5>
        <p>Please enjoy</p><br />
      </MDBMask>
    </MDBView>
  )
}

export default Hero;