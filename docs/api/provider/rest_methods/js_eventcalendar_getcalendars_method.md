---
sidebar_label: getCalendars()
title: getCalendars REST Method
description: You can learn about the getCalendars REST method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# getCalendars()

### Description

@short: Gets a promise with the calendars data

:::info
The `getCalendars()` method is a part of the **RestDataProvider** service intended for working with server
:::

### Usage

~~~jsx {}
getCalendars(): promise;
~~~

### Returns

The `getCalendars()` method sends a request to the server by the **GET** method and returns a **promise** with the calendars data

### Example

~~~jsx {6,10}
const url = "https://some_backend_url";
const restProvider = new eventCalendar.RestDataProvider(url);

Promise.all([
    restProvider.getEvents(),
    restProvider.getCalendars()
]).then(([events, calendars]) => {
    const calendar = new eventCalendar("#root", {
        events,
        calendars
    });
    calendar.api.setNext(restProvider);
});
~~~

:::info
You need to include **RestDataProvider** into the **Event Bus** order to perform operations with data (***adding***, ***deleting*** etc) and send the corresponding requests to the server
:::

---

**Related articles:** [Working with server](/guides/working_with_server)
