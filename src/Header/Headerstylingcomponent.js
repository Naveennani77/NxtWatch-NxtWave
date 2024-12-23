import styled from 'styled-components'

export const Headercontainer = styled.div`
  display: flex;

  flex-direction: row;

  background-color: ${props => (props.isnightmode ? '#313131' : '#ffffff')};
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
`
export const Imageheaderel = styled.img`
  width: 180px;
  height: 30px;
  background-size: cover;
`
export const Headerelemntscont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Buttonheadersmoon = styled.button`
  background-color: transparent;
  border-width: 0px;
`
export const ButtonLogout = styled.button`
  background-color: #f9f9f9;
  border-color: #00306e;
  color: #00306e;
  border-width: 2px;
  font-family: 'Roboto';
  border-style: solid;
  margin-top: 0px;
  padding-top: 0px;
  margin-right: 15px;
`
