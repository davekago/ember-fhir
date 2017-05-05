import { moduleForModel, test } from 'ember-qunit';

moduleForModel('request-group', 'Unit | Model | RequestGroup', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:annotation',
    'model:request-group-action'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});