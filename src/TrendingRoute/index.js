import {Component} from 'react'
import {FaFire} from 'react-icons/fa'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import VideoContext from '../Nxtvideocontext/VideoContext'

import {
  Trendheader,
  Imagetrend,
  Trendtoppara,
  Trendingcontainer,
  Trendingcontentcontainer,
  Contentcardcontainer,
  Unorderlistcontainer,
  Failureheading,
  Failureimg,
  Failuredescription,
  Failurecontainer,
  Failurecontentcont,
  Failurebutton,
} from './Trendingstyledcomponents'

import Navigationbar from '../Navigationbar'
import Header from '../Header'

import TredgamsavRoute from '../TredgamsavRoute'

const differentstagesobj = {
  succesobj: 'Succes',
  loaderobj: 'Loader',
  failureobj: 'Failure',
}

class TrendingRoute extends Component {
  state = {trendinglist: [], responsestate: ''}

  componentDidMount() {
    this.getproducts()
  }

  getproducts = async () => {
    this.setState({responsestate: differentstagesobj.loaderobj})
    const jwtvaluetnd = Cookie.get('jwtnxtyt')

    const trendautobj = {
      headers: {
        Authorization: `Bearer ${jwtvaluetnd}`,
      },
      method: 'GET',
    }

    const response = await fetch(
      'https://apis.ccbp.in/videos/trending',
      trendautobj,
    )
    const data = await response.json()

    if (response.ok === true) {
      const updatelist = data.videos.map(eachitems => ({
        id: eachitems.id,
        name: eachitems.channel.name,
        profileImageUrl: eachitems.channel.profile_image_url,
        publishedAt: eachitems.published_at,
        thumbnailUrl: eachitems.thumbnail_url,
        title: eachitems.title,
        viewCount: eachitems.view_count,
      }))
      console.log(updatelist)
      this.setState({
        trendinglist: updatelist,
        responsestate: differentstagesobj.succesobj,
      })
      console.log(data)
    } else {
      this.setState({responsestate: differentstagesobj.failureobj})
    }
  }

  render() {
    return (
      <VideoContext.Consumer>
        {value => {
          const {isnightmode} = value

          const rendersucesscontainer = () => {
            const {trendinglist} = this.state
            console.log('homeobjectsitems')

            return (
              <Unorderlistcontainer>
                {trendinglist.map(eachitems => (
                  <TredgamsavRoute key={eachitems.id} eachdetails={eachitems} />
                ))}
              </Unorderlistcontainer>
            )
          }
          const renderfailurecontainer = () => (
            <Failurecontainer>
              <Failureimg src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
              <Failurecontentcont>
                <Failureheading isnightmode={isnightmode}>
                  Oops! Something Went Wrong
                </Failureheading>
                <Failuredescription>
                  We are having some trouble completing your request Please try
                  again
                </Failuredescription>
                <Failurebutton>Retry</Failurebutton>
              </Failurecontentcont>
            </Failurecontainer>
          )
          const renderloadercontainer = () => {
            console.log('renderloaderview')

            return (
              <div className="loader-container" data-testid="loader">
                <Loader
                  type="ThreeDots"
                  color="#00306e"
                  height="80"
                  width="80"
                />
              </div>
            )
          }

          const renderingrequiredresponseobj = () => {
            const {responsestate} = this.state
            console.log(responsestate)

            switch (responsestate) {
              case 'Succes':
                return rendersucesscontainer()
              case 'Failure':
                return renderfailurecontainer()
              case 'Loader':
                return renderloadercontainer()
              default:
                return null
            }
          }

          return (
            <>
              <Trendingcontainer>
                <Header />

                <Trendingcontentcontainer isnightmode={isnightmode}>
                  <Navigationbar />
                  <Contentcardcontainer>
                    <Trendheader isnightmode={isnightmode}>
                      <Imagetrend>
                        <FaFire color="#ff0b37" size={40} />
                      </Imagetrend>
                      <Trendtoppara>Trending</Trendtoppara>
                    </Trendheader>
                    {renderingrequiredresponseobj()}
                  </Contentcardcontainer>
                </Trendingcontentcontainer>
              </Trendingcontainer>
            </>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default TrendingRoute
