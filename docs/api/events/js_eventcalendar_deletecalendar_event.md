---
sidebar_label: delete-calendar
title: delete-calendar Event
description: You can learn about the delete-calendar event in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# delete-calendar

### Description

@short: Fires when removing a calendar

### Usage

~~~jsx {}
"delete-calendar": ({ id: string | number }) => void;
~~~

### Parameters

The callback of the **delete-calendar** event can take an object with the following parameter:

- `id` - (required) an ID of the calendar to be deleted

:::info
For handling the inner events of Event Calendar you can use the [**Event Bus methods**](api/overview/internal_eventbus_overview.md)
:::

### Example

~~~jsx {6-8}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// subscribe on the "delete-calendar" event
calendar.api.on("delete-calendar", (obj) => {
    console.log(obj);
});
~~~
