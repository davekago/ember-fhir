# Ember-fhir

Ember FHIR adapter designed for simple and direct interraction with FHIR servers straight from the Ember front end.

Includes models and serializers for all resources in FHIR DSTU3. For DSTU2 please see
[Ember-fhir-adapter](https://github.com/intervention-engine/ember-fhir-adapter)

## Installation
* `ember install ember-fhir`

This will add ember-fhir as a dependency in your package.json

## Reserved keywords

Due to some collision with ember reserved words, e.g data, type etc., the following elements are mapped to `element_`. Future versions of this addon may change this behavior.

| Element | Mapping |
| --- | --- |
| container | container_ |
| data | data_ |
| trigger | trigger_ |
| type | kype_ |

## Contributing

Feel free to fork this repository and issue PR's

## Resources

* [HL7 FHIR](http://hl7.org/fhir/)
* [FHIR DSTU3 Resources](http://hl7.org/fhir/resourcelist.html)
