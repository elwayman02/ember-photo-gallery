import Service from '@ember/service';
import { createApi } from 'unsplash-js';
import { tracked } from '@glimmer/tracking';

const DEFAULT_PHOTOS_LIST_OPTIONS = {
  page: 1,
  perPage: 30,
  orderBy: 'latest',
};

const DEFAULT_PHOTOS_RANDOM_OPTIONS = {
  count: 30,
};

export default class UnsplashService extends Service {
  @tracked unsplash;

  constructor() {
    super(...arguments);

    this.unsplash = createApi({
      accessKey: 'PDDkBsP1QeYTG3enDn_vUI5wjRd5Zu7jlq7siePSGNo',
    });
  }

  listPhotos(options) {
    return this.unsplash.photos
      .list({ ...DEFAULT_PHOTOS_LIST_OPTIONS, ...options })
      .then(function (photos) {
        return photos.response.results;
      });
  }

  randomPhotos(options) {
    return this.unsplash.photos
      .getRandom({ ...DEFAULT_PHOTOS_RANDOM_OPTIONS, ...options })
      .then(function (photos) {
        return photos.response;
      });
  }
}
