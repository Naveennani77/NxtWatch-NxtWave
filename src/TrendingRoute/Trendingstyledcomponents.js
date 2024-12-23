import styled from 'styled-components'

export const Trendheader = styled.div`
  background-color: #231f20;
  height: 100px;
  display: flex;
  flex-direction: row;

  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
`

export const Imagetrend = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 70px;
  background-color: #000000;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`
export const Trendtoppara = styled.p`
  font-size: 25px;
  color: #f9f9f9;
  margin-left: 10px;
  font-weight: 550;
`
export const Trendingcontainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Trendingcontentcontainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.isnightmode ? '#000000' : '#ffffff')};
`

export const Contentcardcontainer = styled.div` 

    width:100vw;
     display;flex;
     flex-direction:column; 
     


`
export const Unorderlistcontainer = styled.ul`
  padding-left: 15px;
  padding-right: 15px;
  list-style-type: none;
`

export const Listitems = styled.li`
  display: flex;
  flex-direction: row;
`
export const Listcontentlist = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
`
export const Imglistel = styled.img`
  width: 500px;
  height: 350px;
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
