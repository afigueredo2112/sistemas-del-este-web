export default function Indicator({ x, y, label, value, icon: Icon, side = 'right', tone = 'green', delay = 0 }) {
  return (
    <span
      className={`ind ind-${side} ind-${tone}`}
      style={{ left: `${x}%`, top: `${y}%`, '--d': `${delay}ms` }}
    >
      <span className="ind-dot" aria-hidden="true" />
      <span className="ind-card">
        {Icon ? <Icon className="ind-icon" aria-hidden="true" strokeWidth={1.75} /> : null}
        <span className="ind-label">{label}</span>
        <b className="ind-value">{value}</b>
      </span>
    </span>
  );
}

export function IndicatorLines({ points, hub, tone = 'green' }) {
  return (
    <svg className={`ind-lines ind-lines-${tone}`} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      {points.map(([x, y]) => (
        <line key={`${x}-${y}`} x1={x} y1={y} x2={hub[0]} y2={hub[1]} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}
