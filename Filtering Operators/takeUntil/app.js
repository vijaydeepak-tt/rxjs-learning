//emit value every 1s
const source = Rx.Observable.interval(1000);
//after 5 seconds, emit value
const timer = Rx.Observable.timer(5000);
//when timer emits after 5s, complete source
const example = source.takeUntil(timer);
//output: 0,1,2,3
const subscribe = example.subscribe(val => console.log(val));
