import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { New } from '../pages/New'
import { Edit } from '../pages/Edit'
import { Details } from '../pages/Details'
export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/new" element={<New />} />
      <Route path="/edit/:id" element={<Edit />} />
      
      <Route path="*" exact={true} element={<Home />} />
    </Routes>
  )
}
