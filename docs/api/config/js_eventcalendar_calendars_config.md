---
sidebar_label: calendars
title: calendars Config
description: You can learn about the calendars config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# calendars

### Description

@short: Optional. An array of objects containing the calendars (event types) data

:::info
A **calendar** is a set of parameters you can apply to the events to group them by these parameters!
:::

### Usage

~~~jsx {}
calendars?: [
    { 
        id: string | number,
        label: string,
        readonly: boolean,
        active: boolean,
        color?: {
            background?: string, 
            border?: string,
            textColor?: string
        }
    }, {...}
];
~~~

### Parameters

For each **calendar** (*event type*) you can specify the following parameters (data):

- `id` - (required) an ID of the calendar
- `label` - (required) a text label of the calendar
- `active` - (required) shows/hides events of the current calendar
- `readonly` - (optional) enables/disables an ability to edit and delete the current calendar
- `color` - (optional) an object with the style parameters, applied to the events of current calendar. Here you can specify the following parameters (styles):
    - `background` - (optional) a HEX code of the event background color related to the current calendar
    - `border` - (optional) a HEX code of the event border color related to the current calendar
    - `textColor` - (optional) a HEX code of the event text color related to the current calendar

### Default config

:::note
You can export the default config using the `eventCalendar.defaultCalendars` expression.
:::

~~~jsx {}
const defaultCalendars = [
    {
        id: "work",
        label: "Work",
        readonly: false,
        active: true,
        color: {
            background: "#d5eaf7",
            border: "#098CDC"
        }
    },
    {
        id: "meeting",
        label: "Meeting",
        readonly: false,
        active: true,
        color: {
            background: "#E6E5EC",
            border: "#7A67EB"
        }
    },
    {
        id: "rest",
        label: "Rest",
        readonly: false,
        active: true,
        color: {
            background: "#EDD1EC",
            border: "#AD44AB"
        }
    },
    {
        id: "movie",
        label: "Movie",
        readonly: false,
        active: true,
        color: {
            background: "#CEEDC3",
            border: "#77D257"
        }
    }
];
~~~

:::info
To set the **calendars** config dynamically, you can use the 
[`setConfig()`](api/methods/js_eventcalendar_setconfig_method.md) method. You can also update the calendar data using the [`updateCalendar()`](api/methods/js_eventcalendar_updatecalendar_method.md) method, add a new calendar using the [`addCalendar()`](api/methods/js_eventcalendar_addcalendar_method.md) method, and delete a calendar via the [`deleteCalendar()`](api/methods/js_eventcalendar_deletecalendar_method.md) method.
:::

### Example

~~~jsx {2-25,28}
// custom calendars
const calendars = [
    {
        id: "rest",
        label: "Custom Rest",
        readonly: true,
        active: true,
        color: {
            background: "#EDD1EC",
            border: "#AD44AB",
            textColor: "#3e98db"
        }
    },
    {
        id: "movie",
        label: "Custom Movie",
        readonly: false,
        active: false,
        color: {
            background: "#CEEDC3",
            border: "#77D257",
            textColor: "#3e98db"
        }
    }
];
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    calendars
    // other configuration parameters
});
~~~

**Related sample:** [Event Calendar. Event color](https://snippet.dhtmlx.com/qw45r367?tag=event_calendar)
