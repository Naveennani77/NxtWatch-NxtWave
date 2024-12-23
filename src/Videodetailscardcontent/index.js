import {Component} from 'react'

import {BiLike, BiDislike} from 'react-icons/bi'

import {HiOutlineSaveAs} from 'react-icons/hi'
import VideoContext from '../Nxtvideocontext/VideoContext'
import {
  Paracontent,
  Likespublishedcont,
  Leftitemscont,
  Paraitems,
  Likedpara,
  Dilikedpara,
  Rightitemscont,
  LikeButton,
  Subscribesaccount,
  Sublogo,
  Subscribercontentdiv,
  Likesinsidedetailscontainer,
  Buttonelement,
  DislikeButton,
  Paracontent2,
  Subscribercountpara,
  Parachannelcont,
} from './Videocontstylingcardss'

class Videodetailscardcontent extends Component {
  state = {
    islikedbutton: false,
    isdislikedbutton: false,
    savedvideositems: false,
  }

  render() {
    const {islikedbutton, isdislikedbutton, savedvideositems} = this.state
    return (
      <VideoContext.Consumer>
        {value => {
          const {sendingdavedvalue, isnightmode} = value

          const {eachdetails} = this.props
          const {
            title,
            profileImageUrl,

            subscriberCount,

            viewCount,
            description,
            name,
          } = eachdetails

          const onsavingvds = () => {
            sendingdavedvalue(eachdetails)
            this.setState(prevState => ({
              savedvideositems: !prevState.savedvideositems,
            }))
          }
          const updatinglikestatus = () => {
            this.setState(prevState => ({
              islikedbutton: !prevState.islikedbutton,
            }))
          }

          const updatingdislikestatus = () => {
            this.setState(prevState => ({
              isdislikedbutton: !prevState.isdislikedbutton,
            }))
          }

          return (
            <>
              <Paracontent isnightmode={isnightmode}>{title}</Paracontent>
              <Likespublishedcont>
                <Leftitemscont>
                  <Likesinsidedetailscontainer>
                    <Paraitems isnightmode={isnightmode}>
                      {viewCount} Views
                    </Paraitems>
                  </Likesinsidedetailscontainer>
                  <Likesinsidedetailscontainer />
                </Leftitemscont>
                <Rightitemscont>
                  <LikeButton
                    type="button"
                    onClick={updatinglikestatus}
                    islikedbutton={islikedbutton}
                  >
                    <BiLike size={25} />

                    <Likedpara islikedbutton={islikedbutton}>Like</Likedpara>
                  </LikeButton>

                  <DislikeButton
                    type="button"
                    onClick={updatingdislikestatus}
                    isdislikedbutton={isdislikedbutton}
                  >
                    <BiDislike size={25} />
                    <Dilikedpara isdislikedbutton={isdislikedbutton}>
                      Dislike
                    </Dilikedpara>
                  </DislikeButton>

                  <Buttonelement
                    onClick={onsavingvds}
                    type="button"
                    savedvideositems={savedvideositems}
                  >
                    <HiOutlineSaveAs size={28} />
                    <Paracontent2>Save</Paracontent2>
                  </Buttonelement>
                </Rightitemscont>
              </Likespublishedcont>
              <hr />
              <Subscribesaccount>
                <Sublogo src={profileImageUrl} alt="channel logo" />
                <Subscribercontentdiv>
                  <Paracontent isnightmode={isnightmode}>{name}</Paracontent>
                  <Subscribercountpara isnightmode={isnightmode}>
                    {subscriberCount} Subscribers
                  </Subscribercountpara>

                  <Parachannelcont isnightmode={isnightmode}>
                    {description}
                  </Parachannelcont>
                </Subscribercontentdiv>
              </Subscribesaccount>
            </>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default Videodetailscardcontent
