import React from 'react';

interface AlertProps {
  type: 'success' | 'warning' | 'error';
  message?: string;
}

function AlertComponent({ type, message }: AlertProps) {
  return (
    <div className="fixed bottom-120 left-1/2 transform -translate-x-1/2 z-9999">
      {type === 'success' && (
        <div className="flex items-center gap-4 bg-white border-[#00bfff] border-2 py-6 px-10 rounded-md shadow-lg dark:bg-black2">
          <svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            className="feather feather-check-circle"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#00bfff" />
            <polyline points="22 4 12 14.01 9 11.01" stroke="#00bfff" />
          </svg>
          <p className="text-sm leading-6 dark:text-black9">{message}</p>
        </div>
      )}

      {type === 'warning' && (
        <div className="flex items-center gap-4 bg-white border-[#92400E] border-2 py-6 px-10 rounded-md shadow-lg dark:bg-black2">
          <svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            className="feather feather-alert-triangle"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="#92400E" />
            <line x1="12" y1="9" x2="12" y2="13" stroke="#92400E" />
            <line x1="12" y1="17" x2="12.01" y2="17" stroke="#92400E" />
          </svg>
          <p className="text-sm leading-6 dark:text-black9">{message}</p>
        </div>
      )}

      {type === 'error' && (
        <div className="flex items-center gap-4 bg-white border-[#991B1B] border-2 py-6 px-10 rounded-md shadow-lg dark:bg-black2">
          <svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            className="feather feather-x-circle"
          >
            <circle cx="12" cy="12" r="10" stroke="#991B1B" />
            <line x1="15" y1="9" x2="9" y2="15" stroke="#991B1B" />
            <line x1="9" y1="9" x2="15" y2="15" stroke="#991B1B" />
          </svg>
          <p className="text-sm leading-6 dark:text-black9">{message}</p>
        </div>
      )}
    </div>
  );
}

export default AlertComponent;
