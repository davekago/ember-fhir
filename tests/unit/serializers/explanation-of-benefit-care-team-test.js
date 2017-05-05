import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-care-team', 'Unit | Serializer | ExplanationOfBenefit_CareTeam', {
  needs: [
    'serializer:explanation-of-benefit-care-team',
    'model:reference',
    'model:codeable-concept',
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});