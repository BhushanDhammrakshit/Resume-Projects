import React from 'react'
import IMAGES from './Image'
import '../assets/styles/Profile.css'

export default function Profile() {

    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const contact = localStorage.getItem("contact");
    const accountId = localStorage.getItem("accountId");


  return (
    <div className='flexContainer'>

        <div className='container emp-profile bg-light d-flex align-items-center justify-content-center m-5 pr-0'>
            <form method='' className='bg-light m-5 pr-0'>
                <div className='row bg-light'>
                    <div className='col-md-4'>
                        <img className='image img-thumbnail' src={IMAGES.imgtwo} alt="profileImage" />
                        <h3>{name}</h3>
                    </div>

                    <div className='col-md-6'>
                            <div className='row-md-3 mt-4'>
                                <p> Name :</p>   
                                <label htmlFor="name">{name}</label>
                            </div>
                            <div className='row-md-3 mt-4'>
                            <p> Email :</p>
                                <label htmlFor="Email">{email}</label>
                            </div>
                            <div className='row-md-3 mt-4'>
                            <p> Mobile No. :</p>
                            <label htmlFor="mobileNumber">{contact}</label>
                            </div>
                            <div className='row-md-3 mt-4'>
                            <p> Account No. :</p>
                            <label htmlFor="accountNumber">{accountId}</label>
                            </div>
                    </div>

                </div>

            </form>
        </div>
    </div>
  )
}