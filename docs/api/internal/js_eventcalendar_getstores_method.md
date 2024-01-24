---
sidebar_label: api.getStores()
title: getStores Method
description: You can learn about the getStores method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# api.getStores()

### Description

@short: Gets an object with the DataStore of Event Calendar

### Usage

~~~jsx {}
api.getStores(): object;
~~~

### Returns

The method returns an object with **DataStore**:

~~~jsx {}
{
    state: DataStore // ( object )
}
~~~

### Example

~~~jsx {6}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration properties
});
// get the DataStore object of Event Calendar
const stores = calendar.api.getStores();
console.log(stores);
~~~
