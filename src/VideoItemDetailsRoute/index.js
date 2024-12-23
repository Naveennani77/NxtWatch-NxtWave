import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import Videodetailscardcontent from '../Videodetailscardcontent'
import Header from '../Header'
import Navigationbar from '../Navigationbar'
import VideoContext from '../Nxtvideocontext/VideoContext'
import './index.css'

import {
  Detailsviewcontainer,
  Contentdivdetails,
  Detfullcont,
  Belowcontentarangcontiner,
} from './Videodetailsstyling'

const differentstagesobj = {
  succesobj: 'Succes',
  loaderobj: 'Loader',
  failureobj: 'Failure',
}

class VideoItemDetailsRoute extends Component {
  state = {detailslistspecifi: [], responsestate: ''}

  componentDidMount() {
    this.getdetailslist()
  }

  getdetailslist = async () => {
    this.setState({responsestate: differentstagesobj.loaderobj})
    const userauthenjwt = Cookie.get('jwtnxtyt')

    const {match} = this.props

    const {params} = match

    const {id} = params

    const authhdobj = {
      headers: {
        Authorization: `Bearer ${userauthenjwt}`,
      },
      method: 'GET',
    }

    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, authhdobj)

    const datarsp = await response.json()

    if (response.ok === true) {
      const updatedone = {
        name: datarsp.video_details.channel.name,

        id: datarsp.video_details.id,
        title: datarsp.video_details.title,
        profileImageUrl: datarsp.video_details.channel.profile_image_url,
        subscriberCount: datarsp.video_details.channel.subscriber_count,
        description: datarsp.video_details.description,
        publishedAt: datarsp.video_details.published_at,
        thumbnailUrl: datarsp.video_details.thumbnail_url,
        videoUrl: datarsp.video_details.video_url,
        viewCount: datarsp.video_details.view_count,
      }
      console.log(updatedone)
      this.setState({
        detailslistspecifi: updatedone,
        responsestate: differentstagesobj.succesobj,
      })
    } else {
      this.setState({responsestate: differentstagesobj.failureobj})
    }
  }

  rendersucesscontainer = () => {
    const {detailslistspecifi} = this.state
    const {videoUrl} = detailslistspecifi
    console.log('homeobjectsitems')

    return (
      <Detailsviewcontainer>
        <ReactPlayer url={videoUrl} controls width="100%" height="60vh" />
        <Contentdivdetails>
          <Videodetailscardcontent eachdetails={detailslistspecifi} />
        </Contentdivdetails>
      </Detailsviewcontainer>
    )
  }

  renderfailurecontainer = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="imagesaved"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We are having some trouble completing your request</p>
      <p>Please try again</p>
      <button type="button">Retry</button>
    </div>
  )

  renderloadercontainer = () => {
    console.log('renderloaderview')

    return (
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#00306e" height="80" width="80" />
      </div>
    )
  }

  renderingrequiredresponseobj = () => {
    const {responsestate} = this.state
    console.log(responsestate)

    switch (responsestate) {
      case 'Succes':
        return this.rendersucesscontainer()
      case 'Failure':
        return this.renderfailurecontainer()
      case 'Loader':
        return this.renderloadercontainer()
      default:
        return null
    }
  }

  render() {
    return (
      <VideoContext.Consumer>
        {value => {
          const {isnightmode} = value

          return (
            <Detfullcont>
              <Header />

              <Belowcontentarangcontiner isnightmode={isnightmode}>
                <Navigationbar />

                {this.renderingrequiredresponseobj()}
              </Belowcontentarangcontiner>
            </Detfullcont>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default VideoItemDetailsRoute
