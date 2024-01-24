---
sidebar_label: colors
title: colors Config
description: You can learn about the colors config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# colors

### Description

@short: Optional. An array of objects containing the parameters of colors used in colorpicker

### Usage

~~~jsx {}
colors?: [
    {
        backgroung: string, 
        border: string, 
        textColor?: string, 
        colorpicker?: string
    },
    {...}
]; 
~~~

### Parameters

For each set of colors you can specify the following parameters:

- `background` - (required) a HEX code of the event background color
- `border` - (required) a HEX code of the event border color
- `textColor` - (optional) a HEX code of the event text color
- `colorpicker` - (optional) a value (color) used in colorpicker. The possible values are *"background"* and *"border"*

### Default config

:::note
You can export the default config using the `eventCalendar.defaultColors` expression.
:::

~~~jsx {}
const defaultColors = [
    { background: "#5890DC", border: "#2D74D3" },
    { background: "#3AA3E3", border: "#098CDC" },
    { background: "#006ECC", border: "#045AA3" },
    { background: "#0054B4", border: "#014593" },
    { background: "#84BF70", border: "#61A649" },
    { background: "#009492", border: "#157B7A" },
    { background: "#009C5A", border: "#04864F" },
    { background: "#005A3A", border: "#054830" },
    { background: "#BD69BC", border: "#AD44AB" },
    { background: "#CB61C8", border: "#9E3C9C" },
    { background: "#E94C93", border: "#AC3C6E" },
    { background: "#E54D54", border: "#BA282E" },
    { background: "#FF8750", border: "#BD4E1B" },
    { background: "#DC9F54", border: "#B87728" },
    { background: "#E67400", border: "#B65F06" },
    { background: "#9585EF", border: "#7A67EB" },
    { background: "#7366CC", border: "#4536AD" },
    { background: "#3537A6", border: "#282A8A" },
    { background: "#3E3A98", border: "#36337E" },
    { background: "#3D446F", border: "#2A2F50" },
    { background: "#454555", border: "#363645" }
];
~~~

:::info
To set the colors dynamically, you can use the
[`setConfig()`](../../methods/js_eventcalendar_setconfig_method) method
:::

### Example

~~~jsx {3-22}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    colors: [
       {
            background: "#d62b31",
            border: "#32a852",
            textColor: "#e5f01d",
            colorpicker: "background"
        },
        {
            background: "#ccf5ff",
            border: "#00CDFF",
            textColor: "#e5f01d",
            colorpicker: "background"
        },
        {
            background: "#cee8f8",
            border: "#098CDC",
            textColor: "#e5f01d",
            colorpicker: "border"
        }
    ],
    // other configuration parameters
});
~~~

**Change log:** Export of the ***defaultColors*** parameter was added in v1.1
