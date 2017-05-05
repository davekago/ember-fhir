import { moduleForModel, test } from 'ember-qunit';

moduleForModel('communication-payload', 'Unit | Model | Communication_Payload', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:attachment',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});