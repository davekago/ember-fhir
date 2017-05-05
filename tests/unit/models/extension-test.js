import { moduleForModel, test } from 'ember-qunit';

moduleForModel('extension', 'Unit | Model | Extension', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:element',
    'model:backbone-element',
    'model:annotation',
    'model:attachment',
    'model:identifier',
    'model:codeable-concept',
    'model:coding',
    'model:quantity',
    'model:duration',
    'model:distance',
    'model:count',
    'model:money',
    'model:age',
    'model:range',
    'model:period',
    'model:ratio',
    'model:reference',
    'model:sampled-data',
    'model:signature',
    'model:human-name',
    'model:address',
    'model:contact-point',
    'model:timing',
    'model:element-definition',
    'model:contact-detail',
    'model:contributor',
    'model:dosage',
    'model:related-artifact',
    'model:usage-context',
    'model:data-requirement',
    'model:parameter-definition',
    'model:trigger-definition'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});