---
sidebar_label: openEditor()
title: openEditor Method
description: You can learn about the openEditor method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# openEditor()

### Description

@short: Opens an editor for an event by its ID

### Usage

~~~jsx {}
openEditor({ id: string | number }): void;
~~~

### Parameters

- `id` - (required) an **ID** of the event, the editor will be opened for 

### Example

~~~jsx {6}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// open editor for the event with the "1" ID
calendar.openEditor({ id: 1 });
~~~
