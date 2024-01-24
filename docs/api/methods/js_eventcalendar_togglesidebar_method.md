---
sidebar_label: toggleSidebar()
title: toggleSidebar Method
description: You can learn about the toggleSidebar method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# toggleSidebar()

### Description

@short: Shows/hides a sidebar

### Usage

~~~jsx {}
toggleSidebar({ show?: boolean }): void;
~~~

### Parameters

- `show` - (optional) shows/hides a sidebar

### Example

~~~jsx {6}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// hide sidebar
calendar.toggleSidebar({ show: false });
~~~