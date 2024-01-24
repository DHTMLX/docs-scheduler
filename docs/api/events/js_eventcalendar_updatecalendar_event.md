---
sidebar_label: update-calendar
title: update-calendar Event
description: You can learn about the update-calendar event in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# update-calendar

### Description

@short: Fires when updating the calendar data

### Usage

~~~jsx {}
"update-calendar": ({
    calendar: object,
    id: string | number
}) => void;
~~~

### Parameters

The callback of the **update-calendar** event can take an object with the following parameters:

- `calendar` - (required) an object of the calendar data. The full list of the **calendar** parameters can be found [**here**](api/config/js_eventcalendar_calendars_config.md)
- `id` - (required) an ID of the calendar to be updated

:::info
For handling the inner events of Event Calendar you can use the [**Event Bus methods**](api/overview/internal_eventbus_overview.md)
:::

### Example

~~~jsx {6-8}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// subscribe on the "update-calendar" event
calendar.api.on("update-calendar", (obj) => {
    console.log(obj);
});
~~~
