import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-operation', 'Unit | Model | TestScript_Operation', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:coding',
    'model:test-script-request-header'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});