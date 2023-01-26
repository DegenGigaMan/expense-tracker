import ExpenseItem from "./ExpenseItem";
import styles from './ExpensesList.module.css'

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className={styles['expenses-list__fallback']}>No expenses found.</h2>;
  }

  return (
    <ul className={styles["expenses-list"]}>
      {props.items.map((items) => (
        <ExpenseItem
          key={items.id}
          title={items.title}
          amount={items.amount}
          date={items.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
