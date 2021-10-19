Creating a Reusable, Configurable Component
  Identify the JSX that is duplicated
  Determine the Purpose of that block of JSX
  Assign it a descriptive name based on what it does
  Create a new file with the same name as the component
  Create a new component in this new file, and paste the JSX into it.
  Make the new component configurable by using React's props system. 

# Component Hierarchy

App (Parent Component)
  Comment Detail  (Child Components)
  Comment Detail
  Comment Detail

# Props 

Passes Data from a Parent Component to a Child Component 
It's Goal is to Cutomize or Configure A Child Component


```js
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail   //this becomes a prop
          author="Sam"
          timeAgo="Today at 4:45PM"
          comment="Nice post"
          image={faker.image.avatar()}
        />
      </ApprovalCard>

```

# How React Used To Be

Function Components
  Can produce JSX to show content to the user
Class Components
  Can produce JSX to show content to the user
  Can use the Lifecycle Method system to run code at specific points in time
  Can use the "state" system to update content on the screen 


# Present

Function Components (Hooks System)
  Can produce JSX to show content to the user
  Can use Hooks to run code at specific points in time
  Can use Hooks to access state system and update content on the screen
Class Components
  Can produce JSX to show content to the user
  Can use the Lifecycle Method system to run code at specific points in time
  Can use the "state" system to update content on the screen 

Which One To Choose?
  Companies with established projects are using Class based components 
  Companies with newer projects may be using Class based components or Function based components

SeasonsApp Challenges
  Need to get the users physical location 
  Need to determine the current month
  Need to change text and styling based on Location + Month
  