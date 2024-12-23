import {Component} from 'react'
import Cookie from 'js-cookie'
import {FaHeart} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Navigationbar from '../Navigationbar'
import GamingVideosRoute from '../GamingVideosRoute'
import VideoContext from '../Nxtvideocontext/VideoContext'
import {
  Gamingcontainer,
  Gamingcontentcontainer,
  Cardcontentcontainer,
  Gameinglogocont,
  Gametoppara,
  Gamimgbackgrdlogo,
  Gamingunorderlistcont,
  Failureheading,
  Failureimg,
  Failuredescription,
  Failurecontainer,
  Failurecontentcont,
  Failurebutton,
} from './Gamingstylingcomponents'

const differentstagesobj = {
  succesobj: 'Succes',
  loaderobj: 'Loader',
  failureobj: 'Failure',
}

class GamingRoute extends Component {
  state = {gaminglist: [], responsestate: ''}

  componentDidMount() {
    this.gettheproducts()
  }

  gettheproducts = async () => {
    this.setState({responsestate: differentstagesobj.loaderobj})
    const jwtgamevalue = Cookie.get('jwtnxtyt')

    const gamingrequestobj = {
      headers: {
        Authorization: `Bearer ${jwtgamevalue}`,
      },
      method: 'GET',
    }
    const responseobj = await fetch(
      'https://apis.ccbp.in/videos/gaming',
      gamingrequestobj,
    )
    console.log(responseobj)
    const responsejndt = await responseobj.json()
    console.log(responsejndt)

    if (responseobj.ok === true) {
      const updatedone = responsejndt.videos.map(eachitems => ({
        id: eachitems.id,
        thumbnailUrl: eachitems.thumbnail_url,
        title: eachitems.title,
        viewCount: eachitems.view_count,
      }))

      this.setState({
        gaminglist: updatedone,
        responsestate: differentstagesobj.succesobj,
      })
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
            const {gaminglist} = this.state
            return (
              <Gamingunorderlistcont>
                {gaminglist.map(eachitems => (
                  <GamingVideosRoute
                    key={eachitems.id}
                    eachdetails={eachitems}
                  />
                ))}
              </Gamingunorderlistcont>
            )
          }

          const renderfailurecontainer = () => (
            <Failurecontainer>
              <Failureimg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
              />
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
            <Gamingcontainer isnightmode={isnightmode}>
              <Header />
              <Gamingcontentcontainer>
                <Navigationbar />
                <Cardcontentcontainer>
                  <Gameinglogocont>
                    <Gamimgbackgrdlogo>
                      <FaHeart size={30} color="#ff0b37" />
                    </Gamimgbackgrdlogo>
                    <Gametoppara>Gaming</Gametoppara>
                  </Gameinglogocont>

                  {renderingrequiredresponseobj()}
                </Cardcontentcontainer>
              </Gamingcontentcontainer>
            </Gamingcontainer>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}
export default GamingRoute
