import Service from '@ember/service';
import Unsplash, { toJson } from "unsplash-js";
import { tracked } from '@glimmer/tracking';

export default class UnsplashService extends Service {
  @tracked unsplash;

  constructor() {
    super(...arguments);

    this.unsplash = new Unsplash({ accessKey: "PDDkBsP1QeYTG3enDn_vUI5wjRd5Zu7jlq7siePSGNo" });
  }

  listPhotos(page, perPage, orderBy) {
    return this.unsplash.photos.listPhotos(page || 1, perPage || 30, orderBy || "latest").then(toJson);
  }
}
