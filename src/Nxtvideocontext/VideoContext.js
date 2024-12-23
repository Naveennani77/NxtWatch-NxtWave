import React from 'react'

const VideoContext = React.createContext({
  savedvideoslist: [],
  sendingdavedvalue: () => {},
  isnightmode: false,
  changingheaderbgclr: () => {},
  islikedbutton: false,
  isdislikedbutton: false,
  savedvideositems: false,
  issavedbtn: false,
  changingsavedstatus: () => {},
  changinglikedstaus: () => {},
  changingdislikedstatus: () => {},
})
export default VideoContext
