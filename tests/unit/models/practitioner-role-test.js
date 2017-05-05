import { moduleForModel, test } from 'ember-qunit';

moduleForModel('practitioner-role', 'Unit | Model | PractitionerRole', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:period',
    'model:reference',
    'model:codeable-concept',
    'model:contact-point',
    'model:practitioner-role-available-time',
    'model:practitioner-role-not-available'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});