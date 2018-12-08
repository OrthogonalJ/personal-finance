import { Component, OnInit } from '@angular/core';
import {Settings} from '../../model/settings';

@Component({
  selector: 'app-quiz-launcher',
  templateUrl: './quiz-launcher.component.html',
  styleUrls: ['./quiz-launcher.component.css']
})
export class QuizLauncherComponent implements OnInit {

  constructor(public settings: Settings) {}

  ngOnInit() {}

  onStartBtnClick() {
    console.log(this.settings);
  }
}
