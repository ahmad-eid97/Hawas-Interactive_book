//== Components
import { NotFound as NotFoundComponent } from "@/components";

interface NotFoundProps { }

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <>
      <NotFoundComponent />
    </>
  );
}

export default NotFound;