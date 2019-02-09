class Clock {
  constructor() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    // debugger
    // Clock.printTime();
    this.printTime();
    window.setInterval(this._tick.bind(this), 1000);

    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  
  }

  // static printTime() {
  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    // debugger
    // console.log(`${hours}:${minutes}:${seconds}`);
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // debugger
    this.seconds++;

    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
    }

    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours++;
    }

    if (this.hours === 24) {
      this.hours = 0;
    }

    // Clock.printTime();
    this.printTime();
  }
}

let clock = new Clock();

