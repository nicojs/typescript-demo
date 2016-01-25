import {LettersOnlyValidator} from './LettersOnlyValidator';

// Some samples to try
let strings = ['Hello', '98052', '101'];
let validator = new LettersOnlyValidator();
strings.forEach(s => {
    console.log(`${s} ${validator.isAcceptable(s)? 'matches' : 'not matches'}`);
});