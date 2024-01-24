---
sidebar_label: setTheme()
title: setTheme Method
description: You can learn about the setTheme method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# setTheme()

### Description

@short: Sets a theme of Event Calendar

### Usage

~~~jsx {}
setTheme(theme?: string): void;
~~~

### Parameters

- `theme` - (optional) a theme to be applied to Event Calendar. There are 3 available themes:
    - "material"
    - "willow"
    - "willowDark"

### Example

~~~jsx {6}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // initial configuration parameters
});
// set the "willow" theme
calendar.setTheme( "willow" );
~~~

**Related sample:** [Event Calendar. Styling (Buil-in themes)](https://snippet.dhtmlx.com/nh2g0j2o?tag=event_calendar)