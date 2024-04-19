---
sidebar_label: config
title: config Config
description: You can learn about the config config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# config

### Description

@short: Optional. An object of the Event Calendar configuration

### Usage

~~~jsx {}
config?: {
    dragCreate?: boolean, 
    dragResize?: boolean,
    dragMove?: boolean,

    eventInfoOnClick?: boolean, 
    editorOnDblClick?: boolean,
    createEventOnDblClick?: boolean,

    eventsOverlay?: boolean,
    autoSave?: boolean,
    readonly?: boolean,
    dimPastEvents?: boolean,
    dateClick?: boolean | string, // (true/false or "day" | "week" | "month" | "year" | "agenda" | "timeline")
    dateTitle?: (date, [start, end]) => string, 

    tableHeaderHeight?: number,
    eventHeight?: number,
    eventVerticalSpace?: number, // for the "day" | "week" | "month" | "timeline" view modes only

    timeStep?: number,
    timeRange?: [number, number],
    defaultEventDuration?: number,

    editorValidation?: (event: object) => string | false,
    calendarValidation?: (calendar: object) => string | false,

    viewControl?: string, // "auto" | "toggle" | "dropdown" | "none"
    views?: [
        {
            id: string | number,
            label: string,
            layout: string, // "day" | "week" | "month" | "year" | "agenda" | "timeline"
            config?: {
                // Common settings
                eventHeight?: number, 
                eventVerticalSpace?: number, // for the "day" | "week" | "month" | "timeline" view modes separately
                cellCss?: (date) => string,
                dateTitle?: (date, [start, end]) => string,

                // Day and Week view modes settings
                eventsOverlay?: boolean,
                timeStep?: number,
                timeRange?: array,
                // eventMargin?: string, Deprecated !!!
                eventHorizontalSpace?: number, 
                columnPadding?: string,

                // Month view mode settings
                maxEventsPerCell?: number,

                // Timeline view mode settings
                colsCount?: number,
                colsWidth?: number,
                eventHeight?: number,
                minEventWidth?: number,
                minSectionHeight?: number,
                sectionWidth?: number,
                key?: string, // "section" by default
                unassignedCol?: boolean,

                getBounds?: (date: Date, config: object) => [Date, Date],
                getNext?: (date: Date, config: object) => Date,
                getPrev?: (date: Date, config: object) => Date,

                step?: array, // [number, "day" | "week" | "month" | "year" | "hour" | "minute"]
                header?: [
                    {
                        unit: string, // "year" | "month" | "quarter" | "month" | "week" | "day" | "hour" | "minute"
                        format: string, // date-fns format
                        step: number
                    },
                    // other unit headers config
                ],
                sections?: [
                    {
                        id: string | number,
                        label: string,
                        // ... other custom parameters
                    },
                    // other sections config
                ],
            },
        },
        // other views config
    ]        
};
~~~

### Parameters

In the **config** object you can specify the following parameters:

- `dragCreate` - (optional) enables/disables an ability to create new events via d-n-d
- `dragResize` - (optional) enables/disables an ability to resize events via d-n-d
- `dragMove` - (optional) enables/disables an ability to move events via d-n-d
- `eventInfoOnClick` - (optional) enables/disables an ability to show info popup by click
- `editorOnDblClick` - (optional) enables/disables an ability to open editor by double click
- `createEventOnDblClick` - (optional) enables/disables an ability to create an event by double click
- `eventsOverlay` - (optional) enables/disables an ability to overlay events
- `autoSave` - (optional) enables/disables an ability to auto save event data (via the editor)
- `readonly` - (optional) enables/disables an ability to perform operations on events
- `dimPastEvents` - (optional) enables/disables an ability to dim past events
- `dateClick` - (optional) defines a behavior of clicking on the date in a grid cell in the following way:
    - ***true/false*** - enables/disables an ability to click on the date in a grid cell to go to the corresponding day
    - ***"day" | "week" | "month" | "year" | "agenda" | "timeline"*** - a view mode to be open when a user clicks on a grid cell
- `dateTitle`- (optional) defines a date title that displays on toolbar. The callback function is called with a current date and an array with date range (start-end), and must return a string value of the date title:

~~~jsx {}
dateTitle: (date, [start, end]) => 
    `${format(start, "do")} - ${format(end, "do")} ${format(date, "LLL")}`
~~~

- `tableHeaderHeight` - (optional) a height of the Event Calendar header (px)
- `eventHeight` - (optional) a height of the Event Calendar multievents
- `eventVerticalSpace` - (optional) a custom vertical space between events in the "week", "day", "timeline" and "month" views
- `timeStep` - (optional) a step of moving an event via d-n-d
- `timeRange` - (optional) an array with start and end time of day in the "day" and "week" modes (*0-24*)
- `defaultEventDuration` - (optional) a duration of the new created event by default (without taking into account creating an event via d-n-d)
- `editorValidation` - (optional) a callback that returns and applies validation rules to editor fields. The callback is called with the event data object:

