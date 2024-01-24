---
sidebar_label: api.setNext()
title: setNext Method
description: You can learn about the setNext method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# api.setNext()

### Description

@short: Allows adding some action into the Event Bus order

### Usage

~~~jsx {}
api.setNext(next: any): void;
~~~

### Parameters

- `next` - (required) the action to be included into the **Event Bus** order  

### Example

~~~jsx {12}
const url = "https://some_backend_url";
const restProvider = new eventCalendar.RestDataProvider(url);

Promise.all([
    restProvider.getEvents(),
    restProvider.getCalendars()
]).then(([events, calendars]) => {
    const calendar = new eventCalendar.EventCalendar("#root", {
        events,
        calendars
    });
    calendar.api.setNext(restProvider);
});
~~~

