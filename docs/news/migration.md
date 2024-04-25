---
sidebar_label: Migration to newer versions
title: Migration to Newer Versions
description: You can learn about the Migration to Newer Versions in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX eventcalendar.
---

# Migration to newer versions

## 2.1 -> 2.2

The release v2.2 was extended by new properties related to recurring events and changes the format of **RRULE** values.

All the data created in v2.1 remains compatible with v2.2+ and should not require any changes to be loaded into Event Calendar v2.2.

Note that any new changes will be saved using the updated format of the recurrence and changes to the existing code are required.

1) The following new properties should be added to the [event](../../api/config/js_eventcalendar_events_config) record:

- `recurringEventId`
- `originalStartTime`
- `status`

2) The `EXDATE` component of `RRULE` no longer contains dates of exceptions of recurring series. If you need to locate exceptions from code, you can find related records by the `recurringEventId` property which will match the id of the parent series.

```js
const exceptions = allEvents.filter(e => e.recurringEventId === seriesId);
```

The `originalStartTime` value of these records will contain the dates of replaced entries, that were previously stored in `EXDATE`.

3) Deleted occurrences of the series are now stored as separate records of event object. The Event Calendar will never display these entries. You can locate them by the value of status property, deleted instances will have "cancelled" status.

```js
const deletedInstances = allEvents.filter(e => e.status === "cancelled");
```

4) The `UNTIL` component of `RRULE` now contains dates in short ISO format as required by [iCalendar](https://icalendar.org/) specification and stored in zero-offset UTC timezone.

The example of `RRULE` string from v2.1: `FREQ=DAILY;INTERVAL=1;UNTIL=2024-04-25T23:59:59`

The example of `RRULE` string from v2.2: `FREQ=DAILY;INTERVAL=1;UNTIL=20240424T195959Z`

This change shouldn't require any actions from your end, the Event Calendar will still understand `RRULE` created by it's older version, but keep these changes in mind if you manage recurrence on the backend.

5) API events that contain mode parameter should not be processed by the backend or by permanent data storage.

Starting from v2.2, whenever a user modifies the recurring series from the UI, the Event Calendar will fire [`update-event`](../../api/events/js_eventcalendar_updateevent_event) with the new mode property, which will indicate whether the change should occur to the whole series or to 'this and following' events of the series. This event is fired for the modified occurrence of the series and should not be stored to the backend or permanent data storage.

This event will be followed by [`add-event`](../../api/events/js_eventcalendar_addevent_event) and [`update-event`](../../api/events/js_eventcalendar_updateevent_event) calls that will perform actual modifications of the recurring series and will not contain mode flag.

## 2.0.2 -> 2.1

### Api

#### Properties

- The [`config`](../../api/config/js_eventcalendar_config_config) property was extended by the ***dateTitle***, ***eventVerticalSpace*** and ***eventHorizontalSpace*** parameters

~~~jsx {9} title="Before v2.1"
config: {
    ...,
    views: [
        ...,
        {
            ...,
            config: {
                ...,
                eventMerge: "10px",
            }
        }
    ]
}
~~~

~~~jsx {3-5,12-14} title="From v2.1"
config: {
    ...,
    dateTitle: (date, [start, end]) => 
        `${format(start, "do")} - ${format(end, "do")} ${format(date, "LLL")}`, // you can also specify this property for each view separately
    eventVerticalSpace: 8, // you can also specify this property for the "day" | "week" | "month" | "timeline" view modes separately
    views: [
        ...,
        {
            ...,
            config: {
                ...,
                // the "eventMerge" parameter was deprecated
                // use the "eventHorizontalSpace" parameter instead of "eventMerge" one
                eventHorizontalSpace: 10,
            }
        }
    ]
}
~~~

## 2.0.1 -> 2.0.2

### Api

#### Properties

- The [`config`](../../api/config/js_eventcalendar_config_config) property was extended by the ***dateClick*** parameter.

~~~jsx title="Before v2.0.2"
config: {
    ...,
    dimPastEvents: true,
}
~~~

~~~jsx {4} title="From v2.0.2"
config: {
    ...,
    dimPastEvents: true,
    dateClick: false, // or "day" | "week" | "month" | "year" | "agenda" | "timeline"
}
~~~

## 1.1 -> 2.0

### Api

#### Properties

