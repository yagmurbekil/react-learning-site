import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { TopicsLayout } from './pages/TopicsLayout';
import { TopicContent } from './pages/TopicContent';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<MainLayout />}>
          <Route path="topics" element={<TopicsLayout />}>
            <Route path=":id" element={<TopicContent />} />
          </Route>
          <Route path="*" element={<div className="flex items-center justify-center h-screen text-2xl font-bold text-slate-200">Sayfa Bulunamadı</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}