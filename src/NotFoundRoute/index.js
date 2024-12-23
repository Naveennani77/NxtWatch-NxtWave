import {Component} from 'react'
import {
  Notfoundcontainer,
  Imageelement,
  Imageheading,
  Imagepara,
} from './Notfoundstyling'

class NotFoundRoute extends Component {
  render() {
    return (
      <Notfoundcontainer>
        <Imageelement src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png" />
        <Imageheading>Page Not Found</Imageheading>
        <Imagepara>
          We are sorry ,the page you requested could not be found
        </Imagepara>
      </Notfoundcontainer>
    )
  }
}

export default NotFoundRoute
