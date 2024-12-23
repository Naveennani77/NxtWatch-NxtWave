import styled from 'styled-components'

export const Detailsviewcontainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  padding-right: 50px;

  align-items: center;

  padding-top: 20px;

  width: 100%;
`
export const Contentdivdetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Paracontent = styled.p`
  font-size: 15px;
  color: #ebebeb;
`
export const Detfullcont = styled.div`
  display: flex;
  flex-direction: column;
`
export const Belowcontentarangcontiner = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.isnightmode ? '#000000' : '#ffffff')};
`
