import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {FaSearch} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Navigationbar from '../Navigationbar'

import HomeVideoRoute from '../HomeVideoRoute'
import Header from '../Header'
import VideoContext from '../Nxtvideocontext/VideoContext'
import {
  Homecont,
  Contentcontainer,
  Contentdetailscontainer,
  Topdetailscontainer,
  Imageheaderel,
  Allrequirecontentcontiner,
  Topbannerbutton,
  Homecontainer,
  Failureheading,
  Failureimg,
  Failuredescription,
  Failurecontainer,
  Failurecontentcont,
  Failurebutton,
} from './Homestylingcomponent'

import './index.css'

const differentstagesobj = {
  succesobj: 'Succes',
  loaderobj: 'Loader',
  failureobj: 'Failure',
}
class HomeRoute extends Component {
  state = {
    objectlist1: [],
    responsestate: '',
    searchvalue: '',
  }

  componentDidMount() {
    this.getproductsitems()
  }

  getproductsitems = async () => {
    const {searchvalue} = this.state
    this.setState({responsestate: differentstagesobj.loaderobj})
    const jwtcookiesvalue = Cookies.get('jwtnxtyt')
    console.log(jwtcookiesvalue)

    const requestuserobj = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtcookiesvalue}`,
      },
    }

    const responseobj = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchvalue}`,
      requestuserobj,
    )

    const data = await responseobj.json()

    const {videos} = data
    console.log(data)
    console.log(responseobj)

    if (responseobj.ok === true) {
      const updateone = videos.map(eachobj => ({
        name: eachobj.channel.name,
        profileImageUrl: eachobj.channel.profile_image_url,
        publishedAt: eachobj.published_at,
        viewCount: eachobj.view_count,
        id: eachobj.id,
        title: eachobj.title,
        thumbnailUrl: eachobj.thumbnail_url,
      }))

      this.setState({
        objectlist1: updateone,
        responsestate: differentstagesobj.succesobj,
      })
    } else {
      this.setState({responsestate: differentstagesobj.failureobj})
    }
  }

  render() {
    const {searchvalue} = this.state
    const tokenvalue = Cookies.get('jwtnxtyt')

    if (tokenvalue === undefined) {
      ;<Redirect to="/login" />
    }

    return (
      <VideoContext.Consumer>
        {value => {
          const {isnightmode} = value

          const gettingsearchedvalue = () => {
            if (searchvalue !== '') {
              this.getproductsitems()
              this.setState({searchvalue: ''})
            }
          }

          const getttinguservalue = event => {
            this.setState({searchvalue: event.target.value})
          }

          const retryingfnction = () => {
            this.getproductsitems()
          }

          const searchedlistempty = () => (
            <Failurecontainer>
              <Failureimg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />

              <Failurecontentcont>
                <Failureheading isnightmode={isnightmode}>
                  No Search results found
                </Failureheading>
                <Failuredescription>
                  Try different key words or remove search filter
                </Failuredescription>
                <Failurebutton type="button">Retry</Failurebutton>
              </Failurecontentcont>
            </Failurecontainer>
          )

          const rendersucesscontainer = () => {
            const {objectlist1} = this.state
            console.log('homeobjectsitems')

            if (objectlist1.length === 0) {
              return searchedlistempty()
            }

            return (
              <Homecontainer>
                {objectlist1.map(eachobject => (
                  <HomeVideoRoute
                    eachdetails={eachobject}
                    key={eachobject.id}
                  />
                ))}
              </Homecontainer>
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
                <Failurebutton type="button" onClick={retryingfnction}>
                  Retry
                </Failurebutton>
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
            console.log('rupa')
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
            <Homecont isnightmode={isnightmode}>
              <Header />
              <Contentcontainer>
                <Navigationbar />

                <Contentdetailscontainer>
                  <Topdetailscontainer>
                    <Allrequirecontentcontiner>
                      <Imageheaderel
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <p className="headingstylecss">Buy Nxt Watch Premium</p>
                      <Topbannerbutton>GET IT NOW</Topbannerbutton>
                    </Allrequirecontentcontiner>
                  </Topdetailscontainer>
                  <div className="searchbarcontainer">
                    <input
                      type="search"
                      placeholder="Search"
                      className="inputsearchstyling"
                      onChange={getttinguservalue}
                      value={searchvalue}
                    />
                    <button
                      type="button"
                      className="searchbutton"
                      onClick={gettingsearchedvalue}
                      data-testid="searchButton"
                    >
                      <FaSearch className="imagesearchstyling" />
                    </button>
                  </div>

                  {renderingrequiredresponseobj()}
                </Contentdetailscontainer>
              </Contentcontainer>
            </Homecont>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default HomeRoute
