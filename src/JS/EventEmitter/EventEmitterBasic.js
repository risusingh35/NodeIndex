console.log("---------EventEmitterBasic---------");

const EventEmitter=require('events')

const newEvent=new EventEmitter()
// Register a listener for the 'event' event
newEvent.on('event1',()=>{
    console.log('Event 1:An event occurred! ');
})
// newEvent.emit('event1')


// arguments to the event listeners when emitting events.
const newEventTwo=new EventEmitter()
 newEventTwo.on('event2',(fileName,lastName)=>{
    console.log({fileName,lastName});
 })
//  newEventTwo.emit('event2','RISU','Singh')

const newEventThree=new EventEmitter()

newEventThree.once('event3',()=>{
    console.log('event3:This will only be logged once.');
})
newEventThree.on('event3',()=>{
    console.log('Event 3:An event occurred! ');
})
const eventMaxCount=newEventThree.getMaxListeners('event')
console.log(eventMaxCount);
newEventThree.emit('event3')
newEventThree.emit('event3')
// newEventThree.addListener
// newEventThree.emit
// newEventThree.eventNames
// newEventThree.getMaxListeners
// newEventThree.listenerCount
// newEventThree.listeners
// newEventThree.off
// newEventThree.on
// newEventThree.once
// newEventThree.prependListener
// newEventThree.prependOnceListener
// newEventThree.rawListeners
// newEventThree.removeAllListeners
// newEventThree.removeListener
// newEventThree.setMaxListeners

const eventLogsPrinter=(eventName)=>{
console.log(eventName,':','An event occurred! ');
}






