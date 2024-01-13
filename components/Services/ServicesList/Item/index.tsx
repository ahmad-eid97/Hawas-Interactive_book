"use client";
import { useRouter } from 'next/navigation';
//= Types
import { IService } from '@/types';
//== Styles
import styles from '../servicesList.module.scss';

interface ServiceProps {
  item: IService;
}

function Service({ item }: ServiceProps) {
  const router = useRouter();

  return (
    <div className={styles.servicesCard} onClick={() => router.push(`/services/${item.id}`)}>
      <div className={styles.icon}>
        <img src={item.image} alt="" />
      </div>
      <h3>{item.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
    </div>
  )
}

export default Service