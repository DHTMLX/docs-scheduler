---
sidebar_label: mode
title: mode Config
description: You can learn about the mode config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# mode

### Description

@short: Optional. An initial view mode of Event Calendar

### Usage

~~~jsx {}
mode?: string | number; // "day" | "week" | "month" | "year" | "agenda" | "timeline" | custom_id 
~~~

### Default config

By default, the **mode** config is set to the **"week"** value

~~~jsx {}
mode: "week" 
~~~

:::note
You can set the `mode` property to the *"day"*, *"week"*, *"month"*, *"year"*, *"agenda"* or *"timeline"* view IDs used by default, or define a custom ID in the **config.views** property
:::

:::info
To set the view mode dynamically, you can use the
[`setMode()`](../../methods/js_eventcalendar_setmode_method) and
[`setConfig()`](../../methods/js_eventcalendar_setconfig_method) methods
:::

### Example

~~~jsx {3}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    mode: "timeline"
    // other configuration parameters
});
~~~

**Related sample:** [Event Calendar. Readonly](https://snippet.dhtmlx.com/8eixd7r6?tag=event_calendar)

**Change log:** The ***timeline*** mode was added in v2.0