import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-ifyvami-тип-т-п-l');
  this.route('i-i-s-ifyvami-тип-т-п-e',
  { path: 'i-i-s-ifyvami-тип-т-п-e/:id' });
  this.route('i-i-s-ifyvami-тип-т-п-e.new',
  { path: 'i-i-s-ifyvami-тип-т-п-e/new' });
  this.route('i-i-s-ifyvami-транспсрд-l');
  this.route('i-i-s-ifyvami-транспсрд-e',
  { path: 'i-i-s-ifyvami-транспсрд-e/:id' });
  this.route('i-i-s-ifyvami-транспсрд-e.new',
  { path: 'i-i-s-ifyvami-транспсрд-e/new' });
});

export default Router;
