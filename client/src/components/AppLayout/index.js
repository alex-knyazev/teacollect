import Header from './Header';
import Notification from '@/components/Notification';

const AppLayout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Notification />
    </div>
  );
};

export default AppLayout;
