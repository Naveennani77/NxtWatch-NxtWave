import {Link} from 'react-router-dom'
import VideoContext from '../Nxtvideocontext/VideoContext'
import {
  Listitems,
  Listcontentlist,
  Imglistel,
  Listheading,
  Listpara,
  Listviewscont,
  Channelname,
} from './Allstylingcomponents'

const TredgamsavRoute = props => {
  const {eachdetails} = props
  const {id, thumbnailUrl, title, name, viewCount} = eachdetails

  return (
    <VideoContext.Consumer>
      {value => {
        const {isnightmode} = value

        return (
          <Link to={`/videos/${id}`}>
            <Listitems key={id}>
              <Imglistel src={thumbnailUrl} />
              <Listcontentlist>
                <Listheading isnightmode={isnightmode}> {title}</Listheading>

                <Channelname isnightmode={isnightmode}>{name}</Channelname>
                <Listviewscont>
                  <Listpara isnightmode={isnightmode}>
                    {viewCount} Views
                  </Listpara>
                </Listviewscont>
              </Listcontentlist>
            </Listitems>
          </Link>
        )
      }}
    </VideoContext.Consumer>
  )
}
export default TredgamsavRoute
