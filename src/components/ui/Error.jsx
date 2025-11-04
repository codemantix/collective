"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, XCircle, CheckCircle, Info, X } from "lucide-react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-slate-900">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-xl dark:bg-slate-800"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20"
            >
              <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
            </motion.div>

            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Oops! Something went wrong
            </h2>

            <p className="mb-6 text-gray-600 dark:text-gray-400">
              We're sorry, but something unexpected happened. Our team has been notified.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.reload()}
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
            >
              Reload Page
            </motion.button>

            {process.env.NODE_ENV === "development" && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer font-medium text-red-600 dark:text-red-400">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 overflow-auto rounded-lg bg-gray-100 p-4 text-xs dark:bg-slate-700">
                  {this.state.error && this.state.error.toString()}
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

const ErrorMessage = ({ type = "error", title, message, onClose, actions = [] }) => {
  const icons = {
    error: XCircle,
    success: CheckCircle,
    warning: AlertTriangle,
    info: Info,
  };

  const colors = {
    error: "red",
    success: "green",
    warning: "yellow",
    info: "blue",
  };

  const Icon = icons[type];
  const color = colors[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`rounded-lg border-l-4 p-4 bg-${color}-50 dark:bg-${color}-900/20 border-${color}-400`}
    >
      <div className="flex items-start">
        <Icon
          className={`h-5 w-5 text-${color}-600 dark:text-${color}-400 mt-0.5 mr-3 flex-shrink-0`}
        />

        <div className="min-w-0 flex-1">
          {title && (
            <h3 className={`text-sm font-medium text-${color}-800 dark:text-${color}-200 mb-1`}>
              {title}
            </h3>
          )}

          <p className={`text-sm text-${color}-700 dark:text-${color}-300`}>{message}</p>

          {actions.length > 0 && (
            <div className="mt-3 flex gap-2">
              {actions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.onClick}
                  className={`px-3 py-1.5 text-xs font-medium bg-${color}-100 dark:bg-${color}-800 text-${color}-800 dark:text-${color}-200 rounded-md hover:bg-${color}-200 dark:hover:bg-${color}-700 transition-colors`}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className={`text-${color}-400 dark:text-${color}-500 hover:text-${color}-600 dark:hover:text-${color}-300 ml-3 transition-colors`}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </motion.div>
  );
};

const NotFound = ({
  title = "Page Not Found",
  message = "The page you're looking for doesn't exist.",
  showHomeButton = true,
}) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-slate-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          className="mb-4 text-9xl font-bold text-gray-300 dark:text-gray-700"
        >
          404
        </motion.div>

        <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>

        <p className="mb-8 text-gray-600 dark:text-gray-400">{message}</p>

        {showHomeButton && (
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
          >
            Go Home
          </motion.a>
        )}
      </motion.div>
    </div>
  );
};

export { ErrorBoundary, ErrorMessage, NotFound };
