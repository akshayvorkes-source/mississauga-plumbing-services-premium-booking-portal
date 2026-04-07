import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'
import { ServicesPage } from '@/pages/ServicesPage'
import { EmergencyPage } from '@/pages/EmergencyPage'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { Toaster } from '@/components/ui/sonner'
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout><HomePage /></SiteLayout>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/services",
    element: <SiteLayout><ServicesPage /></SiteLayout>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/emergency",
    element: <SiteLayout><EmergencyPage /></SiteLayout>,
    errorElement: <RouteErrorBoundary />,
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
        <Toaster position="top-center" richColors closeButton />
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>,
)