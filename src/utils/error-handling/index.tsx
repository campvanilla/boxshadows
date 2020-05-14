import React from 'react';
import { ErrorPageWrapper } from './styles';
import ErrorImageMobile from '@assets/error-page.svg';


// export const trackException = (error: Error) => {

// };

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


export function withErrorTracking<T = any>(
  Component: React.ComponentType<T>
) {
  const WithErrorTracking: React.FC<T> = (props: T) => {
    try {
      return <Component {...props} />;
    } catch (error) {
      // trackException(error);
      return <ErrorPage />;
    }
  };

  return WithErrorTracking;
}

