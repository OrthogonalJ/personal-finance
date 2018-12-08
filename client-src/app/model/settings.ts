import { Injectable } from '@angular/core';

/**
 * Singleton model class
 */
@Injectable({
    providedIn: 'root'
})
export class Settings {
    numQuestions: number = 10;
    showTimer: boolean = true;

    private constructor() {}
}
