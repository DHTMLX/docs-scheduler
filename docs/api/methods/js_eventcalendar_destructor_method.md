---
sidebar_label: destructor()
title: destructor Method
description: You can learn about the destructor method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# destructor()

### Description

@short: Removes all HTML elements of Event Calendar, and detaches all related events

### Usage

~~~jsx {}
destructor(): void;
~~~

### Example

~~~jsx {6}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    //configuration parameters
});
// delete Event Calendar
calendar.destructor();
~~~
