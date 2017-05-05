import { moduleForModel, test } from 'ember-qunit';

moduleForModel('practitioner', 'Unit | Model | Practitioner', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:human-name',
    'model:contact-point',
    'model:address',
    'model:attachment',
    'model:practitioner-qualification',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});