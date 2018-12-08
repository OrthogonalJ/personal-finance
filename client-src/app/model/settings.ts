import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Settings {
    numQuestions: number = 10;
    showTimer: boolean = true;

    private constructor() {}
}
