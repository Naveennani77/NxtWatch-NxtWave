import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'
import {IoMoonSharp} from 'react-icons/io5'

import VideoContext from '../Nxtvideocontext/VideoContext'
import './index.css'
import {
  Headercontainer,
  Imageheaderel,
  Headerelemntscont,
  Buttonheadersmoon,
  ButtonLogout,
} from './Headerstylingcomponent'

class Header extends Component {
  userlogout = () => {
    Cookie.remove('jwtnxtyt')

    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <VideoContext.Consumer>
        {value => {
          const {isnightmode, changingheaderbgclr} = value

          const imageurl = isnightmode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const changebackgroundcolor = () => {
            console.log('hi')
            changingheaderbgclr()
          }

          return (
            <Headercontainer isnightmode={isnightmode}>
              <Imageheaderel src={imageurl} alt="website logo" />
              <Headerelemntscont>
                <Buttonheadersmoon
                  onClick={changebackgroundcolor}
                  type="button"
                  data-testid="theme"
                >
                  <IoMoonSharp className="reacticonstyle" />
                </Buttonheadersmoon>

                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  className="reacticonstyle2"
                  alt="profile"
                />

                <ButtonLogout type="button" onClick={this.userlogout}>
                  Logout
                </ButtonLogout>
              </Headerelemntscont>
            </Headercontainer>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}
export default withRouter(Header)
