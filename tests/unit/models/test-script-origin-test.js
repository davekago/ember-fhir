import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-origin', 'Unit | Model | TestScript_Origin', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:coding'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});