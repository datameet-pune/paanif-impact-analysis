import axios from 'axios';

export const UPDATE_DISTRICT = 'UPDATE_DISTRICT';

export const FETCH_WCEDITIONS = 'FETCH_WCEDITIONS';

export const FETCH_DISTRICTS = 'FETCH_DISTRICTS';
export const FETCH_TEHSILS = 'FETCH_TEHSILS';
export const FETCH_VILLAGES = 'FETCH_VILLAGES';

export const UPDATE_WCEDITION = 'UPDATE_WCEDITION';

export const UPDATE_TEHSIL = 'UPDATE_TEHSIL';
export const UPDATE_VILLAGE = 'UPDATE_VILLAGE';
export const UPDATE_MAP_TYPE = 'UPDATE_MAP_TYPE';
export const UPDATE_MAP_CENTER = 'UPDATE_MAP_CENTER';
export const UPDATE_PERIOD = 'UPDATE_PERIOD';
export const UPDATE_OPACITY = 'UPDATE_OPACITY';

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const FETCH_MAPTYPE_DATA = 'FETCH_MAPTYPE_DATA';

const AUTH_USER_URL = `/api/auth`;

const GET_WCEDITION_URL = `/api/wceditions`;

const GET_DISTRICT_URL = `/api/districts`;
const GET_TEHSIL_URL = `/api/tehsils`;
const GET_VILLAGE_URL = `/api/villages`;
const GET_MAPTYPE_DATA_URL = `/api/mapTypeData`;

export function fetchWCEditions() {
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  const request = axios({
    method: 'get',
    url: `${GET_WCEDITION_URL}`
  });

  return {
    type: FETCH_WCEDITIONS,
    payload: request
  };
}
export function fetchDistricts(wcEdition) {
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  const request = axios({
    method: 'get',
    url: `${GET_DISTRICT_URL}`,
    params: {
      wcEdition: wcEdition
    }
  });

  return {
    type: FETCH_DISTRICTS,
    payload: request
  };
}

export function fetchTehsils(wcEdition, district) {
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  const request = axios({
    method: 'get',
    url: `${GET_TEHSIL_URL}`,
    params: {
      wcEdition: wcEdition,
      district: district
    }
  });

  return {
    type: FETCH_TEHSILS,
    payload: request
  };
}

export function fetchVillages(wcEdition, district, tehsil) {
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  const request = axios({
    method: 'get',
    url: `${GET_VILLAGE_URL}`,
    params: {
      wcEdition: wcEdition,
      district: district,
      tehsil: tehsil
    }
  });

  return {
    type: FETCH_VILLAGES,
    payload: request
  };
}

export function authenticateUser(auth) {
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  const request = axios({
    method: 'post',
    url: `${AUTH_USER_URL}`,
    data: {
      user: auth.user,
      pass: auth.pass
    }
  });

  return {
    type: AUTHENTICATE_USER,
    payload: request
  };
}

export function fetchMapTypeData(vlgcd2011, mapType, timePeriod) {
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  const request = axios({
    method: 'get',
    url: `${GET_MAPTYPE_DATA_URL}`,
    params: {
      vlgcd2011: vlgcd2011,
      mapType: mapType,
      beforeYear: timePeriod.startYear,
      afterYear: timePeriod.endYear
    }
  });

  return {
    type: FETCH_MAPTYPE_DATA,
    payload: request
  };
}
export function updateWCEdition(data) {
  return {
    type: UPDATE_WCEDITION,
    payload: data
  };
}

export function updateDistrict(data) {
  return {
    type: UPDATE_DISTRICT,
    payload: data
  };
}

export function updateTehsil(data) {
  return {
    type: UPDATE_TEHSIL,
    payload: data
  };
}

export function updateVillage(data) {
  return {
    type: UPDATE_VILLAGE,
    payload: data
  };
}

export function updateMapType(data) {
  return {
    type: UPDATE_MAP_TYPE,
    payload: data
  };
}

export function updatePeriod(data) {
  return {
    type: UPDATE_PERIOD,
    payload: data
  };
}

export function updateMapCenter(data) {
  return {
    type: UPDATE_MAP_CENTER,
    payload: data
  };
}

export function updateOpacity(data) {
  return {
    type: UPDATE_OPACITY,
    payload: data
  };
}
