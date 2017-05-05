import { moduleForModel, test } from 'ember-qunit';

moduleForModel('request-group-related-action', 'Unit | Model | RequestGroup_RelatedAction', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:duration',
    'model:range'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});