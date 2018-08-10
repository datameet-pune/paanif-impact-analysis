import { combineReducers } from 'redux';
import WCEditionReducer from './reducer_wcEdition';
import DistrictReducer from './reducer_district';
import TehsilReducer from './reducer_tehsil';
import VillageReducer from './reducer_village';
import MapTypeReducer from './reducer_maptype';
import MapCenterReducer from './reducer_mapcenter';
import OpacityReducer from './reducer_opacity';
import WCEditionListReducer from './reducer_wcEditionsList';
import DistrictListReducer from './reducer_districtList';
import TehsilListReducer from './reducer_tehsilList';
import VillageListReducer from './reducer_villageList';
import MapTypeDataReducer from './reducer_mapTypeData';
import TimePeriodReducer from './reducer_timeperiod';

import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
  wcEdition: WCEditionReducer,
  district: DistrictReducer,
  tehsil: TehsilReducer,
  village: VillageReducer,
  mapType: MapTypeReducer,
  mapCenter: MapCenterReducer,
  wcEditionList: WCEditionListReducer,
  districtList: DistrictListReducer,
  tehsilList: TehsilListReducer,
  villageList: VillageListReducer,
  auth: AuthReducer,
  mapTypeData: MapTypeDataReducer,
  timePeriod: TimePeriodReducer,
  opacity: OpacityReducer
});

export default rootReducer;
