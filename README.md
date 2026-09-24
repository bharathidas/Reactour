# React Tour

## Version 2.1.0 for Mendix Studio Pro 10.24.17

React Tour 2.1.0 is the React Tour widget rebuilt and tested for **Mendix Studio Pro 10.24.17** (React client). It uses reactour 1.19.2.

### Download

- Widget: download `mendix.Reacttour.mpk` from the [Version2.1.0 release](https://github.com/bharathidas/Reactour/releases/tag/Version2.1.0) (the same file is in the root of this repository).
- Sample module: [ReactTourSample.mpk](https://github.com/bharathidas/Reactour/raw/main/ReactTourSample.mpk)

### What changed in 2.1.0

- Rebuilt with Mendix pluggable widgets tools 10.16.0 for Studio Pro 10.24.17. The package is much smaller (627 KB to 74 KB).
- **Breaking change - the Boolean settings now follow their attribute.** In 1.0.0 these six settings were always on, whatever the attribute value was: *Close With Mask, Show Buttons, Show Close Button, Show Navigation, Show Navigation Number, Show Number*. In 2.1.0 the attribute value is used. If your attribute is `false`, that control is now hidden (for example no close button or no dots). **Fix:** set the attribute to `true` (or clear the property so the default is used) if you want the control back.
- Show Navigation Number is now passed to the tour (it was ignored before).
- The tour can be opened again: when the user closes the tour, Start Tour is set back to `false`. Setting it to `true` again reopens the tour.
- Empty or invalid Steps JSON no longer breaks the page. The tour is not shown and an error is written to the browser console.
- Start At is made safe: negative values become 0 and values past the last step go to the last step.

### Upgrading from 1.0.0

1. Download `mendix.Reacttour.mpk` 2.1.0 and replace the old file in the `widgets` folder of your app.
2. In Studio Pro choose **App > Update all widgets**, then fix any errors shown.
3. Check the six Boolean settings listed above. Set their attributes to `true` where you want the control visible.
4. If you still see the old widget, use **App > Clean Deployment Directory** and run the app again.

### Try the sample module

1. Download [ReactTourSample.mpk](https://github.com/bharathidas/Reactour/raw/main/ReactTourSample.mpk).
2. In Studio Pro choose **App > Import module package** and select the file. The module is named `ReactTourSample` and includes widget 2.1.0.
3. Open **App > Security > User roles** and give your user role the module role of `ReactTourSample`.
4. Add the page `ReactTourSample.Home_Web` to your navigation, run the app and open the page. The tour starts on Button 1. Use the arrow keys to move and Esc to close.

The sample turns off Show Close Button, Close With Mask, Show Navigation and Show Number, so it shows no close button, dots or number badge.

### Source code and build

The widget source is in [`CustomWidgets/reacttour`](CustomWidgets/reacttour) (updated to 2.1.0).

```
cd CustomWidgets/reacttour
npm install
npm run build
```

The package is created in `dist/2.1.0/mendix.Reacttour.mpk`. A current Node.js LTS version is needed.

### Older versions

- The Mendix app in the root of this repository (`ReactTour.mpr`) and the release [version2](https://github.com/bharathidas/Reactour/releases/tag/version2) (`ReactTour.mpk` app package) are the **Mendix 9** sample app with widget 1.0.0.
- Release [version1](https://github.com/bharathidas/Reactour/releases/tag/version1) is widget 1.0.0 for Mendix 9.

---

Create customizable guided tours to improve user onboarding and feature discovery, highlighting elements with dynamic tooltips and offering flexible navigation and styling options.

## Features
### •	Steps: Array of elements to highlight with special info 
#### Example:
'[
  {
    "selector": ".custombutton1",
    "content": "This is my custom button 1.Ok, lets start with the name of the Tour that is about to begin."
  },
  {
    "selector": ".custombutton2",
    "content": "This is my custom button 2"
  },
  {
    "selector": ".custombutton3",
    "content": "buttons test"  
  }
]'

#### Selector: ClassName
#### Content: Content to be shown for that selector

### •	Start Tour: 
To start the Tour.

### •	Accent Color: 
Custom color for numbers and dots.

### •	Close With Mask: 
Close the Tour by clicking the Mask 

### •	Disable Dot Navigation: 
The attribute to disable dots navigation

### •	Disable Keyboard Navigation: 
The attribute to disable keyboard navigation.

### •	Show buttons: 
Show/Hide Helper Navigation buttons

### •	Show Close button: 
Show/Hide Helper Close button

### •	Show Navigation: 
Show/Hide Helper Navigation Dots

### •	Show Navigation Number: 
Show/Hide number when hovers on each Navigation Dot

### •	Show Number: 
Show/Hide Helper Number Badge

### •	Start At: 
Starting step when Tour is open the first time

### •	Disable Focus Lock: 
Disable FocusLock component

### Screenshots:
![Screenshot_2](https://github.com/bharathidas/Reactour/assets/23263603/8c4b9f5b-5b3c-4447-bfc5-70396b866c64)
![Screenshot_1](https://github.com/bharathidas/Reactour/assets/23263603/0fa1058b-32fe-4d17-8e74-0cffea65161f)
![Screenshot_3](https://github.com/bharathidas/Reactour/assets/23263603/e2ddef68-7ebb-4b9c-92cc-204d83d52e28)



