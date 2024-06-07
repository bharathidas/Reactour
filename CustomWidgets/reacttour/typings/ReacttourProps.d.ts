/**
 * This file was generated from Reacttour.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";
import { Big } from "big.js";

export interface ReacttourContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    stepsKey: EditableValue<string>;
    startTourKey: EditableValue<boolean>;
    accentcolorKey?: EditableValue<string>;
    closeWithMaskKey?: EditableValue<boolean>;
    disabledotsnavigationKey?: EditableValue<boolean>;
    disablekeyboardnavigationKey?: EditableValue<boolean>;
    showButtonsKey?: EditableValue<boolean>;
    showCloseButtonsKey?: EditableValue<boolean>;
    showNavigationKey?: EditableValue<boolean>;
    showNavigationNumberKey?: EditableValue<boolean>;
    showNumberKey?: EditableValue<boolean>;
    startAtKey?: EditableValue<Big>;
    disableFocusLockKey?: EditableValue<boolean>;
}

export interface ReacttourPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    stepsKey: string;
    startTourKey: string;
    accentcolorKey: string;
    closeWithMaskKey: string;
    disabledotsnavigationKey: string;
    disablekeyboardnavigationKey: string;
    showButtonsKey: string;
    showCloseButtonsKey: string;
    showNavigationKey: string;
    showNavigationNumberKey: string;
    showNumberKey: string;
    startAtKey: string;
    disableFocusLockKey: string;
}
