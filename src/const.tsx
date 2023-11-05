export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer',
  Favorites = '/favorites',
  NotFound = '/404'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const CitiesLocation = {
  Paris: {
    name: 'Paris',
  },
  Cologne: {
    name: 'Cologne',
  },
  Brussels: {
    name: 'Brussels',
  },
  Amsterdam: {
    name: 'Amsterdam',
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
      zoom: 12,
    }
  },
  Hamburg: {
    name: 'Hamburg',
  },
  Dusseldorf: {
    name: 'Dusseldorf',
  }
};

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 100;
