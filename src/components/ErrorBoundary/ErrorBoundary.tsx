import React from 'react';
import { IProps, IState } from './interfaces';
import './style.css';
class ErrorBoundary extends React.Component<IProps, IState> {
  state: IState = {
    hasError: false,
    error: null
  };

  constructor(props: IProps) {
    super(props);
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo);
    this.setState({ error: error, hasError: true });
  }

  render() {
    if (this.state.hasError || this.props.error) {
      return (
        <div className="error">
          {this.state.error?.message || this.props.error}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
