//== Components
import Item from './Item';
//== Styles
import styles from './singleChoose.module.scss';

interface Item {
  title: string;
  answers: any[];
  correct: string;
}

type Props = {
  groupQuestion: any;
  attemptId: number;
  userRole: string;
}

const SingleChoose = ({ groupQuestion, attemptId, userRole }: Props) => {
  return (
    <div className={styles.chooseLetter}>
      <div className={styles.itemsWrapper}>
        {groupQuestion?.children?.map((item: Item, idx: number) => (
          <Item key={idx} item={item} attemptId={attemptId} userRole={userRole} />
        ))}
      </div>
    </div>
  )
}

export default SingleChoose;