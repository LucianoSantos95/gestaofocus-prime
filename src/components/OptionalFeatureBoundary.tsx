import { Component, type ErrorInfo, type ReactNode } from "react";

interface OptionalFeatureBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  featureName?: string;
}

interface OptionalFeatureBoundaryState {
  hasError: boolean;
}

export default class OptionalFeatureBoundary extends Component<
  OptionalFeatureBoundaryProps,
  OptionalFeatureBoundaryState
> {
  state: OptionalFeatureBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(
      `[OptionalFeatureBoundary] Failed to load ${this.props.featureName || "optional feature"}`,
      error,
      info,
    );
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }

    return this.props.children;
  }
}