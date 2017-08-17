 
 import { Injectable } from '@angular/core';
  import { Character } from './character';

@Injectable()
export class CharacterService 
{

getCharacters() {
    return [
        new Character(1,'Han Solo','light'),
          new Character(2,'Han 2','light'),
            new Character(3,'Han 3','light'),
             new Character(2,'Han 4','light')
    ];
}
}