/**
 * Created by Nicolas Zozol on 13/10/2017.
 */

import * as masala from './masala';
import Bundle from '../src/lib/index'

let {Stream, F, C}:masala.Bundle = Bundle;

let stream:masala.Stream<string> = Stream.ofString('abc');
let parser:masala.Parser<string> = C.char('a');
const parsing = parser.parse(stream);
const x  = ['a', 'b', 'c'] === parsing.value; //compiling, types are almost OK






