import React from 'react'
// import {BiSearchAlt2} from 'react-icons/bi';
import { Container, Heropage, NewsSection, Nav, NavItems, Cards, Card, NewsButton, Search, TopicButton, Team, TeamHeader, TeamCards, TeamCard, Contact, ContactHeader, Button } from './Press.styled'
import img1 from '../assets/Image (1).png'
import img2 from '../assets/Image (2).png'
import img3 from '../assets/Image (3).png'
import img4 from '../assets/Rectangle 163.png'
import { NavLink, Link } from 'react-router-dom'



const data = [
    {
        id: 1,
        image: img1,
        desc: 'StreetRate: Know the real exchange rates of every country currency, with advance User experience',
        link: '/',
        date: 'Nov 22, 2022'
    },
    {
        id: 1,
        image: img2,
        desc: 'StreetRate: Know the real exchange rates of every country currency, with advance User experience',
        link: '/',
        date: 'Nov 22, 2022'
    },
    {
        id: 1,
        image: img3,
        desc: 'StreetRate: Know the real exchange rates of every country currency, with advance User experience',
        link: '/',
        date: 'Nov 22, 2022'
    },
    {
        id: 1,
        image: img1,
        desc: 'StreetRate: Know the real exchange rates of every country currency, with advance User experience',
        link: '/',
        date: 'Nov 22, 2022'
    },
    {
        id: 1,
        image: img2,
        desc: 'StreetRate: Know the real exchange rates of every country currency, with advance User experience',
        link: '/',
        date: 'Nov 22, 2022'
    },
    {
        id: 1,
        image: img3,
        desc: 'StreetRate: Know the real exchange rates of every country currency, with advance User experience',
        link: '/',
        date: 'Nov 22, 2022'
    },
];

const team = [
    {
        id: 1,
        // image: img4,
        name: 'Mark Essien',
        title: 'CEO/Co-founder'
    },
    {
        id: 1,
        // image: img4,
        name: 'Mark Essien',
        title: 'CEO/Co-founder'
    },
    {
        id: 1,
        // image: img4,
        name: 'Mark Essien',
        title: 'CEO/Co-founder'
    },
    {
        id: 1,
        // image: img4,
        name: 'Mark Essien',
        title: 'CEO/Co-founder'
    },
    {
        id: 1,
        // image: img4,
        name: 'Mark Essien',
        title: 'CEO/Co-founder'
    },
];


const Press = () => {
  return (
    <>
        <Container>
            <h1>HI</h1>
            <Heropage>
                <h5>Press + News </h5>
                <h1>Word on the street: <br/>
                StreetRate, A Parralel market Currency Exchange Rate Product Is Lauching
                </h1>
                <Link  to='/article'>
                    <Button primary>Read More</Button>
                </Link>
            </Heropage>

            <NewsSection>
                <Nav>
                    <NavItems>
                        <NavLink to='/press' style={({ isActive }) => 
                        (isActive ? { borderBottom: '4px solid #00296B', color: '#0046B5'} : {color: '#000000'})}>In The News</NavLink>
                        <NavLink to='/news' style={({ isActive }) => 
                        (isActive ? {borderBottom: '4px solid #00296B', color: '#0046B5'} : {color: '#000000'})}> Press Release</NavLink>
                    </NavItems>
                    <NavItems>
                        <Search placeholder='Search Topics'>
                        </Search>
                        <TopicButton>Popular Topics</TopicButton>
                    </NavItems>
                </Nav>

                <Cards>
                    {data.map(({id, image, desc, link, date }) => {
                        return (
                            <Card key={id}>
                                <p>{date}</p>
                                <img src={image} alt="" />
                                <hr/>
                                <h3>{desc}</h3>
                                <a href={link}>Read Article</a>
                            </Card>
                        )
                    })}
                    
                </Cards>
                <NewsButton >Show More</NewsButton>
            </NewsSection>

            <Team>
                <TeamHeader>
                    <h1>Meet The Team</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </TeamHeader>
                <TeamCards>
                    {team.map(({id, image, name, title }) => {
                        return (
                            <TeamCard key={id}>
                              
                                <img src={image} alt="" />
                                <h3>{name}</h3>
                                <p>{title}</p>
                            </TeamCard>
                        )
                    })}
                    
                </TeamCards>
            </Team>

            <Contact>
                <ContactHeader>Get in touch</ContactHeader>
                <h1>Would You Like To Speak With Our Press Team</h1>
                <h1>press@streetrates.com</h1>
            </Contact>
        </Container>
    </>
  )
}

export default Press