import {Link} from 'react-router-dom'
import {IoHome} from 'react-icons/io5'
import {FaFire, FaHeart} from 'react-icons/fa'

import {GoFileSubmodule} from 'react-icons/go'
import VideoContext from '../Nxtvideocontext/VideoContext'
import {
  Elemntsnavcont,
  Itemscontainer,
  Listcontainerelemnt,
  Bottomdivcontainer,
  Belowheading,
  Listbelowitems,
  Imagestyling,
  Belowpara,
  Paracontainer,
} from './Navstylingcomponents'
import './index.css'

const Navigationbar = () => (
  <VideoContext.Consumer>
    {value => {
      const {isnightmode} = value

      return (
        <Elemntsnavcont isnightmode={isnightmode}>
          <Listcontainerelemnt>
            <Link to="/">
              <Itemscontainer>
                <IoHome size={26} color=" #64748b" />
                <Paracontainer isnightmode={isnightmode}>Home</Paracontainer>
              </Itemscontainer>
            </Link>
            <Link to="/trending">
              <Itemscontainer>
                <FaFire size={26} color="#64748b" />
                <Paracontainer isnightmode={isnightmode}>
                  Trending
                </Paracontainer>
              </Itemscontainer>
            </Link>
            <Link to="/gaming">
              <Itemscontainer>
                <FaHeart size={26} color=" #64748b" />
                <Paracontainer isnightmode={isnightmode}>Gaming</Paracontainer>
              </Itemscontainer>
            </Link>
            <Link to="/saved-videos">
              <Itemscontainer>
                <GoFileSubmodule size={26} color=" #64748b" />
                <Paracontainer isnightmode={isnightmode}>
                  Saved Videos
                </Paracontainer>
              </Itemscontainer>
            </Link>
          </Listcontainerelemnt>
          <Bottomdivcontainer>
            <Belowheading>CONTACT US</Belowheading>
            <Listbelowitems>
              <Imagestyling
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />

              <Imagestyling
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Imagestyling
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </Listbelowitems>
            <Belowpara>
              Enjoy! Now to see your channels and recommendations
            </Belowpara>
          </Bottomdivcontainer>
        </Elemntsnavcont>
      )
    }}
  </VideoContext.Consumer>
)
export default Navigationbar
