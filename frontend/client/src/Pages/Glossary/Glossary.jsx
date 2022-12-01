import React, { useState } from 'react';
import {
  Search,
  Parent,
  Items,
  Box,
  Alphabet,
  Header,
  ImageLeft,
  LeftTop,
  LeftMiddle,
  LeftBottom,
  ImageRight,
  RightTop,
  RightMiddle,
  RightBottom,
  Head,
} from './GlossaryElement';
import { boxes } from './GlossaryData';
// test
function Glossary() {
  const [searchField, setSearchField] = useState('');
  const filteredData = boxes.filter((item) => {
    return item.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <>
      <Header>
        <Head>
          <h1>Glossary</h1>
          <h4>what are you interested in?</h4>
        </Head>
        <Search>
          <div>
            <img src='/assets/png/search.png' alt='' />
          </div>{' '}
          <input type='text' onChange={handleChange} />
        </Search>

        <ImageLeft>
          <LeftTop>
            <img src='/assets/png/2 1.png' alt='' />
          </LeftTop>
          <LeftMiddle>
            <img src='/assets/png/3 1.png' alt='' />
          </LeftMiddle>
          <LeftBottom>
            <img src='/assets/png/4 1.png' alt='' />
          </LeftBottom>
        </ImageLeft>

        <ImageRight>
          <RightTop>
            <img src='/assets/png/5 1.png' alt='' />
          </RightTop>
          <RightMiddle>
            <img src='/assets/png/7 1.png' alt='' />
          </RightMiddle>
          <RightBottom>
            <img src='/assets/png/8 1.png' alt='' />
          </RightBottom>
        </ImageRight>
      </Header>
      <Alphabet>
        {filteredData.map((b) =>
          b?.items && b?.items?.length ? <h4>{b.name}</h4> : <h3>{b.name}</h3>
        )}
      </Alphabet>
      <Parent>
        {filteredData.map((b) =>
          b?.items && b?.items?.length ? (
            <Box>
              <h4>{b.name}</h4>
              <Items>
                {b.items.map((item) => {
                  return (
                    <span>
                      <a href={item.link} noreferrer target='blank'>
                        {item.text}
                      </a>
                    </span>
                  );
                })}
              </Items>
            </Box>
          ) : null
        )}
      </Parent>
    </>
  );
}

export default Glossary;
