---
sidebar_label: addEvent()
title: addEvent Method
description: You can learn about the addEvent method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# addEvent()

### Description

@short: Adds a new event (without opening an editor)

### Usage

~~~jsx {}
addEvent({ event: object }): void;
~~~

### Parameters

- `event` - (required) an object of the event data

:::tip
The full list of the **event** parameters can be found [**here**](api/config/js_eventcalendar_events_config.md)
:::

### Example

~~~jsx {15}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// event data
const new_event_data = {
    id: "1.1",
    type: "Work",
    start_date: new Date("2021-05-24 00:00:00"),
    end_date: new Date("2021-06-08 00:00:00"),
    text: "New Event",
    details: "Philippe-Chatrier Court\n Paris, FRA"
};
// add new event
calendar.addEvent({ event: new_event_data });
~~~