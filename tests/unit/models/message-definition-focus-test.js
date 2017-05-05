import { moduleForModel, test } from 'ember-qunit';

moduleForModel('message-definition-focus', 'Unit | Model | MessageDefinition_Focus', {
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