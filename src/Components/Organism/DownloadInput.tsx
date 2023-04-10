import React from 'react'
import { HiOutlineDownload } from "react-icons/hi"
export const DownloadInput = () => {
  return (
    <div className='download_container'>
        <input className='download_input' type='number' placeholder='Enter Recipe id'/>
        <div className='downloadbtn_container'> <button className='download_btn'><HiOutlineDownload/></button></div>
    </div>
  )
}
