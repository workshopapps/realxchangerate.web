import React from "react";
import Card from "../card/Card";
import TopicWrapper from "./topic.styles";

const Topic = ({textColor}) => {
  return (
    <>
      <TopicWrapper>
        <div  className="container">
          <h1>Select a topic</h1>
          <p style={{color:textColor}}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <Card textColor={textColor}/>
      </TopicWrapper>
        
    </>
  );
};

export default Topic;
