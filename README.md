## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

## HTML Setup
input
- Why? to get whatever the user typed
- How? `const whatTheUserTyped = inputEl.value`
button
- Why? to trigger the event (tells us WHEN to act)
- How? `buttonEl.addEventListener('click', () => {})`
some div
- Why? to put the whatever the user typed where you want it
- How? `nameEl.textContent = 'my new string'`

## Event
on click, the the div now shows whatever the user typed
- `buttonEl.addEventListener('click', () => {})`
- `const whatTheUserTyped = inputEl.value`
- `nameEl.textContent = 'my new string'`
1) we need to add an event listener to the button
2) on click, we need to get what the user typed3
3) and then take what the user typed and inject it into the textConent of our div
