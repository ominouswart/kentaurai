import { Messages } from './Contexts/Messages';
import { Router } from './Contexts/Router';
import Msg from './Components/Common/Messages';
import './Style/main.scss';
import DeleteModal from './Components/Common/DeleteModal';
import { Modals } from './Contexts/Modals';
import { Loader } from './Contexts/Loader';
import LoaderContainer from './Components/Common/Loader';
import { Auth } from './Contexts/Auth';

export default function App() {
  return (
    <Auth>
      <Messages>
        <Loader>
          <Modals>
            <Msg />
            <DeleteModal />
            <LoaderContainer />
            <Router />
          </Modals>
        </Loader>
      </Messages>
    </Auth>
  );
}
