import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom';
import Root from './root';

const routes : RouteObject = {
  path : "/",
  element : (
    <Root>
      <Outlet/>
    </Root>
  )
}

const router = createBrowserRouter([routes]);
export default router;
