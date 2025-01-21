export default function Spinner() {
  return (
    <div className="spinner">
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="208" height="208">
        <g>
          <circle strokeDasharray="103.67255756846316 36.55751918948772" r="22" strokeWidth="3" stroke="#9f0013" fill="none" cy="50" cx="50">
            <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="1.0309278350515465s" repeatCount="indefinite" type="rotate" attributeName="transform">
            </animateTransform>
          </circle>
          <g>
          </g></g>
      </svg>
    </div>
  )
}