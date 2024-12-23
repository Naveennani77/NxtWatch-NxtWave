import styled from 'styled-components'

export const Gamingcontainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isnightmode ? '#000000' : '#ffffff')};
`
export const Gamingcontentcontainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const Cardcontentcontainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Gameinglogocont = styled.div`
  background-color: #231f20;
  height: 100px;
  display: flex;
  flex-direction: row;

  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
`
export const Gamimgbackgrdlogo = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 70px;
  background-color: #000000;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`
export const Gametoppara = styled.p`
  font-size: 25px;
  color: #f9f9f9;
  margin-left: 10px;
  font-weight: 550;
`
export const Gamingunorderlistcont = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
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
