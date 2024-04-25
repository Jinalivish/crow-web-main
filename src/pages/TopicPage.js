import React from 'react';
import { Route } from 'react-router-dom';

import SubTopic from '../components/SubTopic';

const TopicPage = () => {
  //params (topic) id

  return (
    <Route path='/:subTopicId' element={<SubTopic/>}/> 
  );
};

export default TopicPage;
