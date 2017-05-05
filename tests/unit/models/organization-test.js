import { moduleForModel, test } from 'ember-qunit';

moduleForModel('organization', 'Unit | Model | Organization', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:contact-point',
    'model:address',
    'model:reference',
    'model:organization-contact'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});