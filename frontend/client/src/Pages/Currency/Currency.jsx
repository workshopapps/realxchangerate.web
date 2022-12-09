import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import globe from './Assets/globe.png'
import vector from './Assets/vector.png'
import { alphabets, currency, exchange, rates } from './data/data'
import { Link } from 'react-router-dom'

const Currency = () => {
  const [glossary, setGlossary] = useState(alphabets)
  const [countryCurrency, setCountryCurrency] = useState(currency)
  const [popular, setPopular] = useState(exchange)
  const [rating, setRating] = useState(rates)
  const [value, setValue] = useState('G')
  const containerRef = useRef(null)
  const [view, setView] = useState(false)

  useEffect(()=>{
    let viewWidth = containerRef.current.getBoundingClientRect().width;
    if(viewWidth >= 768) setView(true)
  },[containerRef])

  const handleGlossary = (id) => {

  }
  return <>
    <Container ref={containerRef}>
        <Wrapper>
            <Header>
                <p className='title'>World Currency Encyclopedia</p>
                <p className='description'>
                    Street rates Encyclopedia allows you check every countries exchange rates, currency facts and more.
                </p>
                <select name="" id="">
                    {
                        countryCurrency.map(item => {
                            return <>
                                <option key={item.id} >
                                    <img src={item.image} alt="" />{"  "}{item.g}{" - "}{item.currency}
                                </option>
                            </>
                        })
                    }
                </select>
                <div className='globe'>
                    <img src={globe} alt="globe" />
                </div>
            </Header>

            <First>
                <p className='title'>Browse all Currencies</p>
                <Picker>
                    {
                        view ? <div className='full-glosary'>
                            {
                                    glossary.map(item => {
                                        const {id, letter} = item
                                        return <>
                                            <span onClick={()=>handleGlossary(id)} key={id}>{letter}</span>
                                        </>
                                    })
                                }
                        </div> : <>
                        
                            <div>
                                {
                                    glossary.slice(0,13).map(item => {
                                        const {id, letter} = item
                                        return <>
                                            <span onClick={()=>handleGlossary(id)} key={id}>{letter}</span>
                                        </>
                                    })
                                }
                            </div>
                            <div>
                                {
                                    glossary.slice(13,27).map(item => {
                                        const {id, letter} = item
                                        return <>
                                            <span onClick={()=>handleGlossary(id)} key={id}>{letter}</span>
                                        </>
                                    })
                                }
                            </div>
                        </>
                    }
                </Picker>
            </First>
            
            <Second>
                <p className='letter'>{value}</p>
                <div className='country__currency'>
                    {
                        currency.filter(item => {
                            return item.g.match(/g/i)
                        }).map(item => {
                            const {id, g, currency, image} = item
                            return <>
                                <div key={id} className="detail">
                                    <span>
                                        <img src={image} alt={g} />
                                    </span>
                                    <div>
                                        <span>{g}{"-"}</span>
                                        <span>{currency}</span>
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
            </Second>

            <Third>
                <p>Popular Currencies</p>
                <div className='popular'>
                    <div className="currency">

                        {
                            popular.map(item => {
                                const {id, g, currency, image} = item
                                return <>
                                    <Link to={`/currency-encyclopedia/:${currency}`} className='benjis' key={id}>
                                        <span>
                                            <img src={image} alt={g} />
                                        </span>
                                        <div>
                                            <span>{g}{"-"}</span>
                                            <span>{currency}</span>
                                        </div>
                                    </Link>
                                </>
                            })
                        }
                    </div>
                </div>
            </Third>

            <Fourth>
                <p>Currency Rates</p>
                <div className='rate-table'>
                    <div className='table-cols'>
                        <span>CURRENCY</span>
                        <span>RATES</span>
                    </div>
                    <div className='data-cols'>
                        {
                            rating.map(rates => {
                                const {id, f, g, rate, unit, image, img} = rates
                                return <>
                                    <div className='data-row' key={id}>
                                        <div className='xchange'>
                                            <span>
                                                <img src={img} alt={f} />
                                            </span>
                                            <span>{f}</span>
                                            <span>
                                                <img src={vector} alt="" />
                                            </span>
                                            <span>
                                                <img src={image} alt={g} />
                                            </span>
                                            <span>{g}</span>
                                        </div>
                                        <div>
                                            <span>{rate}</span>
                                            <span>{unit}</span>
                                        </div>
                                    </div>
                                </>
                            })
                        }
                    </div>
                </div>
            </Fourth>
        </Wrapper>
    </Container>
  </>
}

export default Currency

const Container = styled.main`
    background: #FFFFFF;
    max-width: 1440;
    margin-bottom: 60px;

    * {
        margin: 0;
        padding: 0;
        font-family: Inter;
        box-sizing: border-box;
    }
`

const Wrapper = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 60px;

    @media screen and (min-width: 375px) {
        padding: 30px;
    }
    @media screen and (min-width: 768px) {
        padding: 50px;
    }
`

const Header = styled.div`
    width: 100%;
    height: 565px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: #0F172A;

    .title {
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 44px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.04em;
    }

    .description {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: center;
    }

    select {
        width: 100%;
        height: 52px;
        border: 1px solid #CBD5E1;
        border-radius: 4px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 14px 12px;
        gap: 12px;
    }

    @media screen and (min-width: 768px) {
        height: 400px;
        width: 50%;
        align-items: flex-start;
        justify-content: center;
        gap: 24px;
        position: relative;

        .title {
            text-align: left;
            align-items: flex-start;
        }

        .description {
            text-align: left;
            align-items: flex-start;
        }

        select {
            width: 70%;
        }

        .globe {
            position: absolute;
            right: -100%;
            top: calc(50% - 120px);
        }

        .globe img {
            width: 305px;
        }

    }

    @media screen and (min-width: 1024px) {
        .globe {
            right: -90%;
        }

        .globe img {
            width: 350px;
        }
    }

    @media screen and (min-width: 1200px) {
        .globe {
            right: -75%;
            top: calc(50% - 140px)
        }
    }
`

const First = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 16px;
    height: 104px;

    .title {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        color: #000000;
    }
`

const Picker = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 8px;
    gap: 8px;
    width: 100%;
    height: 60px;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 8px;

    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 8px;
        gap: 14px;
        // height: 18px;
        width: 100%;
    }

    span {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #94A3B8;
        display: flex;
        align-items: center;
        text-align: center;
    }

    @media screen and (min-width: 375px) {
        div {
            gap: 16px;
        }
    }

    @media screen and (min-width: 768px) {
        width: fit-content
    }
`

const Second = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    height: auto;

    .country__currency {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        height: auto;
        width: 100%;
    }

    .detail {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 16px;
        border: 1px solid #E2E8F0;
        border-radius: 8px;
        width: 100%;
        gap: 10px;
    }

    .detail div {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
    }

    .detail div span:last-child {
        font-weight: 400;
    }

    .letter {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #64748B;
    }

    @media screen and (min-width: 768px) {
        .country__currency {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 60px;
            row-gap: 30px;
        }
    }

    @media screen and (min-width: 1024px) {
        .country__currency {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    @media screen and (min-width: 1440px) {
        .country__currency {
            grid-template-columns: repeat(4, 1fr);
        }
    }
`;

const Third = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 100%;

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #1E293B;
        display: flex;
        align-items: center;
    }

    .popular {
        height: 308px;
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
        border-radius: 24px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .currency {
        width: 78%;
        height: 252px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
        place-items: space-between;
        place-content: center;
    }

    .benjis {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        gap: 8px;
        height: 68px;
    }

    @media screen and (min-width: 768px) {
        .currency {
            grid-template-columns: repeat(3,1fr)
        }
    }

    @media screen and (min-width: 1024px) {
        .currency {
            grid-template-columns: repeat(6,1fr)
        }
    }
`

const Fourth = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    height: 516px;
    width: 100%;

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        color: #0F172A;
    }

    .rate-table {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 472px;
        width: 100%;
        background: #FFFFFF;
        border-radius: 4px;
    }

    .table-cols {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 40px;
        width: 100%;
        gap: 48px;
        background: #F8FAFC;
        padding: 10px;
    }

    .table-cols span {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #475569;
    }

    .table-cols span:first-child, .data-row div:first-child {
        width: 60%;
    }

    .table-cols span:last-child, .data-row div:last-child {
        width: 40%;
    }

    .data-cols {
        display: flex;
        flex-direction: column;
        height: 432px;
        width: 100%;
        gap: 10px;
        padding: 10px;
        justify-content: space-around;
    }

    .data-row {
        display: flex;
        width: 100%;
        gap: 20px;
    }

    .data-row div {
        display: flex;
        gap: 10px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #0F172A;
    }

    .data-row div:last-child {
        gap: 5px;
    }

    img {
        width: 24px;
    }
`