~~~jsx {}
editorValidation: event => {
    console.log(event);
    if (!event.text) return "Text is required";
}
~~~

- `calendarValidation` - (optional) a callback that returns and applies validation rules to calendar fields. The callback is called with the calendar data object:

~~~jsx {}
calendarValidation: calendar => {
    console.log(calendar);
    if (!calendar.text) return "Text is required";
}
~~~

- `cellCss` - (optional) a custom CSS selector to be applied to a grid cell. This property is used in any of view mode configuration objects to apply a custom style to the grid cell
- `viewControl` - (optional) defines a control to switch through the view modes. Here you can specify the following values: *"auto" | "toggle" | "dropdown" | "none"*. The *auto* value is set by default
- `views` - (optional) an array of configuration objects of the specific (custom) view modes. For each view mode you can specify the following settings:
    - `id` - (required) an ID of the view mode
    - `label` - (required) a label of the view mode
    - `layout` - (required) a predefined layout of the view mode. Here you can specify the following values: *"year" | "month" | "quarter" | "month" | "week" | "day" | "hour" | "minute"*
    - `config` - (optional) an object of the custom view mode settings

:::note
To configure a custom view mode (or ***modes***), you can specify the following parameters:

<h4 style = {{color: "green"}}>Common settings</h4>

- `eventHeight?: number` - (optional) a height of the Event Calendar multievents
- `eventVerticalSpace?: number` - (optional) a custom vertical space between events. You can specify it for the "week", "day", "timeline" and "month" view modes separately
- `cellCss?: (date) => string` - (optional) a CSS selector to be applied to a grid cell
- `dateTitle?: (date, [start, end]) => string` - (optional) defines a date title that displays on toolbar. The callback function takes a current date and an array with date range (start-end), and must return a string value of the date title. You can specify the **dateTitle** property for each view modes separately

<h4 style = {{color: "green"}}>"Day" and "Week" view modes settings</h4>

- `eventsOverlay?: boolean` - (optional) enables/disables an ability to overlay events
- `timeStep?: number` - (optional) a step of moving an event via d-n-d
- `timeRange?: array` - (optional) an array with start and end time of day
- `eventMargin?: string` - (optional) deprecated property
- `eventHorizontalSpace?: number` - (optional) a custom horizontal space between events. To use this parameter, you need to set ***eventsOverlay*** to ***false***
- `columnPadding?: string` - (optional) a right padding of the grid column (*px*)

<h4 style = {{color: "green"}}>"Month" view mode settings</h4>

- `maxEventsPerCell?: number` - (optional) a max number of events per cell

<h4 style = {{color: "green"}}>"Timeline" view mode settings</h4>

- `colsCount?: number` - a number of columns
- `colsWidth?: number` - a column width
- `eventHeight?: number` - a column height
- `minEventWidth?: number` - an event min height
- `minSectionHeight?: number` - a timeline section min height
- `sectionWidth?: number` - a timeline section width
- `key?: string` - a key used to bind events to the timeline mode. The **section** key is used by default
- `unassignedCol?: boolean` - enables/disables a separate column for unassigned events

- `getBounds?: (date: Date) => [Date, Date]` - the function takes a date and must return an array with two dates which will define the time range displayed in the Timeline mode. For instance, if the Timeline mode is set to display 7 days, Monday to Sunday, for any date passed as an argument, the **getBounds()** function must return an array containing the date of the Monday of the same week and the date after the Sunday - so that the range would include Sunday:

~~~jsx {11-15}
// helper
const getMonday = (date) => {
    const newDate = new Date(date);
    const day = date.getDay();
    const diff = date.getDate() - day + (day == 0 ? -6 : 1);
    return new Date(newDate.setDate(diff));
};

// ...,
views: [
    // ...,
    getBounds: (date) => {
        const weekStart = getMonday(date);
        return [weekStart, new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + 7)];
    },
]
~~~

- `getNext?: (date: Date) => Date` - the function is called when the user clicks on the "Next" button in the calendar header in order to switch the Timeline mode to the next interval. It takes the current date of the EventCalendar as an argument and must return the *start date* of the next interval of the Timeline mode (i.e. next Monday for Weekly timeline, or next day for daily calendar). The produced date will be later used as an argument for the **getBounds()** function in order to calculate new interval for the Timeline mode. For instance, weekly Timeline mode shows week Monday-Sunday in the following way:

~~~jsx {}
// ...,
getNext: (date) => {
    return  new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);
},
~~~

- `getPrev?: (date: Date) => Date` - the function is called when the user clicks on the "Previous" button in the calendar header in order to switch the Timeline mode to the previous interval. It takes the current date of the EventCalendar as an argument and must return the *start date* of the next interval of the Timeline mode. The produced date will be later used as an argument for the **getBounds()** function in order to calculate new interval for the Timeline mode. For instance, weekly Timeline mode shows week Monday-Sunday in the following way:

~~~jsx {}
// ...,
getPrev: (date) => {
   return  new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
},
~~~

