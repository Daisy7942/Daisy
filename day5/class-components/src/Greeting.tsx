import { Console } from "console";
import React from "react";

interface GreetingProps {
  name?: string; //? 뜻 : null도 허용한다.
}

interface GreetingState {
  massage: string;
}

export default class Greeting extends React.Component<
  GreetingProps,
  GreetingState
> {
  constructor(props: GreetingProps) {
    super(props);
    this.state = {
      massage: `Hello from, ${props.name}`,
    };
  }
  static getDerivedStateFromProps(props: Greeting, state: GreetingState) {
    console.log(props, state);
    // if (props.name && props.name !== state.massage) {
    //   const newState = { ...state };
    //   newState.massage = Greeting.getNewMessage(pros.name);
    //   return newState;
    // }
    return state;
  }
  static getNewMessage(name: any): string {
    return `Hello from, ${name}`;
  }
  render() {
    console.log("rendering Greeting");
    if (!this.props.name) {
      return <div>no name given</div>;
    }
    return <div>{this.state.massage}</div>;
  }
}
