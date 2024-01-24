---
sidebar_label: addCalendar()
title: addCalendar Method
description: You can learn about the addCalendar method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# addCalendar()

### Description

@short: Adds a new calendar

### Usage

~~~jsx {}
addCalendar({ calendar: object }): void;
~~~

### Parameters

- `calendar` - (required) an object of the calendar data

:::tip
The full list of the **calendar** parameters can be found [**here**](api/config/js_eventcalendar_calendars_config.md)
:::

### Example

~~~jsx {6-14,16}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// calendar data
const new_calendar_data = {
    id: "new_calendar",
    active: true,
    label: "New calendar",
    color: {
        background: "#d5eaf7",
        border: "#098CDC"
    }
};
// add new calendar
calendar.addCalendar({ calendar: new_calendar_data });
~~~