import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr('string'),
  owner: attr('string'),
  city: attr('string'),
  type: attr('string'),
  image: attr('string'),
  bedrooms: attr('number'),
  description: attr('string'),
  address: attr('string')
});
