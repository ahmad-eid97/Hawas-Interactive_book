//== Components
import Item from './Item';
//== Styles
import styles from './multipleChoose.module.scss';

type Props = {
  groupQuestion: any;
  attemptId: number;
  userRole: string;
}

const MultipleChoose = ({ groupQuestion, attemptId, userRole }: Props) => {
  return (
    <div className={styles.multipleChoose}>
      <div className={styles.itemsWrapper}>
        {groupQuestion?.children ? groupQuestion?.children?.map((item: any, idx: number) => (
          <Item key={idx} idx={idx} item={item} attemptId={attemptId} userRole={userRole} />
        )) : null}
      </div>
    </div>
  )
}

export default MultipleChoose;