import { Component, ReactNode, createElement } from "react";

import { ReacttourContainerProps } from "../typings/ReacttourProps";
import { ReactTourInput } from "./components/ReacttourInput";
import "./ui/Reacttour.css";

export class Reacttour extends Component<ReacttourContainerProps> {
   

    render(): ReactNode {
        let startTourValue = false;
        let parsedArray =null;
        if (this.props.stepsKey.value!=null) {
          startTourValue = true;
          parsedArray= JSON.parse(this.props.stepsKey.value || '');
        }
        startTourValue=this.props.startTourKey?.value || false
        let accentColorValue=this.props.accentcolorKey?.value || '#007aff'
        let closeWithMaskValue=this.props.closeWithMaskKey?.value || true;
        let disabledotsnavigationValue=this.props.disabledotsnavigationKey?.value || false;
        let disablekeyboardnavigationValue=this.props.disablekeyboardnavigationKey?.value || false;
        let showbuttonsValue=this.props.showButtonsKey?.value || true;
        let showclosebuttonValue=this.props.showCloseButtonsKey?.value || true;
        let showNavigationValue=this.props.showNavigationKey?.value || true;
        let showNavigationNumberValue=this.props.showNavigationNumberKey?.value || true;
        let showNumberValue=this.props.showNumberKey?.value || true;
        let startAtValue= 0;
        if (this.props.startAtKey?.value!=undefined){
          startAtValue=Number(this.props.startAtKey?.value);
        }
        let disableFocusLockValue=this.props.disableFocusLockKey?.value || false;
        
    
        return (
            <ReactTourInput
        startTour={startTourValue}
        arrayOfObjectsValue={parsedArray}
        accentColor={accentColorValue}
        closeWithMask={closeWithMaskValue}
        disabledotsnavigation={disabledotsnavigationValue}
        disablekeyboardnavigation={disablekeyboardnavigationValue}
        showButtons={showbuttonsValue}
        showCloseButtons={showclosebuttonValue}
        showNavigation={showNavigationValue}
        showNavigationNumber={showNavigationNumberValue}
        showNumber={showNumberValue}
        startAt={startAtValue}
        disableFocusLock={disableFocusLockValue}
      />
        );
    }

  
}
