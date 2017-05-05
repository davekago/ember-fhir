import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-fixture', 'Unit | Model | TestScript_Fixture', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});