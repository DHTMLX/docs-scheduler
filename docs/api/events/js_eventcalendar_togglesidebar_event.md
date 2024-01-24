---
sidebar_label: toggle-sidebar
title: toggle-sidebar Event
description: You can learn about the toggle-sidebar event in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# toggle-sidebar

### Description

@short: Fires when showing/hiding a sidebar 

### Usage

~~~jsx {}
"toggle-sidebar": ({ show?: boolean }) => void;
~~~

### Parameters

The callback of the **toggle-sidebar** event can take an object with the following parameter:

- `show` - (optional) allows to show/hide a sidebar  

:::info
For handling the inner events of Event Calendar you can use the [**Event Bus methods**](api/overview/internal_eventbus_overview.md)
:::

### Example

~~~jsx {6-8}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// subscribe on the "toggle-sidebar" event
calendar.api.on("toggle-sidebar", (obj) => {
    console.log(obj);
});
~~~
