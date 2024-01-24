---
sidebar_label: setConfig()
title: setConfig Method
description: You can learn about the setConfig method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# setConfig()

### Description

@short: Sets the config parameters of Event Calendar

### Usage

~~~jsx {}
setConfig(config: object): void;
~~~

### Parameters

- `config` - (required) the object of the Event Calendar configuration. See the full list of the parameters [here](api/overview/properties_overview.md)

:::tip
Using this method, you can set the configuration parameters of the Event Calendar widget as well as events and calendars data. The method changes only the parameters you passed.
:::

### Example

~~~jsx {6-17}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// set the configuration parameters of Event Calendar
calendar.setConfig({
    config: {
        dragCreate: true,
        eventInfoOnClick: true,
        eventsOverlay: true,
        autoSave: true,
        dragResize: true,
        dragMove: true
    },
    locale: eventCalendar.ru,
    mode: "month"
});
~~~
