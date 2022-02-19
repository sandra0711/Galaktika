import React from 'react';
import { IPost } from './postsSlice';
import { Card } from 'antd';

interface PostProps {
  post: IPost; // try not to use any.  
};

const PostItem = (props: PostProps) => {
  return (
    <Card title={props.post.title} style={{ width: 300 }}>
      <p>{props.post.body}</p>
    </Card>
  )
}

export default PostItem
