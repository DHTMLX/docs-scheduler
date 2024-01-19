---
sidebar_label: Configuration
title: Configuration
description: You can learn about the configuration in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# Configuration

You can configure the *Event Calendar* appearance and functionality via corresponding API. The available parameters will allow you to:

- configure the timetable grid via the [`config`](api/config/js_eventcalendar_config_config.md) property
- configure the editor fields via the [`editorShape`](api/config/js_eventcalendar_editorshape_config.md) property
- configure validation of the editor fields via the [`editorValidation`](api/config/js_eventcalendar_editorvalidation_config.md) property
- set the initial sidebar state via the [`sidebar`](api/config/js_eventcalendar_sidebar_config.md) property
- set the initial view mode via the [`mode`](api/config/js_eventcalendar_mode_config.md) property
- set the initial theme via the [`theme`](api/config/js_eventcalendar_theme_config.md) property
- set the initial date via the [`date`](api/config/js_eventcalendar_date_config.md) property
- set the initial set of colors used in colorpicker via the [`colors`](api/config/js_eventcalendar_colors_config.md) property
- customize the appearance of visual elements via the [`templates`](api/config/js_eventcalendar_templates_config.md) property
    - *Refer to the [**Customisation**](guides/customization.md) section for details!*
- apply the desired locale via the [`locale`](api/config/js_eventcalendar_locale_config.md) property
    - *Refer to the [**Localization**](guides/localization.md) section for details!*
- load data for events and calendars via the [`events`](api/config/js_eventcalendar_events_config.md) and [`calendars`](api/config/js_eventcalendar_calendars_config.md) properties 
    - *Refer to the [**Working with data**](guides/working_with_data.md) section for details!*

## Timetable Grid

To configure the appearance and functionality of *timetable grid*, you can use the [`config`](api/config/js_eventcalendar_config_config.md) property.

### Configuring behaviour

In the object of the [`config`](api/config/js_eventcalendar_config_config.md) parameter you can manage the following behaviour:

- an ability to create new events by drag-n-drop `dragCreate: boolean`
- an ability to reschedule events by resizing `dragResize: boolean`
- an ability to reschedule events by drag-n-drop `dragMove: boolean`
- an ability to display info popup by click `eventInfoOnClick: boolean`
- an ability to open editor by double click `editorOnDblClick: boolean`
- an ability to create new event by double click `createEventOnDblClick: boolean`
- an ability to overlay events `eventsOverlay: boolean`
- an ability to auto save the event data (via the editor) `autoSave: boolean`
- an ability to block all operations with events `readonly: boolean`

~~~jsx {4-12}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    config: {
        dragCreate: true,
        dragResize: true,
        dragMove: true,
        eventInfoOnClick: true,
        editorOnDblClick: true,
        createEventOnDblClick: true,
        eventsOverlay: true,
        autoSave: true,
        readonly: false,
        ...
    },
    // other configuration parameters
});
~~~

### Configuring appearance

In the object of the [`config`](api/config/js_eventcalendar_config_config.md) parameter you can also set the grid appearance:

- a height of the grid header `tableHeaderHeight: number`
- a height of the events `eventHeight: number`
- a step of moving events via drag-n-drop `timeStep: number`
- a start and end time of day `timeRange: [number, number]`
- a duration of the new created events by default `defaultEventDuration: number`

~~~jsx {3-7}
config: {
    ...,
    tableHeaderHeight: 20,
    eventHeight: 50,
    timeStep: 5,
    timeRange: [9, 17],
    defaultEventDuration: 60
}
~~~

### Configuring view modes

In the object of the [`config`](api/config/js_eventcalendar_config_config.md) parameter you can also set the appearance and functionality for each view mode separately. For this, you need to specify the corresponding objects with settings in the **views** array.

#### Day and Week view modes

The **Day** and **Week** view modes can be set in the following way:

