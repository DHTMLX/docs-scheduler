---
sidebar_label: updateEvent()
title: updateEvent Method
description: You can learn about the updateEvent method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# updateEvent()

### Description

@short: Updates the event data by its ID

### Usage

~~~jsx {}
updateEvent({ 
    event: object, 
    id: string | number 
}): void;
~~~

### Parameters

- `event` - (required) new data object of the current event
- `id` - (required) an ID of the current event

:::info
Note, the **ID** of the event to be updated is required. Other event parameters can be found [**here**](api/config/js_eventcalendar_events_config.md).
:::

### Example

~~~jsx {6-13,15-18}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});

const new_event_data = {
    id: "1.1",
    type: "Work",
    start_date: new Date("2021-05-24 00:00:00"),
    end_date: new Date("2021-06-08 00:00:00"),
    text: "Updated Event",
    details: "Philippe-Chatrier Court\n Paris, FRA"
};
// update data of the event with the 1 ID
calendar.updateEvent({
    event: new_event_data,
    id: "1"
});
~~~
