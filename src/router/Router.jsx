import { Route, Routes } from 'react-router-dom';

import { App } from '@/App';
import { Login, SignUp, Laundry } from '@/pages';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Laundry />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
