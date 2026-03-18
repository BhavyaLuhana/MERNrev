1. Components: React components are the fundamental building blocks of React applications, serving as independent, reusable pieces of code that define a specific part of the user interface (UI). 

2. Props: When we have to share the data between the components, we use props, they are like function parameters of the component.

for example: In UserCard.jsx component, we can pass name variable as the parameter in the arrow function, and we can pass the name of the user in the parent component

UserCard = (props) => { <p>user name is {props.name}</p> } and in the app.jsx we can use it like this <UserCard name="Radha Krishna"/>

3. Props Passing(parent - child relationship): Props can be passing from one components to another, the components sending the data is called parent and the one which is recieving the data is called child component. (We can also pass function as the props)


4. JSX: JSX is javascript xml, in this file we can use the functionalities of both html and js.

5. Hooks: 

6. useState: It takes two values first is the variable that represents the state and the other is the state function.
            The state functions sets the value like this: setSomething(nextState);

7. State Lifting(Interview heavy topic): It is the process of moving state from a child component to the nearest common parent so multiple components can share and stay in sync with that data.

8. Conditional Rendering: It mean showing componenets to the user, in certain conditions. For example, if user is logged out we show login button and if he is logged in then we show logout button

            1. If-else
            2. Ternary operator: used mostly
            3. Logical operator
            4. Early return