---
sidebar_label: close-event-info
title: close-event-info Event
description: You can learn about the close-event-info event in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# close-event-info

### Description

@short: Fires when closing an event info popup window

### Usage

~~~jsx {}
"close-event-info": () => void;
~~~

### Parameters

The callback of the **close-event-info** event doesn't take any parameters!

:::info
For handling the inner events of Event Calendar you can use the [**Event Bus methods**](api/overview/internal_eventbus_overview.md)
:::

### Example

~~~jsx {6-8}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// subscribe on the "close-event-info" event
calendar.api.on("close-event-info", () => {
    console.log("The event info popup is closed!");
});
~~~
