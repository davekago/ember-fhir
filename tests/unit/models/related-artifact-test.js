import { moduleForModel, test } from 'ember-qunit';

moduleForModel('related-artifact', 'Unit | Model | RelatedArtifact', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:attachment',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});