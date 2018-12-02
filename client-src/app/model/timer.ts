import {timer, Subscription} from 'rxjs';


export class Timer {
    ellapsedTime: Date;
    private startTime: Date;
    private timerSub: Subscription;
    private firstStart: boolean = true;

    constructor() {
        this.ellapsedTime = new Date(0);
    }

    start() {
        if (this.firstStart) {
            // Starting from 0
            this.startTime = new Date();
            this.firstStart = false;
        } else {
            // Starting after pause

            // Current time minus ellapsedTime
            this.startTime = new Date(this.millisecDiff(new Date(), this.ellapsedTime));
        }

        this.timerSub = timer(0, 100).subscribe( _ => {
            let ellapsedMillisec: number = this.millisecDiff(new Date(), this.startTime);
            this.ellapsedTime = new Date(ellapsedMillisec);
        });
    }

    stop() {
        this.timerSub.unsubscribe();
        //this.ellapsedTime = new Date(0);
    }

    reset() {
        this.stop();
        this.ellapsedTime = new Date(0);
        this.firstStart = true;
    }

    private millisecDiff(end: Date, start: Date): number {
        return end.getTime() - start.getTime();
    }
}