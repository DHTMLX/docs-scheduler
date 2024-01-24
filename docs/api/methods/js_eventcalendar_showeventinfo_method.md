---
sidebar_label: showEventInfo()
title: showEventInfo Method
description: You can learn about the showEventInfo method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# showEventInfo()

### Description

@short: Shows an info popup for the event by its ID

### Usage

~~~jsx {}
showEventInfo({ id: string | number }): void;
~~~

### Parameters

- `id` - (required) an **ID** of the event, the info popup will be opened for 

### Example

~~~jsx {6}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // initial configuration parameters
});
// open info popup for the event with the "1" ID
calendar.showEventInfo({ id: "1" });
~~~
