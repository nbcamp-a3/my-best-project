import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { AllBoard, BoardDetail, Home, MyPage, NewBoard } from 'pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Allboard" element={<AllBoard />} />
          <Route path="/boards/:id" element={<BoardDetail />} />
          <Route path="/boards/new" element={<NewBoard />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