- a height of multievents `eventHeight: number` (*common config for all view modes*) 
- enables/disables an ability to overlay events `eventsOverlay: boolean`
- a step of moving events via d-n-d `timeStep: number`
- an array with start and end time of day `timeRange: array`
- a column width of the "hour" scale `hourScaleWidth: number`
- a row height of the "hour" scale `hourHeight: number`
- a space between events (px) `eventMargin: string`
- a right padding of the grid column (px) `columnPadding: string`

~~~jsx {3-10,15-29}
// settings of the "Day" and "Week" modes
const day_and_week_settings = {
    eventHeight: 40,
    eventsOverlay: false, 
    timeStep: 15,
    timeRange: [9, 19],
    hourScaleWidth: 50, 
    hourHeight: 40, 
    eventMargin: "20px", // if "eventsOverlay: false" only
    columnPadding: "150px"
};
// Event Calendar settings
config: {
    ...,
    views: [
        {
            id: "week",
            label: "Week",
            layout: "week",
            config: day_and_week_settings
        },
        { 
            id: "day", 
            label: "Day",
            layout: "day", 
            config: day_and_week_settings, 
        },
        // other view modes settings
    ]
}
~~~

The **Month** view mode can be set in the following way:

- a height of multievents `eventHeight: number` (*common config for all view modes*)
- a min height of a grid cell `dayHeight: number`
- a max number of events per cell `maxEventsPerCell: number`

~~~jsx {3-5,10-18}
// settings of the "Month" mode
const month_settings = {
    eventHeight: 35,
    dayHeight: 60,
    maxEventsPerCell: 4
};
// Event Calendar settings
config: {
    ...,
    views: [
        {
            id: "month",
            label: "Month",
            layout: "month",
            config: month_settings
        },
        // other view modes settings
    ]
}
~~~

The **Timeline** view mode can be set in the following way:

~~~jsx {3-19,24-32}
// settings of the "Timeline" mode
const timeline_settings = {
    colsCount: 90,
    minEventWidth: 50,
    colsWidth: 90,
    minSectionHeight: 100,
    sectionWidth: 158,
    step: [7, "day"],
    key: "section",
    header: [
        { unit: "month", step: 1, format: "MMM" },
        { unit: "day", step: 1, format: "d MMM" },
    ],
    sections: [
        { id: "1", label: "Section 1" },
        { id: "2", label: "Section 2" },
        { id: "3", label: "Section 3" },
    ],
    unassignedCol: true,
};
// Event Calendar settings
config: {
    ...,
    views: [
        {
            id: "month",
            label: "Month",
            layout: "month",
            config: timeline_settings
        },
        // other view modes settings
    ]
}
~~~

## Editor

The *editor* consists of the fields for managing the events data. To configure the editor fields (controls), you can use the [`editorShape`](api/config/js_eventcalendar_editorshape_config.md) property. You can use the following types of the editor fields:

