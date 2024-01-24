---
sidebar_label: delete-event
title: delete-event Event
description: You can learn about the delete-event event in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# delete-event

### Description

@short: Fires when removing an event

### Usage

~~~jsx {}
"delete-event": ({ id: string | number }) => void;
~~~

### Parameters

The callback of the **delete-event** event can take an object with the following parameter:

- `id` - (required) an ID of the event to be deleted

:::info
For handling the inner events of Event Calendar you can use the [**Event Bus methods**](api/overview/internal_eventbus_overview.md)
:::

### Example

~~~jsx {6-8}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// subscribe on the "delete-event" event
calendar.api.on("delete-event", (obj) => {
    console.log(obj);
});
~~~
