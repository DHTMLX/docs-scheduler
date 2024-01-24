---
sidebar_label: update-event
title: update-event Event
description: You can learn about the update-event event in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# update-event

### Description

@short: Fires when updating the event data

### Usage

~~~jsx {}
"update-event": ({
    event: object,
    id: string | number
}) => void;
~~~

### Parameters

The callback of the **update-event** event can take an object with the following parameters:

- `event` - (required) an object of the event data. The full list of the **event** parameters can be found [**here**](api/config/js_eventcalendar_events_config.md)
- `id` - (required) an ID of the event to be updated

:::info
For handling the inner events of Event Calendar you can use the [**Event Bus methods**](api/overview/internal_eventbus_overview.md)
:::

### Example

~~~jsx {6-8}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// subscribe on the "update-event" event
calendar.api.on("update-event", (obj) => {
    console.log(obj);
});
~~~
