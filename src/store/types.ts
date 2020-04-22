import { RouterState } from 'connected-react-router';
import { History } from 'history';
import PoorMansUnknown = History.PoorMansUnknown;


export type State = {
  router: RouterState<PoorMansUnknown>;
};
