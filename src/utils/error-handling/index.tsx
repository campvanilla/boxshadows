import React, { PropsWithChildren, ReactNode } from 'react';
import { ErrorPageWrapper } from './styles';
import ErrorImageMobile from '@assets/error-page.svg';

export const trackException = (error: Error): void => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'exception', {
      description: error,
      fatal: true,
    });
  } else {
    console.error(error);
  }
};

const ErrorPage: React.FC = () => {
  return (
    <ErrorPageWrapper>
      <img src={ErrorImageMobile} alt="Something went wrong" />
      <p className='subtle'>
        If you keep seeing this page, you can try raising an issue on
        {' '}<a href="https://github.com/campvanilla/boxshadows/issues/new" title="Raise an issue on GitHub">GitHub</a>{' '}
        and we will try our best to help you out!
      </p>
    </ErrorPageWrapper>
  );
}

type BoundaryState = {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<PropsWithChildren<Record<string, unknown>>, BoundaryState> {
  state = { hasError: false, };

  static getDerivedStateFromError(): BoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error): void {
    trackException(error);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <ErrorPage />;
    }
    return this.props.children;
  }
}
