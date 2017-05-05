import { moduleForModel, test } from 'ember-qunit';

moduleForModel('organization-contact', 'Unit | Model | Organization_Contact', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:human-name',
    'model:contact-point',
    'model:address'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});