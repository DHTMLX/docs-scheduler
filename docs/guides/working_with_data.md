---
sidebar_label: Working with data
title: Working with data
description: You can learn about working with data in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# Working with data

## Initial data loading

When initializing Event Calendar, you can provide the initial data for [**events**](api/config/js_eventcalendar_events_config.md), [**calendars**](api/config/js_eventcalendar_calendars_config.md) and [**colors**](api/config/js_eventcalendar_colors_config.md).

~~~jsx {1,38,63,86-88}
const events = [ // data for events
    {
        id: "1",
        start_date: new Date("2021-05-24T00:00:00"),
        end_date: new Date("2021-06-08T00:00:00"),
        type: "rest",
        text: "Current event",
        details: "Philippe-Chatrier Court\n Paris, FRA",
        allDay: false,
        dragResize: true,
        readonly: false,
        dragMove: true,
        color: {
            background: "#EDD1EC",
            border: "#AD44AB",
            textColor: "#3e98db"
        },
        custom_key: "Custom key of the event"
    },
    {
        id: "2",
        start_date: new Date("2021-06-07T00:00:00"),
        end_date: new Date("2021-06-13T00:00:00"),
        type: "rest",
        text: "French Open",
        details: "Philippe-Chatrier Court\n Paris, FRA"  
    },
    {
        id: "3",
        start_date: new Date("2021-06-10T00:00:00"),
        end_date: new Date("2021-06-14T00:00:00"),
        type: "movie",
        text: "Aegon Championship",
        details: "The Queens Club\n London, ENG"
    },
];

const calendars = [ // data for calendars
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

const colors = [ // data for colors used in colorpicker
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
];

// initialize Event Calendar with the initial data for events, calendars and colors
new eventCalendar.EventCalendar("#root", {
    events, 
    calendars, 
    colors 
});
~~~

## Loading data from local source

To load data for ***events*** and ***calendars*** from a local source, you can use the [`parse()`](api/methods/js_eventcalendar_parse_method.md) method. It takes an array with the needed data as a parameter.

:::info
If there are multiple events with the same **id**, the calendar will drop an error as soon as it finds a duplicated **id**. It is expected that each event has its own unique **id**, or that the **id** is not specified (and then the calendar will generate its own **id**).
:::

### Loading data for events

~~~js {4}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", { /*...*/ });
// load data into Event Calendar
calendar.parse(events);
~~~

### Loading data for events and calendars

~~~js {4}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", { /*...*/ });
// load data into Event Calendar
calendar.parse({ events, calendars });
~~~

## Getting Event Calendar data

To get Event Calendar data, you can use the following methods:

- [`getEvent()`](api/methods/js_eventcalendar_getevent_method.md) - gets an object of the event data by the specified ID
- [`serialize()`](api/methods/js_eventcalendar_serialize_method.md) - serializes Event Calendar data to JSON

## Getting Event Calendar state

To get Event Calendar state, you can use the following methods:

- [`api.getReactiveState()`](api/internal/js_eventcalendar_getreactivestate_method.md) - gets an object with the reactive properties of the *StateStore*
- [`api.getState()`](api/internal/js_eventcalendar_getstate_method.md) - gets an object with the current properties of the *StateStore*
- [`api.getStores()`](api/internal/js_eventcalendar_getstores_method.md) - gets an object with the *DataStore*

## Adding new items

To add new *events* and *calendars*, you can use the following methods:

- [`addCalendar()`](api/methods/js_eventcalendar_addcalendar_method.md) - adds a new calendar into Event Calendar
- [`addEvent()`](api/methods/js_eventcalendar_addevent_method.md) - adds a new event into Event Calendar (without opening an editor)
- [`createEvent()`](api/methods/js_eventcalendar_createevent_method.md) - adds a new event into Event Calendar and opens an editor

## Updating items

To update the *events* and *calendars*, you can use the following methods:

- [`updateCalendar()`](api/methods/js_eventcalendar_updatecalendar_method.md) - updates the calendar data by the specified ID
- [`updateEvent()`](api/methods/js_eventcalendar_updateevent_method.md) - updates the event data by the specified ID

## Deleting items

To remove the *events* and *calendars*, you can use the following methods:

- [`deleteCalendar()`](api/methods/js_eventcalendar_deletecalendar_method.md) - removes a calendar from Event Calendar by the specified ID
- [`deleteEvent()`](api/methods/js_eventcalendar_deleteevent_method.md) - removes an event from Event Calendar by the specified ID

## Example

In this snippet you can see how to provide the initial data for *events* and *calendars*:

<iframe src="https://snippet.dhtmlx.com/qw45r367?mode=result&tag=event_calendar" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