- The [`mode`](../../api/config/js_eventcalendar_mode_config) property was extended by the new mode. Starting from v2.0, you can use the ***timeline*** mode.

~~~jsx title="Before v2.0"
mode: "day", // "week" | "month" | "year" | "agenda" 
~~~

~~~jsx title="From v2.0"
mode: "day", // "week" | "month" | "year" | "agenda" | "timeline" | custom_view_id
~~~

- The [`templates`](../../api/config/js_eventcalendar_templates_config) property was extended by the new template. Starting from v2.0, you can use the ***timelineSection*** template.

~~~jsx title="Before v2.0"
templates: {
    weekEvent: ({ event, calendar }) => {...},
    monthEvent: ({ event, calendar }) => {...},
    yearEvent: ({ event, calendar }) => {...},
    agendaEvent: ({ event, calendar }) => {...},
    agendaDate: ({ event, calendar }) => {...},
    multievent: ({ event, calendar }) => {...},
    header: ({ date, dateFormat }) => {...},
    popup: ({ event, calendar }) => {...}
}
~~~

~~~jsx {10} title="From v2.0"
templates: {
    weekEvent: ({ event, calendar }) => {...},
    monthEvent: ({ event, calendar }) => {...},
    yearEvent: ({ event, calendar }) => {...},
    agendaEvent: ({ event, calendar }) => {...},
    agendaDate: ({ event, calendar }) => {...},
    multievent: ({ event, calendar }) => {...},
    header: ({ date, dateFormat }) => {...},
    popup: ({ event, calendar }) => {...},
    timelineSection: (section) => {...},
}
~~~

- The [`config`](../../api/config/js_eventcalendar_config_config) property was extended by the new parameters. Starting from v2.0, you can use the ***viewControl*** and ***dimPastEvents*** parameters. The ***views*** parameter was fully updated.

~~~jsx title="Before v2.0"
config: {
    ...,
    views: { 
        day: {
            ...,
            cellCss: (date) => {
                ...,
                return string;
            },
        },
        week: { ... },
        month: { ... }
    }
}
~~~

~~~jsx {3-40} title="From v2.0"
config: {
    ...,
    dimPastEvents: true,
    viewControl: "auto", // "toggle" | "dropdown" | "none"
    views: [
        {
            id: "week",
            label: "Week",
            layout: "week",
            config: defaultWeekConfig
        },
        { 
            id: "day", 
            label: "Day",  
            layout: "day",
            config: defaultWeekConfig
        },
        { 
            id: "month",
            label: "Month",
            layout: "month",
            config: defaultMonthConfig
        },
        { 
            id: "year", 
            label: "Year", 
            layout: "year" 
        },
        { 
            id: "agenda", 
            label: "Agenda", 
            layout: "agenda" 
        },
        { 
            id: "timeline",
            label: "Timeline",
            layout: "timeline",
            config: defaultTimelineConfig
        }
    ]
}
~~~

- The [`editorShape`](../../api/config/js_eventcalendar_editorshape_config) property was extended by the new editor type. Starting from v2.0, you can use the ***recurring*** editor type.

~~~jsx title="Before v2.0"
editorShape: [
    ...,
    {
        type: "combo", // "text" | "textarea" | "multiselect" | "color" | "checkbox" | "date" | "radio" | "files" 
        ...,
    },
]
~~~

~~~jsx {} title="From v2.0"
editorShape: [
    ...,
    {
        type: "combo", // "recurring" | "text" | "textarea" | "multiselect" | "color" | "checkbox" | "date" | "radio" | "files" 
        ...,
    },   
]      
~~~

- The [`events`](../../api/config/js_eventcalendar_events_config) property was extended by the new fields. Starting from v2.0, you can use the ***RRULE***, ***STDATE***, ***DTEND*** and ***recurring*** parameters (data fields).

~~~jsx title="Before v2.0"
events: [
    {
        id: "1",
        type: "work",
        // ...
    }, {...}
    // other events data
]
~~~

~~~jsx {6-9} title="From v2.0"
events: [
    {
        id: "1",
        type: "work",
        // ...
        RRULE: "FREQ=WEEKLY;INTERVAL=1;BYDAY=Mo,Tu,We,Th,Fr",
        recurring: true,
        STDATE: new Date("2023-01-27T15:00:00"),
        DTEND: new Date("2023-06-27T15:00:00"),
    }, {...}
    // other events data
]
~~~

