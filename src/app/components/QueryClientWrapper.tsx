"use client"

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactNode } from 'react';

const queryClient = new QueryClient();

type QueryClientWrapperProps = {
    children: ReactNode;
};

const QueryClientWrapper: React.FC<QueryClientWrapperProps> = ({ children }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default QueryClientWrapper;
