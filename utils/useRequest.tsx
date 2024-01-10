'use client';
import { useEffect, useState } from 'react';

export default function useRequest<R>(requestHandler: () => Promise<R>): Response<R> {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<unknown>();
  const [data, setData] = useState<R>();

  useEffect(() => {
    async function handleRequest() {
      try {
        const response = await requestHandler();
        setData(response);
      } catch (err: any) {
        setIsError(true);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    handleRequest();
  }, [requestHandler]);

  return {
    isLoading,
    isError,
    error,
    data,
  }
}

interface Response<D> {
  isLoading: boolean;
  isError: boolean;
  error?: unknown;
  data?: D;
}