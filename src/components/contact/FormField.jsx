/** Label + input/textarea + inline error, matching the original form markup. */
export default function FormField({ id, label, error, multiline = false, ...inputProps }) {
  const Control = multiline ? "textarea" : "input";
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <Control id={id} name={id} aria-invalid={Boolean(error)} aria-describedby={`${id}-error`} {...inputProps} />
      <div className="field-error" id={`${id}-error`}>{error}</div>
    </div>
  );
}
