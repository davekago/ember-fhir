import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-setup', 'Unit | Model | TestScript_Setup', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:test-script-action'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});