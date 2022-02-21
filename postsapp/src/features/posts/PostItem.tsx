import React from 'react';
import { IPost } from './postsSlice';
import { List, Button } from 'antd';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchDeletePost,
  fetchEditPost
} from './postsSlice';

interface PostProps {
  post: IPost; // try not to use any.  
};

const PostItem = ({ post }: PostProps) => {
  const dispatch = useAppDispatch();

  return (
    <List.Item actions={[<Button type='link'>править</Button>, <Button type='link' onClick={() => dispatch(fetchDeletePost(post.id))}>удалить</Button>]}
    >
      <List.Item.Meta
        title={post.title}
        description={post.body}
      />
    </List.Item>
  )
}

export default PostItem
