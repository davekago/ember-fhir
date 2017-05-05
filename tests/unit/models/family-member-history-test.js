import { moduleForModel, test } from 'ember-qunit';

moduleForModel('family-member-history', 'Unit | Model | FamilyMemberHistory', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:age',
    'model:range',
    'model:annotation',
    'model:family-member-history-condition'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});