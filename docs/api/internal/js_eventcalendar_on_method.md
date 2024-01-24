---
sidebar_label: api.on()
title: on Method
description: You can learn about the on method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# api.on()

### Description

@short: Allows attaching a handler to the inner events

### Usage

~~~jsx {}
api.on(
    event: string,
    handler: function
): void;
~~~

### Parameters

- `event` - (required) an event to be fired 
- `handler` - (required) a handler to be attached (the handler arguments will depend on the event to be fired)

### Events

:::info
The full list of the Event Calendar internal events can be found [**here**](api/overview/events_overview.md)
:::

### Example

~~~jsx {6-8}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration properties
});
// output the event data in console when its deleting
calendar.api.on("delete-event", (obj) => {
    console.log(obj);
});
~~~
