import { Component, ReactNode, createElement } from "react";
import Tour from 'reactour'

export interface ReactTourProps {  
 startTour:boolean
 arrayOfObjectsValue:any[]
 accentColor?:string
 closeWithMask?:boolean
 disabledotsnavigation?:boolean
 disablekeyboardnavigation?:boolean
 showButtons?:boolean
 showCloseButtons?:boolean
 showNavigation?:boolean
 showNavigationNumber?:boolean
 showNumber?:boolean
 startAt?:number
 disableFocusLock?:boolean
}

interface InputState {
  isTourVisible?: boolean;

}

export class ReactTourInput extends Component<ReactTourProps, InputState> {
  readonly state: InputState = { isTourVisible: false };
  componentDidMount(): void {
   
  this.setState({ isTourVisible: true });
  }
  
  render(): ReactNode {
    
    return (
      <Tour
      steps={this.props.arrayOfObjectsValue}
      isOpen={(this.state.isTourVisible && this.props.startTour) || false }
      accentColor={this.props.accentColor}
      closeWithMask={this.props.closeWithMask}
      disableDotsNavigation={this.props.disabledotsnavigation}
      disableKeyboardNavigation={this.props.disablekeyboardnavigation}
      showButtons={this.props.showButtons}
      showCloseButton={this.props.showCloseButtons}
      showNavigation={this.props.showNavigation}
      showNumber={this.props.showNumber}
      startAt={this.props.startAt}
      disableFocusLock={this.props.disableFocusLock}
      onRequestClose={this.closeTour}
    />

    );
  }
  closeTour = () => {
    this.setState({ isTourVisible: false });
  };
}