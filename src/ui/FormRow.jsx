import styles from './FormRow.module.css';

function FormRow({ label, children }) {
  return (
    <div className={styles.formRow}>
      <label className={styles.label}>{label}</label>
      {children}
    </div>
  );
}

export default FormRow;
