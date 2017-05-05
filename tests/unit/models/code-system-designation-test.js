import { moduleForModel, test } from 'ember-qunit';

moduleForModel('code-system-designation', 'Unit | Model | CodeSystem_Designation', {
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