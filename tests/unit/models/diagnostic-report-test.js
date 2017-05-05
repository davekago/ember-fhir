import { moduleForModel, test } from 'ember-qunit';

moduleForModel('diagnostic-report', 'Unit | Model | DiagnosticReport', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:diagnostic-report-performer',
    'model:diagnostic-report-image',
    'model:attachment'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});