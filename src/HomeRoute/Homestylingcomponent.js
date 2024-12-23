import styled from 'styled-components'

export const Homecont = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isnightmode ? '#000000' : '#ffffff')};
  width: 100%;
`
export const Contentcontainer = styled.div`
  display: flx;
  flex-direction: row;
`
export const Elemntsnavcont = styled.div`
  width: 20vw;
  background-color: #e2e8f0;

  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
`
export const Itemscontainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Contentdetailscontainer = styled.div`
  width: 80vw;
  padding-right: 35px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
`
export const Topdetailscontainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 90%;
  height: 250px;
  background-size: cover;
`
export const Imageheaderel = styled.img`
  width: 160px;
  height: 30px;
  background-size: cover;
`

export const Allrequirecontentcontiner = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 400px;
`
export const Topbannerbutton = styled.button`
  width: 200px;
  height: 40px;
  background-color: #f9f9f9;
  border-width: 2px;
  border-style: solid;
  border-color: #383838;
  color: #383838;
  border-radius: 5px;
  font-weight: 550;
  font-family: 'Roboto';
  margin-top: 20px;
`
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
   color: #181818;
   font-family:"Roboto" 
   padding-bottom:0px;
   margin-bottom:0px; 
   font-weight:550;



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
  color: #7e858e;
  font-family: 'Roboto';
  font-weight: 550;
`
export const CardPara2 = styled.p`  


   margin-top:0px;
   padding-top:10px;
   font-size:15px; 
   color: #94a3b8;
   font-family:"Roboto" 
   padding-bottom:0px;
   margin-bottom:0px; 
   font-weight:550;


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
