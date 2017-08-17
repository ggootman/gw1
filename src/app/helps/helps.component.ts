import { Component, OnInit } from '@angular/core';
import { CharacterService } from "app/character.service";
import { Character } from "app/character";

@Component({
  selector: 'app-helps',
  templateUrl: './helps.component.html',
  styleUrls: ['./helps.component.css'],
  providers: [CharacterService]
})
export class HelpsComponent implements OnInit {
characters: Array<Character>;
  constructor(private characterService: CharacterService) {
 this.characters = this.characterService.getCharacters();
  }
  ngOnInit() {
  }

}
