import { Messages } from './Contexts/Messages';
import { Router } from './Contexts/Router';
import Msg from './Components/Common/Messages';
import './Style/main.scss';
import DeleteModal from './Components/Common/DeleteModal';
import { Modals } from './Contexts/Modals';

export default function App() {
  return (
    <Messages>
      <Modals>
        <Msg />
        <DeleteModal />
        <Router />
      </Modals>
    </Messages>
  );
}
