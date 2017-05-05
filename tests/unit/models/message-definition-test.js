import { moduleForModel, test } from 'ember-qunit';

moduleForModel('message-definition', 'Unit | Model | MessageDefinition', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:reference',
    'model:coding',
    'model:message-definition-focus',
    'model:message-definition-allowed-response',
    'model:message-definition-focu'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});