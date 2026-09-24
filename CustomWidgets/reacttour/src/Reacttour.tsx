import { Component, ReactNode, createElement } from "react";
import { EditableValue } from "mendix";
import { ReactourStep } from "reactour";

import { ReacttourContainerProps } from "../typings/ReacttourProps";
import { ReactTourInput } from "./components/ReacttourInput";
import "./ui/Reacttour.css";

const DEFAULT_ACCENT_COLOR = "#007aff";

function boolValue(attribute: EditableValue<boolean> | undefined, fallback: boolean): boolean {
    const value = attribute?.value;
    return typeof value === "boolean" ? value : fallback;
}

function parseSteps(raw: string | undefined): ReactourStep[] {
    if (raw === undefined || raw.trim() === "") {
        return [];
    }
    try {
        const parsed: unknown = JSON.parse(raw);
        if (!Array.isArray(parsed)) {
            console.error("Reacttour: the Steps value must be a JSON array of steps.");
            return [];
        }
        return parsed.filter(
            (step): step is ReactourStep => step !== null && typeof step === "object" && !Array.isArray(step)
        );
    } catch (e) {
        console.error("Reacttour: the Steps value is not valid JSON.", e);
        return [];
    }
}

export class Reacttour extends Component<ReacttourContainerProps> {
    private lastRawSteps: string | undefined = undefined;
    private lastSteps: ReactourStep[] = [];

    private getSteps(): ReactourStep[] {
        const raw = this.props.stepsKey.value ?? undefined;
        if (raw !== this.lastRawSteps) {
            this.lastRawSteps = raw;
            this.lastSteps = parseSteps(raw);
        }
        return this.lastSteps;
    }

    private getStartAt(stepCount: number): number {
        const value = this.props.startAtKey?.value;
        let startAt = value !== undefined && value !== null ? Math.floor(Number(value)) : 0;
        if (!Number.isFinite(startAt) || startAt < 0) {
            startAt = 0;
        }
        if (stepCount > 0 && startAt > stepCount - 1) {
            startAt = stepCount - 1;
        }
        return startAt;
    }

    private onClose = (): void => {
        const startTour = this.props.startTourKey;
        if (startTour && startTour.status === "available" && !startTour.readOnly && startTour.value === true) {
            startTour.setValue(false);
        }
    };

    render(): ReactNode {
        const parsedArray = this.getSteps();
        const startTourValue = this.props.startTourKey?.value === true;
        const accentColorValue = this.props.accentcolorKey?.value || DEFAULT_ACCENT_COLOR;

        return (
            <ReactTourInput
                startTour={startTourValue}
                arrayOfObjectsValue={parsedArray}
                accentColor={accentColorValue}
                closeWithMask={boolValue(this.props.closeWithMaskKey, true)}
                disabledotsnavigation={boolValue(this.props.disabledotsnavigationKey, false)}
                disablekeyboardnavigation={boolValue(this.props.disablekeyboardnavigationKey, false)}
                showButtons={boolValue(this.props.showButtonsKey, true)}
                showCloseButtons={boolValue(this.props.showCloseButtonsKey, true)}
                showNavigation={boolValue(this.props.showNavigationKey, true)}
                showNavigationNumber={boolValue(this.props.showNavigationNumberKey, true)}
                showNumber={boolValue(this.props.showNumberKey, true)}
                startAt={this.getStartAt(parsedArray.length)}
                disableFocusLock={boolValue(this.props.disableFocusLockKey, false)}
                onClose={this.onClose}
            />
        );
    }
}
