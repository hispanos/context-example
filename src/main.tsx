import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes';
import AppProvider from './context/AppProvider';

createRoot(document.getElementById('root')!).render(
    <AppProvider>
      <RouterProvider router={routes} />
    </AppProvider>
)
