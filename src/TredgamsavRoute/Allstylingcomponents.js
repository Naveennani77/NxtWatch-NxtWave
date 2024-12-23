import styled from 'styled-components'

export const Listitems = styled.li`
  display: flex;
  flex-direction: row;

  margin-bottom: 20px;
`
export const Listcontentlist = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`
export const Imglistel = styled.img`
  width: 600px;
  height: 400px;
`
export const Listheading = styled.h1`
  color: #000000;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 550;
  color: ${props => (props.isnightmode ? '#f1f5f9' : '#212121')};
`
export const Listpara = styled.p`
  color: ${props => (props.isnightmode ? '#f1f5f9' : '#64748b')};
`

export const Listviewscont = styled.div`
  display: flex;
  flex-direction: row;
`
export const Channelname = styled.p`
  color: ${props => (props.isnightmode ? '#f1f5f9' : '#64748b')};
`
