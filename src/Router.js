import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import {
  AllBoard,
  BoardDetail,
  Home,
  MyPage,
  NewBoard,
  ProtectedRoute,
} from 'pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boards" element={<AllBoard />} />
          <Route path="/boards/:id" element={<BoardDetail />} />
          <Route
            path="/boards/new"
            element={
              <ProtectedRoute>
                <NewBoard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mypage"
            element={
              <ProtectedRoute>
                <MyPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
