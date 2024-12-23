import styled from 'styled-components'

export const Elemntsnavcont = styled.div`
  width: 20vw;
  background-color: ${props => (props.isnightmode ? '#313131' : '#ffffff')};
  height: 100vh;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
`
export const Itemscontainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Listcontainerelemnt = styled.div`
  display: flex;
  flex-direction: column;
`
export const Bottomdivcontainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Listbelowitems = styled.div`
  display: flex;
  flex-direction: row;
`
export const Belowheading = styled.p`
  font-size: 20px;
  font-color: #f1f5f9;
  font-weight: 550;
  font-family: 'Roboto';
`
export const Belowpara = styled.p`
  font-size: 25px;
  color: #f9f9f9;
  font-weight: 400;
  font-family: 'Roboto';
`
export const Imagestyling = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 20px;
  margin-right: 5px;
`
export const Paracontainer = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isnightmode ? ' #ffffff' : '#231f20')};
`
