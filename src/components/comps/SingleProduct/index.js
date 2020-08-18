import React, { useEffect } from "react";
import {  
  MDBRow, 
  MDBCol, 
  MDBBtn, 
  MDBAnimation,
  MDBContainer, 
} from "mdbreact";
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import EmojiTransportationOutlinedIcon from '@material-ui/icons/EmojiTransportationOutlined';
import TranslateOutlinedIcon from '@material-ui/icons/TranslateOutlined';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import TitleOutlinedIcon from '@material-ui/icons/TitleOutlined';
import { useDispatch, useSelector } from "react-redux";
import actions from '../../../redux/actions'
import { DownloadUrl, ImageUrl } from "../../../config";



const SingleProduct = ({ id }) => {
  const dispatch = useDispatch()
  const { 
    title,
    detail,
    tags,
    languages,
    companies,
    image,
    file
  } = useSelector(state => state.app.repack)

  useEffect(() => {
    actions.getRepack(id, dispatch)
  }, [])

  return (
    <MDBContainer className="my-5">
      <section className="my-5 mt-5 py-5">
        <MDBAnimation type="fadeInUp" reveal>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            <TitleOutlinedIcon fontSize="large" />. {title}
          </h2>
          <p className="grey-text w-responsive text-center mx-auto mb-5">
            {detail}
          </p>
        </MDBAnimation>

        <MDBRow>
          <MDBCol lg="6" className="mb-lg-0 mb-5">
            <MDBAnimation type="fadeInLeft" reveal>
              <img
                src={`${ImageUrl}${image}`}
                alt=""
                className="img-fluid rounded z-depth-1 w-100"
              />
            </MDBAnimation>
          </MDBCol>
          <MDBCol lg="6">
            <MDBAnimation type="fadeInRight" reveal>
              <MDBRow className="mb-3">
                <MDBCol md="1" size="2">
                  <LocalOfferOutlinedIcon color="primary" fontSize="large" />
                </MDBCol>
                <MDBCol md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Tags</h5>
                  <p className="grey-text">
                    {tags}
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBAnimation>
            <MDBAnimation type="fadeInRight" delay="100ms" reveal>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <EmojiTransportationOutlinedIcon color="error" fontSize="large" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Companies</h5>
                <p className="grey-text">
                  {companies}
                </p>
              </MDBCol>
            </MDBRow>
            </MDBAnimation>
            <MDBAnimation type="fadeInRight" delay="200ms" reveal>
              <MDBRow className="mb-3">
                <MDBCol md="1" size="2">
                  <TranslateOutlinedIcon color="action" fontSize="large" />
                </MDBCol>
                <MDBCol md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Languages</h5>
                  <p className="grey-text">
                    {languages}
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBAnimation>
            <MDBAnimation type="fadeInRight" delay="300ms" reveal>
              <MDBRow className="mb-3">
                <MDBCol md="1" size="2">
                  <CloudDownloadOutlinedIcon color="secondary" fontSize="large" />
                </MDBCol>
                <MDBCol md="11" size="10">
                  <MDBBtn color='secondary' rounded size='md'>
                    <a href={`${DownloadUrl}${file}`} className="text-white text-decoration-none">Click Here</a>
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}

export default SingleProduct;