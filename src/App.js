import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './utils/routes';
import { MainLayout } from './layouts/MainLayout';

function App() {
  return (
    <div className="">
      <MainLayout>
        <Routes>
          {AppRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </MainLayout>
    </div >
  );
}

export default App;
