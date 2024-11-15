import { React, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

interface IState {
  hasError: boolean;
  errorMessage: string;
}
class ErrorBoundary extends React.Component<IProps, IState> {
  public state: IState = {
    hasError: false,
    errorMessage: ''
  };

  constructor(props: IProps) {
    super(props);
  }

  static getDerivedStateFromError(error: Record<string, any>) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorMessage: error.errorMessage };
  }

  componentDidCatch(error: Record<string, any>, errorInfo: string) {
    console.log(error, errorInfo);
    this.setState({ errorMessage: errorInfo, hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
