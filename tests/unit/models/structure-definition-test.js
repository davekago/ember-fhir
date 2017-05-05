import { moduleForModel, test } from 'ember-qunit';

moduleForModel('structure-definition', 'Unit | Model | StructureDefinition', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:coding',
    'model:structure-definition-mapping',
    'model:structure-definition-snapshot',
    'model:structure-definition-differential'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});