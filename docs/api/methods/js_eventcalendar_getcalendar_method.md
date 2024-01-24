---
sidebar_label: getCalendar()
title: getCalendar Method
description: You can learn about the getCalendar method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# getCalendar()

### Description

@short: Gets an object of the calendar data by its ID

### Usage

~~~jsx {}
getCalendar({ id: string | number }): object;
~~~

### Returns

:::info
The `getCalendar()` method returns an object of the calendar data by the specified ID. For details, see the [`calendars`](../../config/js_eventcalendar_calendars_config) property!
:::

### Parameters

- `id` - (required) an **ID** of the calendar

### Example

~~~jsx {6}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// get a calendar data with the "work" ID
const calendar_data = calendar.getCalendar({ id: "work" });
console.log(calendar_data);
~~~
