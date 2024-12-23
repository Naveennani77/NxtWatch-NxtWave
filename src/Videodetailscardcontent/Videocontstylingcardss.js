import styled from 'styled-components'

export const Paracontent = styled.p` 
    font-size:20px; 
    Color:${props => (props.isnightmode ? ' #f9f9f9' : ' #0f0f0f')};
    font-famlily:"Roboto":
    font-weight:550;
    padding-top:0px;
    margin-top:0px;
    margin-left:15px;

    
    


`
export const Likespublishedcont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Paraitems = styled.p`
  font-size: 15px;
  font-family: 'Roboto';

  color: ${props => (props.isnightmode ? '#f9f9f9' : '#64748b')};
  margin-left: 15px;
  padding-top: 0px;
  margin-top: 0px;
`
export const Leftitemscont = styled.div`
  display: flex;
  flex-direction: row;
`
export const Rightitemscont = styled.div`
  display: flex;
  flex-direction: row;
`
export const LikeButton = styled.button`
  display: flex;
  color: ${props => (props.islikedbutton ? '#2563eb' : '#64748b')};
  flex-direction: row;
  margin-right: 15px;
  justify-content: center;
  background-color: transparent;
  border-width: 0px;
`
export const Likedpara = styled.p` 
    font-size:15px; 
   font-family:"Roboto"
    
    padding-top:0px;
    margin-top:0px;
    margin-left:15px;

    
    


`

export const Dilikedpara = styled.p`
  font-size: 15px;
  font-family: 'Roboto';

  padding-top: 0px;
  margin-top: 0px;
  margin-left: 15px;
`
export const Paracontent2 = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
`
export const Subscribesaccount = styled.div`
  display: flex;
  flex-direction: row;
`
export const Sublogo = styled.img`
  width: 100px;
  height: 80px;
  border-radius: 30px;
`
export const Subscribercontentdiv = styled.div`
  display: flex;
  flex-direction: column;
`
export const Likesinsidedetailscontainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`
export const Buttonelement = styled.button`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  border-width: 0px;
  color: ${props => (props.savedvideositems ? '#2563eb' : '#64748b')};
`
export const DislikeButton = styled.button`
  display: flex;
  flex-direction: row;
  margin-right: 15px;
  justify-content: center;
  background-color: transparent;
  border-width: 0px;
  color: ${props => (props.isdislikedbutton ? '#2563eb' : '#64748b')};
`

export const Subscribercountpara = styled.p`
  color: ${props => (props.isnightmode ? '#f9f9f9' : '#64748b')};
`
export const Parachannelcont = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isnightmode ? '#f9f9f9' : '#383838')};
  font-size: 16px;
  font-weight: 440;
`
