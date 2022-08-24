// call stack
console.log(1);
setTimeout(() => {
    console.log(2);
}, 2000);
console.log(3);

/* ========== STEP 1 =========== */

// ↓CALL STACK↓
console.log(1);
// ↑CALL STACK↑

// ↓WEB API↓

// ↑WEB API↑

// ↓CALLBACK QUEUE↓
// ↑CALLBACK QUEUE↑

// ↓EVENT LOOP↓
// ↑EVENT LOOP↑

/* ========== STEP 2 =========== 
* Note: console.log(1) is executed
*/ 

// ↓CALL STACK↓
setTimeout(() => {
    console.log(2);
}, 2000);
// ↑CALL STACK↑

// ↓WEB API↓

// ↑WEB API↑

// ↓CALLBACK QUEUE↓
// ↑CALLBACK QUEUE↑

// ↓EVENT LOOP↓
// ↑EVENT LOOP↑

/* ========== STEP 3 =========== 
* Note: Web API starts the timer, call stack is empty again
*/ 

// ↓CALL STACK↓
// ↑CALL STACK↑

// ↓WEB API↓
setTimeout(), 2000
// ↑WEB API↑

// ↓CALLBACK QUEUE↓
// ↑CALLBACK QUEUE↑

// ↓EVENT LOOP↓
// ↑EVENT LOOP↑

/* ========== STEP 4 =========== 
* Note: console.log(3) comes in the callstack
*/ 

// ↓CALL STACK↓
console.log(3)
// ↑CALL STACK↑

// ↓WEB API↓
setTimeout(), 2000
// ↑WEB API↑

// ↓CALLBACK QUEUE↓
// ↑CALLBACK QUEUE↑

// ↓EVENT LOOP↓
// ↑EVENT LOOP↑

/* ========== STEP 5 =========== 
* Note: console.log(3) is executed
*/ 

// ↓CALL STACK↓
// ↑CALL STACK↑

// ↓WEB API↓
setTimeout(), 2000
// ↑WEB API↑

// ↓CALLBACK QUEUE↓
// ↑CALLBACK QUEUE↑

// ↓EVENT LOOP↓
// ↑EVENT LOOP↑

/* ========== STEP 6 =========== 
* Note: timer is up, call back function put in the queue
*/ 

// ↓CALL STACK↓
// ↑CALL STACK↑

// ↓WEB API↓
// ↑WEB API↑

// ↓CALLBACK QUEUE↓
callback()
// ↑CALLBACK QUEUE↑

// ↓EVENT LOOP↓
// ↑EVENT LOOP↑

/* ========== STEP 6 =========== 
* Note: since the call stack is empty, the event loop picks
* up the callback function and put it into the call stack
* hence console.log(2) is executed~
*/ 

// ↓CALL STACK↓
console.log(2);
callback();
// ↑CALL STACK↑

// ↓WEB API↓
// ↑WEB API↑

// ↓CALLBACK QUEUE↓
// ↑CALLBACK QUEUE↑

// ↓EVENT LOOP↓
// ↑EVENT LOOP↑