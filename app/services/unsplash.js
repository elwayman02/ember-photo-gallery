import Service from '@ember/service';
import { createApi } from 'unsplash-js';
import { tracked } from '@glimmer/tracking';

export default class UnsplashService extends Service {
  @tracked unsplash;

  constructor() {
    super(...arguments);

    this.unsplash = createApi({
      accessKey: 'PDDkBsP1QeYTG3enDn_vUI5wjRd5Zu7jlq7siePSGNo',
    });
  }

  listPhotos(page, perPage, orderBy) {
    return this.unsplash.photos
      .list({
        page: page || 1,
        perPage: perPage || 30,
        orderBy: orderBy || 'latest',
      })
      .then(function (photos) {
        return photos.response.results;
      });
  }
}
