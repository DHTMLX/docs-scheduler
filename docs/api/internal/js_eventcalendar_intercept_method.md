---
sidebar_label: api.intercept()
title: intercept Method
description: You can learn about the intercept method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# api.intercept()

### Description

@short: Allows intercepting and preventing the inner events

### Usage

~~~jsx {}
api.intercept(
    event: string,
    callback: function
): void;
~~~

### Parameters

- `event` - (required) an event to be fired 
- `callback` - (required) a callback to be performed (the callback arguments will depend on the event to be fired)

### Events

:::info
The full list of the Event Calendar internal events can be found [**here**](api/overview/events_overview.md)
:::

### Example

~~~jsx {6-11}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration properties
});
// prevent the "select-event" inner event
calendar.api.intercept("select-event", (obj) => {
    if(obj.id == 1){
        console.log("ID is " + obj.id);
        return false;
    }
});
~~~
