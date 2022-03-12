import React from "react";

/**
 *
 * Loading component
 *
 * @example <Loading />
 * @returns {React.ReactNode}
 */
function Loading() {
  return (
    <div className="container border">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <div className="text-center text-primary">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
