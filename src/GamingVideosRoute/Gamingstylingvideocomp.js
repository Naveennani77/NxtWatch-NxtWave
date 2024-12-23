import styled from 'styled-components'

export const Listelement = styled.li`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  margin-bottom: 20px;
`
export const Listcontentel = styled.div`
  display: flex;
  flex-direction: column;
`
export const Listhead = styled.h1`
  font-size: 20px;
  color: ${props => (props.isnightmode ? '#f9f9f9' : '#212121')};
  font-weight: 550;
  font-family: 'Roboto';
`
export const Listpare = styled.p`
  font-size: 15px;
  color: ${props => (props.isnightmode ? '#f9f9f9' : '#212121')};
  font-weight: 550;
  font-family: 'Roboto';
`
export const Listimg = styled.img`
  width: 100%;
  height: 250px;
`
