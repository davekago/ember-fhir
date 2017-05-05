import { moduleForModel, test } from 'ember-qunit';

moduleForModel('provenance-entity', 'Unit | Model | Provenance_Entity', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:identifier',
    'model:provenance-agent'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});