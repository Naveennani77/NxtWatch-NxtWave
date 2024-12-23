import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import SavedVideosRoute from './SavedVideosRoute'
import './App.css'

import ProductedRoute from './ProductedRoute'
import LoginRoute from './LoginRoute'
import HomeRoute from './HomeRoute'

import TrendingRoute from './TrendingRoute'
import VideoItemDetailsRoute from './VideoItemDetailsRoute'
import GamingRoute from './GamingRoute'
import VideoContext from './Nxtvideocontext/VideoContext'
import NotFoundRoute from './NotFoundRoute'
// Replace your code here
class App extends Component {
  state = {
    savedvideoslist: [],
    isnightmode: false,
  }

  changingheaderbgclr = () => {
    console.log('naveen')
    this.setState(prevState => ({
      isnightmode: !prevState.isnightmode,
    }))
  }

  sendingdavedvalue = array => {
    this.setState(prevState => ({
      savedvideoslist: [...prevState.savedvideoslist, array],
      savedvideositems: !prevState.savedvideositems,
    }))
  }

  render() {
    const {
      savedvideoslist,
      isnightmode,

      islikedbutton,
      isdislikedbutton,
      savedvideositems,
    } = this.state

    return (
      <VideoContext.Provider
        value={{
          isnightmode,
          savedvideoslist,
          islikedbutton,
          isdislikedbutton,
          savedvideositems,
          changingsavedstatus: this.changingsavedstatus,
          changinglikedstaus: this.changinglikedstaus,
          changingdislikedstatus: this.changingdislikedstatus,
          sendingdavedvalue: this.sendingdavedvalue,
          changingheaderbgclr: this.changingheaderbgclr,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProductedRoute exact path="/gaming" component={GamingRoute} />
          <ProductedRoute exact path="/" component={HomeRoute} />
          <ProductedRoute exact path="/trending" component={TrendingRoute} />
          <ProductedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProductedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <Route component={NotFoundRoute} />
        </Switch>
      </VideoContext.Provider>
    )
  }
}

export default App