#### Methods

- The [`setMode()`](../../api/methods/js_eventcalendar_setmode_method) method was updated:

~~~jsx {} title="Before v2.0"
setMode({ value: "day" }); // value: "day" | "week" | "month" | "year" | "agenda"
~~~

~~~jsx {} title="From v2.0"
setMode({ value: "day" }); // value: "timeline" | "day" | "week" | "month" | "year" | "agenda" | custom_view_id
~~~

## 1.0 -> 1.1

### Api

#### Properties

- The [`mode`](../../api/config/js_eventcalendar_mode_config) property was extended by the new modes. Starting from v1.1, you can use the ***year*** and ***agenda*** modes.

~~~jsx title="Before v1.1"
mode: "day", // "week" | "month" 
~~~

~~~jsx title="From v1.1"
mode: "day", // "week" | "month" | "year" | "agenda"
~~~

- The [`templates`](../../api/config/js_eventcalendar_templates_config) property was extended by the new templates. Starting from v1.1, you can use the ***yearEvent***, ***agendaEvent*** and ***agendaDate*** templates.

~~~jsx title="Before v1.1"
templates: {
    weekEvent: ({ event, calendar }) => {...},
    monthEvent: ({ event, calendar }) => {...},
    multievent: ({ event, calendar }) => {...},
    header: ({ date, dateFormat }) => {...},
    popup: ({ event, calendar }) => {...}
}
~~~

~~~jsx {4-6} title="From v1.1"
templates: {
    weekEvent: ({ event, calendar }) => {...},
    monthEvent: ({ event, calendar }) => {...},
    yearEvent: ({ event, calendar }) => {...},
    agendaEvent: ({ event, calendar }) => {...},
    agendaDate: ({ event, calendar }) => {...},
    multievent: ({ event, calendar }) => {...},
    header: ({ date, dateFormat }) => {...},
    popup: ({ event, calendar }) => {...}
}
~~~

- The [`config`](../../api/config/js_eventcalendar_config_config) property was extended by the new parameter. Starting from v1.1, you can use the ***cellCss*** parameter.

~~~jsx title="Before v1.1"
config: {
    ...,
    views: { 
        day: { ... },
        week: { ... },
        month: { ... }
    }
}
~~~

~~~jsx {6-9} title="From v1.1"
config: {
    ...,
    views: { 
        day: {
            ...,
            cellCss: (date) => {
                ...,
                return string;
            },
        },
        week: { ... },
        month: { ... }
    }
}
~~~

- The [`editorShape`](../../api/config/js_eventcalendar_editorshape_config) property was extended by the new editor types. Starting from v1.1, you can use the ***multiselect*** and ***radio*** editor types. For ***multiselect*** and ***combo*** types you can also customize options using the *template* parameter.

~~~jsx title="Before v1.1"
editorShape: [
    ...,
    {
        type: "combo", 
        key: "priority_key",
        label: "Event priority",
        options: [
            { id: 1, label: "high" },
            { id: 2, label: "medium" },
            { id: 3, label: "low" }
        ],
        config: {
            disabled: false,
            placeholder: "Select priority"
        }
    }
]
~~~

~~~jsx {4,16-20,23-30} title="From v1.1"
editorShape: [
        ...,
        {
            type: "multiselect", // or "combo"
            key: "priority_key",
            label: "Event priority",
            options: [
                { id: 1, label: "high" },
                { id: 2, label: "medium" },
                { id: 3, label: "low" }
            ],
            config: {
                disabled: false,
                placeholder: "Select priority"
            },
            template: (option) => {
                return `<div className="multiselect-wraper">
                    <img src=${option.avatar} alt="" className="multieselectOption-img" />
                    ${option.label} </div>`
            }
        },
        { 
            type: "radio",
            key: "priority",
            label: "Priority",
            options: [
                { id: 1, label: "High" },
                { id: 2, label: "Medium" },
                { id: 3, label: "Low" }
            ]
        }
~~~

#### Methods

- The [`setMode()`](../../api/methods/js_eventcalendar_setmode_method) method was updated:

~~~jsx {} title="Before v1.1"
setMode({ value: "day" }); // value: "day" | "week" | "month" 
~~~

~~~jsx title="From v1.1"
setMode({ value: "day" }); // value: "day" | "week" | "month" | "year" | "agenda"
~~~