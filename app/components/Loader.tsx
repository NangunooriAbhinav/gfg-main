import styles from '@/styles/Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderBlock}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Loader;
