import { moduleForModel, test } from 'ember-qunit';

moduleForModel('episode-of-care-diagnosis', 'Unit | Serializer | EpisodeOfCare_Diagnosis', {
  needs: [
    'serializer:episode-of-care-diagnosis',
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