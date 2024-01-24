---
sidebar_label: api.exec()
title: exec Method
description: You can learn about the exec method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# api.exec()

### Description

@short: Allows triggering the inner events

### Usage

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### Parameters

- `event` - (required) an event to be fired 
- `config` - (required) the config object with parameters (see the event to be fired)

### Events

:::info
The full list of the Event Calendar internal events can be found [**here**](api/overview/events_overview.md)
:::

### Example

~~~jsx {6}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration properties
});
// set "day" mode
calendar.api.exec("set-mode", { mode: "day" });
~~~