- `step?: array` - defines a time duration of one column. In this array you can specify a number of time duration and a time value in the following way:

~~~jsx {}
// ...,
step: [8, "hour"], // "day" | "week" | "month" | "year" | "hour" | "minute"
~~~

- `header?: array` - defines headers for the Timeline grid. In this array you can specify objects with the following parameters:
    - `unit: string` - a timeline unit. Here you can specify one of the following values:  *"year" | "month" | "quarter" | "month" | "week" | "day" | "hour" | "minute"*
    - `format: string` - a time format (use a [date-fns](https://date-fns.org/) format)
    - `step: number` - a time duration

~~~jsx {}
// ...,
header: [
    {
        unit: "month", // "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute"
        format: 'yyyy-MM-dd',
        step: 3
    },
    { ... }
],
~~~

- `sections?: array` - defines sections for the Timeline grid. In this array you can specify objects with the following parameters:
    - `id: string | number` - a section ID
    - `label: string` - a section label
    - `custom: any` - any other custom parameters
  
~~~jsx {}
// ...,
sections: [
    {
        label: "Andy Warh",
        id: "1",
        img: "../src/codebase/data/common/img/02/avatar_02.jpg",
        // ...,
    },
    { ... }
],
~~~
:::

### Default config

~~~jsx {}
const defaultWeekConfig = {
    eventHorizontalSpace: 3,
    columnPadding: "8px",
    
};

const defaultMonthConfig = {
    maxEventsPerCell: 4,
};

const defaultTimelineConfig = {
    colsCount: 90,
    minEventWidth: 50,
    colsWidth: 90,
    minSectionHeight: 100,
    sectionWidth: 158,
    step: [1, "day"],
    key: "section",
    header: [
        { unit: "month", step: 1, format: "MMM" },
        { unit: "day", step: 1, format: "d MMM" },
    ],
    sections: [
        { id: "1", label: "Section 1" },
        { id: "2", label: "Section 2" },
        { id: "3", label: "Section 3" },
        { id: "4", label: "Section 4" },
        { id: "5", label: "Section 5" },
        { id: "6", label: "Section 6" },
        { id: "7", label: "Section 7" },
        { id: "8", label: "Section 8" },
        { id: "9", label: "Section 9" },
    ],
    unassignedCol: false,
};

const defaultConfig = {
    dragCreate: true,
    dragResize: true,
    dragMove: true,

    eventInfoOnClick: true,
    editorOnDblClick: true,
    createEventOnDblClick: true,

    eventsOverlay: false,
    autoSave: true,
    readonly: false,

    tableHeaderHeight: 32,
    eventHeight: 24,
    eventVerticalSpace: 6,

    timeStep: 5,
    timeRange: [0, 24],
    defaultEventDuration: 60,
    
    viewControl: "auto",

    views: [
        {
            id: "week",
            label: "Week",
            config: defaultWeekConfig,
            layout: "week"
        },
        { 
            id: "day", 
            label: "Day", 
            config: defaultWeekConfig, 
            layout: "day"
        },
        {
            id: "month",
            label: "Month",
            config: defaultMonthConfig,
            layout: "month"
        },
        { id: "year", label: "Year", layout: "year" },
        { id: "agenda", label: "Agenda", layout: "agenda" },
    ],
};
~~~

:::info
To set the **config** property dynamically, you can use the 
[`setConfig()`](api/methods/js_eventcalendar_setconfig_method.md) method
:::

### Example

~~~jsx {3-40}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    config: {
        autoSave: false,
        dragResize: false,
        readonly: true,
        dragMove: false,
        viewControl: "toggle",
        dimPastEvents: true,
        eventVerticalSpace: 8,
        dateTitle: (date, [start, end]) => `${format(start, "do")} - ${format(end, "do")} ${format(date, "LLL")}`,
        editorValidation: event => {
            console.log(event);
            if (!event.text) return "Text is required";
        },
        calendarValidation: calendar => {
            console.log(calendar);
            if (!calendar.text) return "Text is required";
        },
        views: [
            {
                id: "timeline",
                label: "Timeline",
                layout: "timeline",
                config: {
                    unassignedCol: true,
                    sections: [
                        {
                            label: "Andy Warh",
                            id: "1",
                            img: "../src/data/common/img/01/avatar_01.jpg",
                        },
                        {
                            label: "Nataly Tamer",
                            id: "2",
                            img: "../src/data/common/img/02/avatar_02.jpg",
                        },
                        // other sections config
                    ],
                },
            },
            // other custom views config
        ],
    },
    // other configuration parameters
});
~~~

**Related sample:** [Event Calendar. Timeline and Custom view modes](https://snippet.dhtmlx.com/dmoijc47?tag=event_calendar)

**Change log:**

- The ***dateTitle***, ***eventVerticalSpace*** and ***eventHorizontalSpace*** properties were added in v2.1
- The ***eventMargin*** property was deprecated in v2.1
- The ***calendarValidation*** property was added in v2.2
