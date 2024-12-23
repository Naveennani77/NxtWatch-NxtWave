import styled from 'styled-components'

export const Homecontainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  margin-left: 0px;
  padding-left: 0px;
`
export const Homecardlist = styled.li`
  width: 280px;
  height: 300px;
  margin-right: 10px;
  margin-bottom: 30px;
`
export const Cardimageel = styled.img`
  width: 280px;
  height: 150px;
  background-size: cover;
`
export const Cartdetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0px;
  padding-top: 12px;
`
export const Logodetalils = styled.img`
  width: 30px;
  background-size: cover;
  height: 40px;
`
export const Contentcontainercard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  padding-top: 0px;
  padding-left: 8px;
`
export const CardPara = styled.p`  
   margin-top:0px;
   padding-top:0px;
   font-size:15px; 
   color: ${props => (props.isnightmode ? '#f1f5f9' : '#212121')};
   font-family:"Roboto" 
   padding-bottom:0px;
   margin-bottom:0px; 
   font-weight:440;



`
export const Viewscont = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0px;
`
export const Viewspara = styled.p`
  font-size: 12px;
  margin-top: 0px;
  padding-top: 10px;
  color: ${props => (props.isnightmode ? '#e2e8f0' : '#64748b')};
  font-family: 'Roboto';
  font-weight: 550;
  margin-right: 20px;
`
export const CardPara2 = styled.p`  


   margin-top:0px;
   padding-top:10px;
   font-size:15px; 
   color: ${props => (props.isnightmode ? '#e2e8f0' : '#64748b')};
   font-family:"Roboto" 
   padding-bottom:0px;
   margin-bottom:0px; 
   font-weight:550;


`
