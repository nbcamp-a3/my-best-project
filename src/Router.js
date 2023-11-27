import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import {
  AllBoard,
  BoardDetail,
  EditBoard,
  Home,
  MyPage,
  NewBoard,
  ProtectedRoute,
} from 'pages';
import EditProfile from 'pages/EditProfile';

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
            path="/boards/:id/edit"
            element={
              <ProtectedRoute>
                <EditBoard />
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
          <Route
            path="/mypage/edit"
            element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
