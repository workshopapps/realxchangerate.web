import React from 'react'
import Container from '../style/ApplyToAdvertisement.style';

const ApplicationForm = () => {
  return (
    <Container>
        <div className='app-wrapper'>
            <h3>Application Form</h3>
            <div className='inputs--container'>
                <div className='input--item'>
                        <label htmlFor="email--id" >Email</label>
                        <input type="email" id='email--id' placeholder='Enter email-address' />
                </div>
                <div className='input--item'>
                        <label htmlFor="pixel--id" >Pixel Size</label>
                        <input type="text" id='pixel--id' placeholder='Enter pixel Size' />
                </div>
                <div className='input--item'>
                        <label htmlFor="impression--id" >Number of Impressions</label>
                        <input type="text" id='impression--id' placeholder='Enter number of impressions' />
                </div>
                <div className='input--item'>
                        <label htmlFor="referrance--id">Referrance Number</label>
                        <input type="text" id='referrance--id' placeholder='Enter referrence number' />
                </div>
                <div className='input--item'>
                        <label htmlFor="banner--id">Link to banner image</label>
                        <input type="text" id='banner--id' placeholder='Enter link to banner image' />
                </div>
                <button>Submit</button>
            </div>
        </div>
    </Container>
  )
}

export default ApplicationForm