'use client';
import { useState } from 'react';

export default function useMutate<R>(requestHandler: (payload: any) => Promise<R>): Response<R> {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<unknown>();
  const [response, setResponse] = useState<R>();

  async function mutate<P>(payload: P) {
    setIsLoading(true)
    try {
      const response = await requestHandler({ ...payload });
      setResponse(response);
    } catch (err) {
      setIsError(true);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    mutate,
    isLoading,
    response,
    isError,
    error,
  }
}

interface Response<D> {
  mutate: <P>(payload: P) => Promise<void>;
  isLoading: boolean;
  isError: boolean;
  error?: unknown;
  response?: D;
}