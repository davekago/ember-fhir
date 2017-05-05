import { moduleForModel, test } from 'ember-qunit';

moduleForModel('graph-definition', 'Unit | Model | GraphDefinition', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:graph-definition-link'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});