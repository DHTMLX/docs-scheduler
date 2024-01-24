---
sidebar_label: deleteCalendar()
title: deleteCalendar Method
description: You can learn about the deleteCalendar method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# deleteCalendar()

### Description

@short: Removes a calendar by its ID

### Usage

~~~jsx {}
deleteCalendar({ id: string | number }): void;
~~~

### Parameters

- `id` - (required) an ID of the current calendar

### Example

~~~jsx {6-8}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// delete calendar with the "work" ID
calendar.deleteCalendar({
    id: "work"
});
~~~
