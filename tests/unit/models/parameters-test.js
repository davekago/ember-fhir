import { moduleForModel, test } from 'ember-qunit';

moduleForModel('parameters', 'Unit | Model | Parameters', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:parameters-parameter'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});