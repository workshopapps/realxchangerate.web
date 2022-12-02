import React from 'react'
import styled from 'styled-components'
import Logo from '../AffiliatePartners/Assets/Logo.png'

const Referral = () => {
  return (
    <Container>
        <StyledHero>
            <div className='header'>
                <img src={Logo} alt="StreetRate" />
                <p>
                    StreetRate Affiliate Partner Application
                </p>
            </div>
        </StyledHero>

        <StyledSection>    
            <div className='main'>
                <form action="">
                    <div className='personal-details'>
                        <div className='name'>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" placeholder='First name' />
                            </div>
                            <div>
                                <input type="text" name="name" id="name" placeholder='Last name' />
                            </div>
                        </div>

                        <div className='birth-and-contact'>
                            <div>
                                <label htmlFor="birthdate">Date of Birth</label>
                                <input type="date" name="birthdate" id="birthdate" placeholder='DD/MM/YYYY' />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone number</label>
                                <input type="number" name="phone" id="phone" />
                            </div>
                        </div>
                        
                        <div className='email'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                    </div>

                    <div className='location'>
                        <div className="address">
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" id="address" />
                        </div>

                        <div className="location-details">
                            <div>
                                <label htmlFor="city">City</label>
                                <input type="text" name="city" id="city" />
                            </div>
                            <div>
                                <label htmlFor="country">Country</label>
                                <select name="country" id="country"></select>
                            </div>
                        </div>
                    </div>

                    <div className="business">
                        <div className="company">
                            <label htmlFor="business">Business Name</label>
                            <input type="text" name="business" id="business" />
                        </div>
                        <div className="others">
                            <div className="website">
                                <label htmlFor="website">Website/LinkedIn</label>
                                <input type="text" name="website" id="website" />
                            </div>
                            <div className="title">
                                <label htmlFor="title">Title</label>
                                <input type="text" name="title" id="title" />
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <label htmlFor="objective">Why are you looking to refer leads to StreetRates?</label>
                        <textarea name="" id=""></textarea>
                    </div>

                    <div className="submission">
                        <button className='btn' type='submit'>Apply</button>
                    </div>
                </form>
            </div>
        </StyledSection>
    </Container>
  )
}

export default Referral

const Container = styled.div`
  max-width: 1440px;
  margin: auto;

  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }
`;

const StyledHero = styled.div`
    .header {
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        align-items: center;
        padding: 56px 0px;
        gap: 24px;
        background: #E6EFFF;
        width: 100%;
        height: 299px;
    }

    .header p {
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;
        text-align: center;
        letter-spacing: -0.02em;
        color: #0F172A;
    }

    @media screen and (min-width: 768px) {
        .header {
            flex-direction: row;
            justify-content: center;
        }
    }
`;

const StyledSection = styled.div`
    .main {
        max-width: 100%;
        padding: 20px;
        margin-bottom: 80px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 60px;
    }

    .personal-details {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: stretch;
        gap: 24px;
        width: 100%;
    }

    .name, .name div, .birth-and-contact, .location-details, .birth-and-contact div, .email, .location, .address, .location-details div, .business, .business div, .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        width: 100%;
    }

    input, select, textarea {
        width: inherit;
        padding: 8px;
    }
    
    textarea {
        resize: none;
        height: 120px;
    }

    textarea: -webkit-scrollbar {
        display: none;
    }

    label {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.001em;
        color: #334155;
    }

    .btn {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 8px;
        width: 125px;
        height: 48px;
        background: #0062FF;
        border-radius: 4px;
        border: none;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #F8FAFC;
    }

    @media screen and (min-width: 768px) {
        .main {
            padding: 30px 40px;
        }

        .form {
            gap: 100px;
        }

        .name, .birth-and-contact, .location-details, .business>div:last-child {

            flex-direction: row;
            align-items: flex-end;
            gap: 100px;
        }

        .email input {
            width: 304px;
        }

        label {
            font-size: 18px;
            line-height: 24px;
        }

        .btn {
            width: 160px;
            height: 56px;
            font-size: 16px;
            line-height: 24px;
        }

    }

    @media screen and (min-width: 1024px) {
        .main {
            padding: 40px 100px;
        }

        textarea {
            height: 196px;
        }
    }
`;