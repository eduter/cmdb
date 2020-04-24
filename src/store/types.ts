import { RouterState } from 'connected-react-router';
import { History } from 'history';
import { FilterState } from './ducks/filter/types';
import PoorMansUnknown = History.PoorMansUnknown;


export interface RootState {
  router: RouterState<PoorMansUnknown>;
  filter: FilterState;
}
