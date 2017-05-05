import DS from 'ember-data';

const { hasMany } = DS;

export default DS.Model.extend({
 extension: hasMany('extension', { async: true, inverse: null })
});