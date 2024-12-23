import styled from 'styled-components'

export const Savedcontainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Savedcontentalligncont = styled.div`
  display: flex;
  flex-direction: row;
`
export const Savedlistcontainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => (props.isnightmode ? '#000000' : '#ffffff')};
`
export const Savedheader = styled.div`
  background-color: #231f20;
  height: 100px;
  display: flex;
  flex-direction: row;

  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
`
export const Imagesaved = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 70px;
  background-color: #000000;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`

export const Savedunorderlist = styled.ul`
  list-style-type: none;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
`

export const Savedlistcard = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 5px;
`
export const Savedimg = styled.img`
  width: 550px;
  height: 300px;
`
export const Savedinsidecontentcont = styled.div` 
    padding-left:15px;
     display;flex;
     flex-direction:column;

`
export const Listheading = styled.p`
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
export const Viewsname = styled.p`
  color: ${props => (props.isnightmode ? '#f1f5f9' : '#64748b')};
`
export const Failureheading = styled.h1`
  color: ${props => (props.isnightmode ? '#f9f9f9' : '#212121')};
  font-family: 'Roboto';
  font-size: 20px;
`
export const Failuredescription = styled.p`
  color: ${props => (props.isnightmode ? '#64748b' : '#616e7c')};
  text-align: center;
  font-family: 'Roboto';
  font-size: 16px;
`
export const Failureimg = styled.img`
  width: 40%;
`
export const Failurecontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`

export const Failurecontentcont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Failurebutton = styled.button`
  width: 100px;
  height: 40px;
  color: #f1f1f1;
  background-color: #00306e;
  border-width: 1px;
  border-color: transparent;
  border-radius: 2px;
`
export const Savedtoppara = styled.p`
  font-size: 25px;
  color: #f9f9f9;
  margin-left: 10px;
  font-weight: 550;
`
