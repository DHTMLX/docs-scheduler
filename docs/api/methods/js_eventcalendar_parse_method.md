---
sidebar_label: parse()
title: parse Method
description: You can learn about the parse method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# parse()

### Description

@short: Parses data into Event Calendar (for events and calendars)

### Usage

~~~jsx {}
parse(data: array | { events: array, calendars: array }): void;
~~~

### Parameters

To load data for **events** only, pass the following parameter:

- `data` - (required) an array of objects of the events data

To load data for **events** and **calendars**, pass the following parameters:

- `data` - (required) an object of the events and calendars data:
    - `events` - an array of objects of the events data
    - `calendars` - an array of objects of the calendars data

:::info
For details, see the [`events`](../../config/js_eventcalendar_events_config) and [`calendars`](../../config/js_eventcalendar_calendars_config) properties of Event Calendar
:::

### Example

~~~jsx {6-23,25-48,50}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// events data
const events = [
    {
        id: "1",
        type: "work",
        start_date: new Date("2021-05-24T00:00:00"),
        end_date: new Date("2021-06-08T00:00:00"),
        text: "French Open",
        details: "Philippe-Chatrier Court\n Paris, FRA",
    },
    {
        id: "2",
        type: "work",
        start_date: new Date("2021-06-07T00:00:00"),
        end_date: new Date("2021-06-13T00:00:00"),
        text: "French Open",
        details: "Philippe-Chatrier Court\n Paris, FRA",
    }, ...
];
// calendars data
const calendars = [
    {
        id: "rest",
        label: "Rest",
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
        label: "Movie",
        readonly: false,
        active: false,
        color: {
            background: "#CEEDC3",
            border: "#77D257",
            textColor: "#3e98db"
        }
    }
];
// parse the events and calendars data into Event Calendar
calendar.parse({ events, calendars });
~~~

**Related articles:** [Working with Data](../../../guides/working_with_data#loading-data-from-local-source)
