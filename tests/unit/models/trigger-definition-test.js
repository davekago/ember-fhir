import { moduleForModel, test } from 'ember-qunit';

moduleForModel('trigger-definition', 'Unit | Model | TriggerDefinition', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:timing',
    'model:reference',
    'model:data-requirement'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});