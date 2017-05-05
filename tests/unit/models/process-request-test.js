import { moduleForModel, test } from 'ember-qunit';

moduleForModel('process-request', 'Unit | Model | ProcessRequest', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:process-request-item',
    'model:period'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});