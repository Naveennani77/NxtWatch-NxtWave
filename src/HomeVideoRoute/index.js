import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import VideoContext from '../Nxtvideocontext/VideoContext'
import {
  Homecardlist,
  Cardimageel,
  Cartdetails,
  Contentcontainercard,
  CardPara,
  CardPara2,
  Viewscont,
  Viewspara,
  Logodetalils,
} from './Homevideostyling'

const HomeVideoRoute = props => {
  const {eachdetails} = props

  const {
    thumbnailUrl,
    profileImageUrl,
    title,
    name,
    viewCount,
    publishedAt,
    id,
  } = eachdetails
  const noumberyears = new Date(publishedAt)
  const publishedtime = formatDistanceToNow(noumberyears)
  console.log(publishedtime)

  return (
    <VideoContext.Consumer>
      {value => {
        const {isnightmode} = value

        return (
          <Link to={`/videos/${id}`}>
            <Homecardlist>
              <Cardimageel src={thumbnailUrl} alt="video thumbnail" />
              <Cartdetails>
                <Logodetalils src={profileImageUrl} alt="channel logo" />
                <Contentcontainercard>
                  <CardPara isnightmode={isnightmode}>{title}</CardPara>
                  <CardPara2 isnightmode={isnightmode}>{name}</CardPara2>

                  <Viewscont>
                    <Viewspara isnightmode={isnightmode}>
                      {viewCount} views
                    </Viewspara>
                  </Viewscont>
                </Contentcontainercard>
              </Cartdetails>
            </Homecardlist>
          </Link>
        )
      }}
    </VideoContext.Consumer>
  )
}
export default HomeVideoRoute
