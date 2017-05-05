import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-metadata', 'Unit | Model | TestScript_Metadata', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:test-script-link',
    'model:test-script-capability'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});