import "./Status.css";

// Equivalente a .modstatus / .pulse-dot — dot + label, con pulse opcional para estado "activo".
interface StatusProps {
  label: string;
  variant: "on" | "beta";
  pulse?: boolean;
}

export function Status({ label, variant, pulse = variant === "on" }: StatusProps) {
  return (
    <span className={`modstatus ${variant}`}>
      {pulse ? <span className="pulse-dot" /> : null}
      {label}
    </span>
  );
}
