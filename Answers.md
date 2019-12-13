1. What problem does the context API help solve?

Context Api helps solve the problem of prop drilling in medium size applications it lets you put your state on any component without the hassle of sending props a ton of times.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are the events that happen in the application .
The reducer is a pure function that takes the previous state and an action, and returns the next state. 
And the store is what holds the state in a application which makes it easier to manage.
The store is known as a single source of truth because it can not be reshaped we take out info from the store and still maintain a clean structure for the state of our app.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and component state is local it would probably be better to use component sate over app sate when a sub component needs just one thing of state that way your not loading all of the app state on a component that just needs one small thing of state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is a node package that turns our actions into  asynchronous and make API calls from our action creators.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I really like redux because it allows me to keep state in one place and it makes things more organized.
