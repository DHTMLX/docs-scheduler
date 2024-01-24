---
sidebar_label: set-bound
title: set-bound Event
description: You can learn about the set-bound event in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# set-bound

### Description

@short: Fires when making a next/previous step (date) in a calendar

### Usage

~~~jsx {}
"set-bound": ({ step: number }) => void;
~~~

### Parameters

The callback of the **set-bound** event can take an object with the following parameter:

- `step` - (required) a value that allows to switch to the next/previous date in a calendar

:::info
For handling the inner events of Event Calendar you can use the [**Event Bus methods**](api/overview/internal_eventbus_overview.md)
:::

### Example

~~~jsx {6-8}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// subscribe on the "set-bound" event
calendar.api.on("set-bound", (obj) => {
    console.log(obj); 
});
~~~
