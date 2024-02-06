import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>Upload stats</h2>}
      <ul className={css['stat-list']}>
        {stats.map(item => (
          <li key={item.id} className={css.item}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
