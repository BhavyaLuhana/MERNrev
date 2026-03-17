1. Components: React components are the fundamental building blocks of React applications, serving as independent, reusable pieces of code that define a specific part of the user interface (UI). 

2. Props: When we have to share the data between the components, we use props, they are like function parameters of the component.

for example: In UserCard.jsx component, we can pass name variable as the parameter in the arrow function, and we can pass the name of the user in the parent component

UserCard = (props) => { <p>user name is {props.name}</p> } and in the app.jsx we can use it like this <UserCard name="Radha Krishna"/>


3. JSX: JSX is javascript xml, in this file we can use the functionalities of both html and js.

