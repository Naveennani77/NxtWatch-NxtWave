import {Component} from 'react'
import {VscFileSubmodule} from 'react-icons/vsc'
import VideoContext from '../Nxtvideocontext/VideoContext'

import TredgamsavRoute from '../TredgamsavRoute'
import {
  Savedcontainer,
  Savedcontentalligncont,
  Savedlistcontainer,
  Savedheader,
  Imagesaved,
  Savedtoppara,
  Savedunorderlist,
  Failureheading,
  Failureimg,
  Failuredescription,
  Failurecontainer,
  Failurecontentcont,
  Failurebutton,
} from './Savedstylingcomponent'
import Navigationbar from '../Navigationbar'
import Header from '../Header'

class SavedVideosRoute extends Component {
  render() {
    return (
      <VideoContext.Consumer>
        {value => {
          const {savedvideoslist, isnightmode} = value
          console.log(savedvideoslist)

          const iscontent = savedvideoslist.length > 0
          console.log(iscontent)

          const {title} = savedvideoslist

          console.log(title)

          const renderingfailureel = () => (
            <Failurecontainer>
              <Failureimg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <Failurecontentcont>
                <Failureheading isnightmode={isnightmode}>
                  No Saved Videos Found
                </Failureheading>
                <Failuredescription>
                  You can save your videos while watching them
                </Failuredescription>
                <Failurebutton>Retry</Failurebutton>
              </Failurecontentcont>
            </Failurecontainer>
          )
          const rendersavedvidoes = () => (
            <Savedunorderlist>
              {savedvideoslist.map(eachobject => (
                <TredgamsavRoute eachdetails={eachobject} key={eachobject.id} />
              ))}
            </Savedunorderlist>
          )

          return (
            <Savedcontainer>
              <Header />
              <Savedcontentalligncont>
                <Navigationbar />
                <Savedlistcontainer isnightmode={isnightmode}>
                  <Savedheader>
                    <Imagesaved>
                      <VscFileSubmodule color=" #ff0b37" size={36} />
                    </Imagesaved>
                    <Savedtoppara>Saved</Savedtoppara>
                  </Savedheader>

                  {iscontent ? rendersavedvidoes() : renderingfailureel()}
                </Savedlistcontainer>
              </Savedcontentalligncont>
            </Savedcontainer>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default SavedVideosRoute
