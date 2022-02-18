import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getPosts,
} from './postsSlice';

export function PostsList() {
  const posts = useAppSelector(state => state.posts.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts())
  });

  return (
    <div>
      {posts.map(post => {
        return (
          <div key={post.id} >
            <div >{post.id}</div>
            <div>{post.title}</div>
          </div>
        )
      })}
    </div >
  );
}
