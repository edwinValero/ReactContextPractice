import React from 'react';

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: unknown) {
    console.error('Uncaught error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Oops! Something went wrong.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
