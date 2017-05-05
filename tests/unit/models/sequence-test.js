import { moduleForModel, test } from 'ember-qunit';

moduleForModel('sequence', 'Unit | Model | Sequence', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:quantity',
    'model:sequence-reference-seq',
    'model:sequence-variant',
    'model:sequence-quality',
    'model:sequence-repository'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});