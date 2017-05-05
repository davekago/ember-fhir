import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-request-header', 'Unit | Model | TestScript_RequestHeader', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});