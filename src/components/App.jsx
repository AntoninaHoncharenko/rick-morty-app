import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { GlobalStyle } from 'GlobalStyles';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const HeroDetails = lazy(() => import('../pages/HeroDetails/HeroDetails'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="/:heroId" element={<HeroDetails />}></Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
    </div>
  );
};
