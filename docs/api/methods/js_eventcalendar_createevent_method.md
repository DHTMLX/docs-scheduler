---
sidebar_label: createEvent()
title: createEvent Method
description: You can learn about the createEvent method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# createEvent()

### Description

@short: Creates a new event and opens an editor

### Usage

~~~jsx {}
createEvent({ event?: object }): void;
~~~

### Parameters

- `event` - (optional) an object of the event data

:::tip
The full list of the **event** parameters can be found [**here**](api/config/js_eventcalendar_events_config.md)
:::

### Example

~~~jsx {6-15}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// create new event
calendar.createEvent({
    event: {
        id: "44",
        type: "meeting",
        start_date: new Date("2023-09-16T15:00:00"),
        end_date: new Date("2023-09-16T16:00:00"),
        text: "Custom event",
        details: "Rome, Italy",
    }
});
~~~

**Change log:** The ***event*** parameter was added in v2.1.2
