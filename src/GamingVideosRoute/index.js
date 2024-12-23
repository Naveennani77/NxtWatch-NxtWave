import {Link} from 'react-router-dom'
import {
  Listelement,
  Listcontentel,
  Listhead,
  Listpare,
  Listimg,
} from './Gamingstylingvideocomp'
import VideoContext from '../Nxtvideocontext/VideoContext'

const GamingVideosRoute = props => {
  const {eachdetails} = props
  const {thumbnailUrl, title, viewCount, id} = eachdetails

  return (
    <VideoContext.Consumer>
      {value => {
        const {isnightmode} = value

        return (
          <Link to={`/videos/${id}`}>
            <Listelement>
              <Listimg src={thumbnailUrl} />

              <Listcontentel>
                <Listhead isnightmode={isnightmode}>{title}</Listhead>
                <Listpare>{viewCount} Watching Worldwide</Listpare>
              </Listcontentel>
            </Listelement>
          </Link>
        )
      }}
    </VideoContext.Consumer>
  )
}
export default GamingVideosRoute
