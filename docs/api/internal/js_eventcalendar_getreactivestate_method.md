---
sidebar_label: api.getReactiveState()
title: getReactiveState Method
description: You can learn about the getReactiveState method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# api.getReactiveState()

### Description

@short: Gets an object with the reactive properties of the Event Calendar StateStore

### Usage

~~~jsx {}
api.getReactiveState(): object;
~~~

### Returns

The method returns an object with the following properties:

~~~jsx {}
{
    bounds: object,
    calendars: object,
    colors: object,
    config: object,
    date: object,
    datepicker: object,
    dateRange: object,
    edit: object,
    editorShape: object,
    events: object,
    mode: object,
    popupInfo: object,
    selected: object,
    sidebar: object,
    viewData: object,
    viewModel: object
}
~~~  

### Example

~~~jsx {6-44}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration properties
});

// get reactive state
const state = calendar.api.getReactiveState();

// subscribe on the calendars changes and output the calendars data
state.calendars.subscribe((data) => {
    console.log(data);
});

// subscribe on the events changes and output the events data
state.events.subscribe((data) => {
    console.log(data);
});

// subscribe on the event selection and output the data of the selected event
state.selected.subscribe((data) => {
    console.log(data);
    // other actions
});

// subscribe on the date changes and output the selected date
state.date.subscribe((date) => {
    console.log(date);
});

// subscribe on the modes changes and output the selected mode
state.mode.subscribe((mode) => {
    console.log(mode);
});

// set new mode
state.mode.set("day");

// update mode
state.mode.update((mode) => {
    if(mode === "day"){
        return "week";
    }
});
~~~
