import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1000 1000"
        xmlSpace="preserve"
        className="text-blue-500 w-24 h-24"
      >
        <style>
          {`.st3067 {
            fill: none;
            stroke: currentColor;
            stroke-width: 4pt;
            stroke-miterlimit: 10;
          }

          .st3067--transparent {
            stroke: rgba(255, 255, 255, 0);
          }

          .st3067--xlarge {
            stroke-linecap: square;
            stroke-dasharray: 2000, 513;
            stroke-width: 20;
          }

          .st3067--large {
            stroke-linecap: square;
            stroke-dasharray: 1500, 1013;
            stroke-width: 20;
          }

          .st3067--medium {
            stroke-linecap: square;
            stroke-dasharray: 1000, 1513;
            stroke-width: 20;
          }

          .st3067--small {
            stroke-linecap: square;
            stroke-dasharray: 500, 2013;
            stroke-width: 20;
          }

          .st3067--xsmall {
            stroke-linecap: square;
            stroke-dasharray: 100, 2413;
            stroke-width: 20;
          }

          .st3067--three {
            stroke-linecap: square;
            stroke-dasharray: 320, 320;
            stroke-width: 20;
          }`}
        </style>
        {/* Ring 5 */}
        <circle className="st3067" cx="500" cy="500" r="160" />
        <circle
          className="st3067 st3067--small"
          cx="500"
          cy="500"
          r="160"
          transform="rotate(0 500 500)"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 500 500"
            to="-360 500 500"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>
        {/* Ring 4 */}
        <circle className="st3067 st3067--transparent" cx="500" cy="500" r="240" />
        <circle
          className="st3067 st3067--medium"
          cx="500"
          cy="500"
          r="240"
          transform="rotate(0 500 500)"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 500 500"
            to="-360 500 500"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        {/* Ring 3 */}
        <circle className="st3067" cx="500" cy="500" r="320" />
        <circle
          className="st3067 st3067--three"
          cx="500"
          cy="500"
          r="320"
          transform="rotate(0 500 500)"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 500 500"
            to="-360 500 500"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        {/* Ring 2 */}
        <circle className="st3067" cx="500" cy="500" r="400" />
        <circle
          className="st3067 st3067--large"
          cx="500"
          cy="500"
          r="400"
          transform="rotate(0 500 500)"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 500 500"
            to="-360 500 500"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>
        {/* Ring 1 */}
        <circle className="st3067" cx="500" cy="500" r="480" />
        <circle
          className="st3067 st3067--xlarge"
          cx="500"
          cy="500"
          r="480"
          transform="rotate(0 500 500)"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 500 500"
            to="-360 500 500"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default LoadingSpinner;
