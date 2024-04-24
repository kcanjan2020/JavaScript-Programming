//=> Alias==>उपनाम

/* import { name } from "./first.mjs";
import { name } from "./second.mjs";
console.log(name);

SyntaxError: Identifier 'name' has already been declared
 */

import { name as name1 } from "./first.mjs";
import { name as name2 } from "./second.mjs";
console.log(name1);
console.log(name2);
