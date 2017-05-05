import { moduleForModel, test } from 'ember-qunit';

moduleForModel('composition', 'Unit | Model | Composition', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:composition-attester',
    'model:composition-relates-to',
    'model:composition-event',
    'model:composition-section'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});