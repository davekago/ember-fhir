import { moduleForModel, test } from 'ember-qunit';

moduleForModel('immunization', 'Unit | Model | Immunization', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:quantity',
    'model:immunization-practitioner',
    'model:annotation',
    'model:immunization-explanation',
    'model:immunization-reaction',
    'model:immunization-vaccination-protocol'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});