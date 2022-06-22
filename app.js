// WIGGLE
// We always just
// Grab DOM elements
// with GetElementById
// addEventListener

const inputEl = document.getElementById('my-input');
const buttonEl = document.getElementById('my-button');
const nameEl = document.getElementById('my-div');

buttonEl.addEventListener('click', () => {
    // on click, the the div now shows whatever the user typed
    // - `buttonEl.addEventListener('click', () => {})`
    // - `const whatTheUserTyped = inputEl.value`
    // - `nameEl.textContent = 'my new string'`
    // 2) on click, we need to get what the user typed
    const whatTheUserTyped = inputEl.value;

    // 3) and then take what the user typed and inject it into the textConent of our div
    nameEl.textContent = whatTheUserTyped;
});

// computers cost fractions of a penny to work for an hour
// programmers cost $50 an hour to work for one hour

// therefore, make your code readable to humans
// and you will save money for your company