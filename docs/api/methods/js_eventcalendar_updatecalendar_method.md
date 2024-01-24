---
sidebar_label: updateCalendar()
title: updateCalendar Method
description: You can learn about the updateCalendar method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# updateCalendar()

### Description

@short: Updates the calendar data by its ID

### Usage

~~~jsx {}
updateCalendar({ 
    calendar: object, 
    id: string | number 
}): void;
~~~

### Parameters

- `calendar` - (required) new data object of the current calendar
- `id` - (required) an ID of the current calendar

:::info
Note, the **ID** of the calendar to be updated is required. Other calendar parameters can be found [**here**](api/config/js_eventcalendar_calendars_config.md).
:::

### Example

~~~jsx {6-14,16-19}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});

const new_calendar_data = {
    id: "movie",
    active: true,
    label: "New Calendar",
    color: {
        background: "#CEEDC3",
        border: "#77D257"
    }
};
// update data of the calendar with the "Movie" ID
calendar.updateCalendar({
    calendar: new_calendar_data,
    id: "movie"
});
~~~
