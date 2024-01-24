---
sidebar_label: api.getState()
title: getState Method
description: You can learn about the getState method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# api.getState()

### Description

@short: Gets an object with the current properties of the Event Calendar StateStore

### Usage

~~~jsx {}
api.getState(): object;
~~~

### Returns

The **getState()** method returns an object with the following properties:

~~~jsx {}
{
    bounds: array,
    config: object,
    events: array,
    date: Date,
    dateRange: array,
    datepicker: object,
    edit: boolean,
    editorShape: array,
    calendars: array,
    mode: string,
    popupInfo: object,
    selected: string,
    viewData: array,
    viewModel: object
}
~~~  

### Example

~~~jsx {5-13}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// get the state of Event Calendar
const state = calendar.api.getState();
console.log(state.events); // output the events data
console.log(state.mode); // output the selected mode
console.log(state.config); // output the configuration object
console.log(state.calendars); // output the calendars data
console.log(state.editorShape); // output the editor configuration object
console.log(state.selected); // output the selected event data
//...
~~~
