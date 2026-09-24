import { ReacttourPreviewProps } from "../typings/ReacttourProps";

export type Platform = "web" | "desktop";

export type Properties = PropertyGroup[];

type PropertyGroup = {
    caption: string;
    propertyGroups?: PropertyGroup[];
    properties?: Property[];
};

type Property = {
    key: string;
    caption: string;
    description?: string;
    objectHeaders?: string[]; // used for customizing object grids
    objects?: ObjectProperties[];
    properties?: Properties[];
};

type ObjectProperties = {
    properties: PropertyGroup[];
    captions?: string[]; // used for customizing object grids
};

export function getProperties(
    _values: ReacttourPreviewProps,
    defaultProperties: Properties /* , target: Platform*/
): Properties {
    // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.
    return defaultProperties;
}
