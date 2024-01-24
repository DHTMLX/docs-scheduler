---
sidebar_label: setMode()
title: setMode Method
description: You can learn about the setMode method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# setMode()

### Description

@short: Sets a view mode of Event Calendar

### Usage

~~~jsx {}
setMode({ value: string | number }): void;
~~~

### Parameters

- `value` - (required) a view mode ID specified in the **config.views** property.

:::info
You can set the **value** parameter to the *"day"*, *"week"*, *"month"*, *"year"*, *"agenda"* or *"timeline"* view IDs used by default, or define a custom ID in the **config.views** property
:::

### Example

~~~jsx {6}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // initial configuration parameters
});
// set the "timeline" mode
calendar.setMode({ value: "timeline" });
~~~

**Change log:** The ***timeline*** mode was added in v2.0