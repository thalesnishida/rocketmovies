import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Preview } from '../pages/Preview';
import { CreateMovie } from '../pages/CreateMovie';

export function AppRoutes(){
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/preview/:id' element={<Preview/>}/>
      <Route path='/createmovie' element={<CreateMovie/>}/>
    </Routes>
  )
}