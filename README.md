# animal-ids
Generate readable IDs from animal nouns and adjectives

## Use

```js
const idGen = require('animal-ids');

const id = idGen.generateID(); // firsthand_wary_group
const verySpecialID = idGen.generateID(10, '-'); //lumbering-colossal-utter-decisive-silly-sweet-pointless-outlandish-unlucky-basilisk
const { animals, adjectives} = idGen; // Returns you animal and adjective list that is used for generation
```

### generateID
Function that returns randomly generated ID. Takes 2 options: length(default is 3) and separator(default is _)

### animals
array that contains all animal nouns used for ID generation

### adjectives
array that contains all adjectives used for ID generation