import React from "react";

function LoadingView() {
  return (
    <>
      <div className="d-flex justify-content-center w-100 p-5">
        <div className="text-center">
          <h1>Cargando...</h1>
          <p>Por favor, espera un momento.</p>
          <div className="loading-dots">
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </div>
        </div>
      </div>

      <style>{`
        .loading-dots {
          font-size: 2rem;
          display: flex;
          justify-content: center;
        }
        .dot {
          animation: blink 1.5s infinite;
        }
        .dot:nth-child(2) {
          animation-delay: 0.5s;
        }
        .dot:nth-child(3) {
          animation-delay: 1s;
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

export default LoadingView;
