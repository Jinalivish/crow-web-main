import React from 'react';
import { Route, useParams } from 'react-router-dom';

// import SubTopic from '../components/SubTopic';

const TopicPage = () => {
  const {subtopic} = useParams();

  return (
   <div className="p-8">
    <h1>{subtopic}</h1>
   </div>
  );
};

export default TopicPage;