- [**text** and **textarea**](#text-and-textarea-types)
- [**combo** and **multiselect**](#combo-and-multiselect-types)
- [**radio**](#radio-type)
- [**color** and **colorSchema**](#color-and-colorschema-types)
- [**checkbox**](#checkbox-type)
- [**date**](#date-type)
- [**files**](#files-type)
- [**recurring**](#recurring-type)

### Text and Textarea types

The editor fields of **text** and **textarea** types you can set in the following way:

~~~jsx {4-16}
new eventCalendar.EventCalendar("#root", {
    editorShape: [
        ...eventCalendar.defaultEditorShape,
        {
            type: "text", // or "textarea"
            key: "label_key",
            label: "Event label",
            config: { 
                readonly: false,
                focus: true,
                disabled: false,
                placeholder: "Type your tips here",
                type: "text", // or "number"/"password"
                inputStyle: "height: 50px;"
            }
        },
        // settings of other fields
    ]
});
~~~

### Combo and Multiselect types

The editor field of **combo** and **multiselect** types you can set in the following way:

~~~jsx {4-22}
new eventCalendar.EventCalendar("#root", {
    editorShape: [
        ...eventCalendar.defaultEditorShape,
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
                return `<div class="multiselect-wraper">
                    <img src=${option.avatar} alt="" class="multieselectOption-img" />
                    ${option.label} </div>`
            }
        },
        // settings of other fields
    ]
});
~~~

### Radio type

The editor field of **radio** type you can set in the following way:

~~~jsx {4-13}
new eventCalendar.EventCalendar("#root", {
    editorShape: [
        ...eventCalendar.defaultEditorShape,
        { 
            type: "radio",
            key: "priority",
            label: "Priority",
            options: [
                { value: 1, label: "High" },
                { value: 2, label: "Medium" },
                { value: 3, label: "Low" }
            ]
        },
        // settings of other fields
    ]
});
~~~

### Color and ColorSchema types

The editor fields of **color** and **colorSchema** types you can set in the following way:

~~~jsx {5-25,28-35}
new eventCalendar.EventCalendar("#root", {
    editorShape: [
        ...eventCalendar.defaultEditorShape,
        { 
            type: "colorSchema", 
            key: "colorschema_key",
            label: "Event color",
            colors: [
                {
                    background: "#d62b31",
                    border: "#32a852",
                    textColor: "#e5f01d",
                    colorpicker: "background"
                },
                {
                    background: "#ccf5ff",
                    border: "#00CDFF",
                    textColor: "#e5f01d",
                    colorpicker: "background"
                }
            ],
            config: {
                clear: true,
                placeholder: "Select color"
            }
        },
        { 
            type: "color", 
            key: "color_key",
            label: "Color control",
            colors: ["#d62b31", "#32a852", "#e5f01d", "#00CDFF", "#ccf5ff"],
            config: {
                clear: true,
                placeholder: "Select color"
            }
        },
        // settings of other fields
    ]
});
~~~

### Checkbox type

The editor field of **checkbox** type you can set in the following way:

~~~jsx {4-9}
new eventCalendar.EventCalendar("#root", {
    editorShape: [
        ...eventCalendar.defaultEditorShape,
        {
            type: "checkbox", 
            key: "checkbox_key",
            label: "Event checkbox",
            text: "Check this checkbox"
        },
        // settings of other fields
    ]
});
~~~

### Date type

The editor field of **date** type you can set in the following way:

~~~jsx {4-9}
new eventCalendar.EventCalendar("#root", {
    editorShape: [
        ...eventCalendar.defaultEditorShape,
        {
            type: "date", 
            key: "start_date_key",
            label: "Start date",
            time: true
        },
        // settings of other fields
    ]
});
~~~

### Files type

The editor field of **files** type can be set in the following way:

~~~jsx {5-16}
const url = "https://some_backend_url";
new eventCalendar.EventCalendar("#root", {
    editorShape: [
        ...eventCalendar.defaultEditorShape,
        {
            type: "files", 
            key: "attached", // the "attached" key is used when providing the event data via the "events" property
            label: "Attachment",
			uploadURL: url + "/uploads",
			config: {
				accept: "image/*", // "video/*", "audio/*"
				disabled: false,
				multiple: true,
				folder: false
			}
        },
        // settings of other fields
    ]
});
~~~

### Recurring type

The editor field of **recurring** type can be set in the following way:

~~~jsx {4-8,15-18}
const events = [
    {
        ...,
        recurring: true,
        STDATE: new Date("2023-01-27T15:00:00"),
        DTEND: new Date("2023-06-27T15:00:00"),
        // repeat the event on working days only
        RRULE: "FREQ=WEEKLY;INTERVAL=1;BYDAY=Mo,Tu,We,Th,Fr"
    }, {...}
];

new eventCalendar.EventCalendar("#root", {
    events,
    editorShape: [
        {
            type: "recurring", 
            label: "Repeat event"
        },
        // settings of other custom fields
    ]
});
~~~

### Linking editor fields to the data

:::info
To link the editor field to the corresponding event data field, you need to provide a unique **key** for the editor field. The value of this key will be set automatically in the event data object. You can also provide the initial event data via this key.

~~~jsx {5,13,24-25,30-31,38-39}
// editor settings
const editorShape = [ 
    { 
        type: "text",
        key: "label_key",
        label: "Event label",
        config: {
            placeholder: "Enter new label here"
        }
    },
    { 
        type: "color",
        key: "color_key",
        label: "Event color",
        colors: ["#65D3B3", "#FFC975", "#58C3FE"],
        config: {
            clear: true
        }
    }
];
// events data
const events = [
    {
        label_key: "Volvo",
        color_key: "#65D3B3",
        start_date: new Date("2022-04-24T08:00:00"),
        end_date: new Date("2022-04-24T09:00:00")
    },
    {
        label_key: "BMW",
        color_key: "#FFC975",
        start_date: new Date("2022-04-24T10:00:00"),
        end_date: new Date("2022-04-24T11:00:00")
    }
];
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    editorShape,
    events
    // other configuration parameters
});
~~~
:::

:::note
Unless you specify the editor settings via the [`editorShape`](api/config/js_eventcalendar_editorshape_config.md) property, the widget will apply a [**defaultEditorShape**](api/config/js_eventcalendar_editorshape_config.md#default-config) set of parameters!
:::

### Editor fields validation

To validate data entered into editor fields, you can use the [`editorValidation`](api/config/js_eventcalendar_editorvalidation_config.md) property. See the example below for more details: 

~~~jsx {3-5}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    editorValidation: event => {
        if (!event.text) return "Text is required";
    }
	// other configuration parameters
});
~~~

## Sidebar

To configure a sidebar state, you can use the [`sidebar`](api/config/js_eventcalendar_sidebar_config.md) property. There are 3 available states:

- `sidebar: { show: true }` - the sidebar is shown (a toggle button for switching sidebar is shown)
- `sidebar: { show: false }` - the sidebar is hidden (a toggle button for switching sidebar is shown)
- `sidebar: null` - the sidebar and toggle button are hidden

To provide the initial data for calendars (event types) located on the sidebar, you can use the [`calendars`](api/config/js_eventcalendar_calendars_config.md) property

~~~jsx {3-4}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    sidebar: { show: false }, // the sidebar is hidden initially
    calendars: [ // data for calendars (event types) located on sidebar
        {
            id: "rest",
            label: "Custom Rest",
            readonly: true,
            active: true,
            color: {
                background: "#EDD1EC",
                border: "#AD44AB",
                textColor: "#3e98db"
            }
        },
        {
            id: "movie",
            label: "Custom Movie",
            readonly: false,
            active: false,
            color: {
                background: "#CEEDC3",
                border: "#77D257",
                textColor: "#3e98db"
            }
        }
    ]
    // other configuration parameters
});
~~~

## View Modes

To set an initial view mode, you can use the [`mode`](api/config/js_eventcalendar_mode_config.md) property. There are 6 default view modes:

- `mode: "day"` - the "Day" view mode
- `mode: "week"` - the "Week" view mode
- `mode: "month"` - the "Month" view mode
- `mode: "year"` - the "Year" view mode
- `mode: "agenda"` - the "Agenda" view mode
- `mode: "timeline"` - the "Timeline" view mode
- `mode: custom_view_id` - the custom view mode

~~~jsx {3}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    mode: "timeline", // the "Timeline" mode is displayed initially
    // other configuration parameters
});
~~~

:::info
Use the `config.views` property to set a custom view mode
:::

## Initial Date

To set (select) an initial date, you can use the [`date`](api/config/js_eventcalendar_date_config.md) property:

- `date: new Date("2022-04-28 09:00:00")` - an initially selected date

~~~jsx {3}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    date: new Date("2022-04-28T09:00:00"), // the initially selected date
    // other configuration parameters
});
~~~

## Example

In this snippet you can see how to configure Event Calendar:

<iframe src="https://snippet.dhtmlx.com/qw45r367?mode=result&tag=event_calendar" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
