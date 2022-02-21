import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Input, List } from 'antd';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import PostItem from './PostItem';
import {
  getPosts,
  fetchAddPost,
} from './postsSlice';

export function PostsList() {
  const posts = useAppSelector(state => state.posts.posts);
  const dispatch = useAppDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const showModal = () => { setIsModalVisible(true) };
  const handleCancel = () => { setIsModalVisible(false) };
  const handleOk = (title: string, body: string) => {
    dispatch(fetchAddPost({ title, body }));
    setIsModalVisible(false)
  };
  const { TextArea } = Input;

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch]);

  return (
    <>
      <Button type="primary" onClick={showModal}>Добавить пост</Button>
      <Modal title="Новый пост" visible={isModalVisible} onOk={() => handleOk(title, body)} onCancel={handleCancel}>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Заголовок"
            name="title"
            rules={[{ required: true, message: 'Пожалуйста, введите заголовок!' }]}
          >
            <Input value={title} onChange={e => setTitle(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Содержание"
            name="body"
            rules={[{ required: true, message: 'Напишите что-нибудь!' }]}
          >
            <TextArea rows={4} value={body} onChange={e => setBody(e.target.value)} />
          </Form.Item>
        </Form>
      </Modal>

      <List
        itemLayout="horizontal"
        dataSource={posts}
        renderItem={post => (
          <PostItem post={post} />
        )}
      />
    </>
  )
}
