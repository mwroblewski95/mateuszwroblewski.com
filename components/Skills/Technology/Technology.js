import Image from 'next/image';
import styles from './Technology.module.css';
const Technology = ({ name, image }) => {
  return (
    <li className={styles.technology}>
      <figure>
        <Image src={image} alt={`${name} Logo`} width={150} height={150} />
        <figcaption className={styles.technologyName}>{name}</figcaption>
      </figure>
    </li>
  );
};

export default Technology;
