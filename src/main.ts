/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />

// Some samples to try
let strings = ['Hello', '98052', '101'];
let validator = new Validation.LettersOnlyValidator();
strings.forEach(s => {
    console.log(`${s} ${validator.isAcceptable(s)? 'matches' : 'not matches'}`);
});