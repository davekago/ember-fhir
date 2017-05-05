import { moduleForModel, test } from 'ember-qunit';

moduleForModel('family-member-history-condition', 'Unit | Model | FamilyMemberHistory_Condition', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:age',
    'model:range',
    'model:period',
    'model:annotation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});