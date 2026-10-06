import { ArrowDownRight, ArrowUpRight, Minus } from 'lucide-react';
import type { Metric } from '../types';

type MetricCardProps = {
  metric: Metric;
};

const toneIcon = {
  positive: ArrowUpRight,
  warning: ArrowDownRight,
  neutral: Minus,
};

export function MetricCard({ metric }: MetricCardProps) {
  const Icon = toneIcon[metric.tone];

  return (
    <article className={`metric-card ${metric.tone}`}>
      <span>{metric.label}</span>
      <strong>{metric.value}</strong>
      <small>
        <Icon size={15} />
        {metric.trend}
      </small>
    </article>
  );
}
