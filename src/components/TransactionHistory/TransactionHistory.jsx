import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={styles.tbody}>
          {items.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
