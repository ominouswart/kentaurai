import './app.scss';
import { Data } from './Contexts/DataContext';
import CreateButton from './Components/CreateButton';
import Modals from './Components/Modals';
import List from './Components/List';
 
export default function App() {
  return (
    <Data>
      <div className="container">
        <div className="row">
          <div className="col">
            <CreateButton />
          </div>
        </div>
        <div className="row">
          <div className="col">
              <List />
          </div>
        </div>
      </div>
      <Modals />
    </Data>
  );
}
 