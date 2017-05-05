import { moduleForModel, test } from 'ember-qunit';

moduleForModel('code-system-property-1', 'Unit | Model | CodeSystem_Property1', {
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