import { Component, ReactNode, createElement } from "react";
import Tour, { ReactourStep } from "reactour";

export interface ReactTourProps {
    startTour: boolean;
    arrayOfObjectsValue: ReactourStep[];
    accentColor?: string;
    closeWithMask?: boolean;
    disabledotsnavigation?: boolean;
    disablekeyboardnavigation?: boolean;
    showButtons?: boolean;
    showCloseButtons?: boolean;
    showNavigation?: boolean;
    showNavigationNumber?: boolean;
    showNumber?: boolean;
    startAt?: number;
    disableFocusLock?: boolean;
    onClose?: () => void;
}

interface InputState {
    isTourVisible: boolean;
}

export class ReactTourInput extends Component<ReactTourProps, InputState> {
    readonly state: InputState = { isTourVisible: false };

    componentDidMount(): void {
        // Open only after the page has mounted, so the step targets exist in the DOM.
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({ isTourVisible: true });
    }

    componentDidUpdate(prevProps: ReactTourProps): void {
        // Allow the tour to be opened again after it was closed: when the start attribute
        // switches from false to true, make the tour visible again.
        if (!prevProps.startTour && this.props.startTour && !this.state.isTourVisible) {
            this.setState({ isTourVisible: true });
        }
    }

    render(): ReactNode {
        const steps = this.props.arrayOfObjectsValue;
        const isOpen = this.state.isTourVisible && this.props.startTour && steps.length > 0;
        return (
            <Tour
                steps={steps}
                isOpen={isOpen}
                accentColor={this.props.accentColor}
                closeWithMask={this.props.closeWithMask}
                disableDotsNavigation={this.props.disabledotsnavigation}
                disableKeyboardNavigation={this.props.disablekeyboardnavigation}
                showButtons={this.props.showButtons}
                showCloseButton={this.props.showCloseButtons}
                showNavigation={this.props.showNavigation}
                showNavigationNumber={this.props.showNavigationNumber}
                showNumber={this.props.showNumber}
                startAt={this.props.startAt}
                disableFocusLock={this.props.disableFocusLock}
                onRequestClose={this.closeTour}
            />
        );
    }

    closeTour = (): void => {
        this.setState({ isTourVisible: false });
        this.props.onClose?.();
    };
}
