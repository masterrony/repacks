
import React from 'react'
import {
  MDBCol,
  MDBMask,
  MDBAnimation,
  MDBBtn,
  MDBView,
  MDBCardBody
} from 'mdbreact'
import { useSelector } from 'react-redux'
import { DownloadUrl, ImageUrl } from '../../../config'
import Skeleton from "react-loading-skeleton";
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const Item = ({ _id, image, title, detail, file }) => {
  const imageUrl = useSelector(state => state.app.imageUrl)
  const history = useHistory()
  
  const viewMore = () => history.push( `/repack/${_id}`)

  return (
    <MDBCol lg="4" md="12" className="mb-lg-0 mb-4 my-4">
      <MDBAnimation type="pulse" reveal>
        <Link to={`/repack/${_id}`}>
          <MDBView className="overlay rounded z-depth-1 clickable" waves>      
              {
                !image ? <Skeleton />
                      : <img
                          src={`${ImageUrl}${image}`}
                          alt=""
                          className="img-fluid img-repack-card"
                        />
              }
              <MDBMask overlay="white-slight" />
          </MDBView>
        </Link>
        <MDBCardBody className="pb-0">
          <h4 className="font-weight-bold my-3">{title || <Skeleton/>}</h4>
          { !file ? <Skeleton />
                  : <MDBBtn color='secondary' rounded size="sm">
                      <a href={`${DownloadUrl}${file}`} className="text-white text-decoration-none">Download</a>
                    </MDBBtn>
          }
          { !_id ? <Skeleton />
                : <MDBBtn color="purple" size="sm" onClick={viewMore}>View more</MDBBtn>}
        </MDBCardBody>
      </MDBAnimation>
    </MDBCol>
  )
}

export default Item