import React, { PropsWithChildren } from 'react';
import { ErrorPageWrapper } from './styles';
import ErrorImageMobile from '@assets/error-page.svg';

export const trackException = (error: Error) => {
  const { message } = error;
  if (typeof window.gtag === 'function') {
    console.log("trackException -> window.gtag", message);

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


export class ErrorBoundary extends React.Component<PropsWithChildren<{}>, { hasError: boolean }> {
  state = { hasError: false, };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    trackException(error);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }
    return this.props.children;
  }
}
