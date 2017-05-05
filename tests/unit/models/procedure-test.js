import { moduleForModel, test } from 'ember-qunit';

moduleForModel('procedure', 'Unit | Model | Procedure', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:procedure-performer',
    'model:annotation',
    'model:procedure-focal-device'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});