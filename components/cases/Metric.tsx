import type { Metric as MetricData } from "../../data/caseStudies";
import "./Metric.css";

export function Metric({ value, label }: MetricData) {
  return (
    <div className="metric">
      <div className="k">{value}</div>
      <div className="v">{label}</div>
    </div>
  );
}
