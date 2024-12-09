---
sidebar_label: Views
title: Views
description: You can learn about the available Views in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# Views

The DHTMLX Event Calendar offers six built-in views: **day**, **week**, **month**, **year**, **agenda**, and **timeline**. These views can be specified in the `views` property of the [configuration object](api/config/js_eventcalendar_config_config.md) as an array. The calendar can dynamically switch between these views, enabling flexible navigation for end-users.

Each view requires three essential properties:

- **id** - API name for programmatic access
- **label** - display name shown in the view control at the top-right of the calendar
- **layout** - reference to the base view (e.g., `day`, `week`)

~~~jsx
const calendar = new eventCalendar.EventCalendar("#root", {
    config: {
        views: [
            {
                id: "week",
                label: "Week",
                layout: "week"
            },
            {
                id: "day",
                label: "Day",
                layout: "day"
            },
            {
                id: "month",
                label: "Month",
                layout: "month",
            },
            {
                id: "year",
                label: "Year",
                layout: "year"
            },
            {
                id: "agenda",
                label: "Agenda",
                layout: "agenda",
            }
        ]
    },
    events: [],
    date: new Date(),
});
~~~

By default, the available views are displayed in the top-right of the user interface, accessible through the view selection control. Views appear in the order they are defined in the `views` configuration array. The appearance of the view selector can be further customized using the [`viewControl`](api/config/js_eventcalendar_config_config.md/#:~:text=viewControl%20%2D%20(optional)%20defines%20a%20control%20to%20switch%20through%20the%20view%20modes.) property.

Optionally, each view can accept it's own `config` object with extra settings allowing configuring the view:

~~~jsx
const calendar = new eventCalendar.EventCalendar("#root", {
    config: {
        views: [
            {
                id: "day",
                label: "Day",
                layout: "day",
                config: [
                    timeRange: [8, 17]
                ]
            }
        ]
    },
    events: [],
    date: new Date(),
});
~~~

Settings that should be applied to multiple views can be specified at the global config level:

~~~jsx
const calendar = new eventCalendar.EventCalendar("#root", {
    config: {
        timeRange: [8, 17],
        views: [
            {
                id: "day",
                label: "Day",
                layout: "day"
            },
            {
                id: "week",
                label: "Week",
                layout: "week"
            }
        ]
    },
    events: [],
    date: new Date(),
});
~~~

And vice-versa, view-level settings can override the global config:

~~~jsx
const calendar = new eventCalendar.EventCalendar("#root", {
    config: {
        timeRange: [8, 17],
        views: [
            {
                id: "day",
                label: "Day",
                layout: "day"
            },
            {
                id: "week",
                label: "Week",
                layout: "week",
                config: {
                    readonly: true,
                    timeRange: [0,24]
                }
            }
        ]
    },
    events: [],
    date: new Date(),
});
~~~

For more details about the `config` object, please refer to the [Configuration Guide](guides/configuration.md/#configuring-view-modes)

## Built-in Views

Below is a detailed list of default views, including their configuration options.

### Day

The **Day** view shows events for a single day.

~~~jsx
config: {
    views: [
        { id: "day", label: "Day", layout: "day" }
    ]
}
~~~

Extended configuration:

~~~jsx
{
    id: "day",
    label: "Day",
    layout: "day",
    config: {
        dateTitle?: (currentDate: Date, bounds: [Date, Date]) => string;
        getBounds?: (date: Date, config: Config) => [Date, Date];
        getNext?: (date: Date, config: Config) => Date;
        getPrev?: (date: Date, config: Config) => Date;

        cellCss?: (date: Date) => string;
        template?: (event: Event) => string;

        eventHeight?: number;
        timeRange?: [number, number];
        timeStep?: number;
        eventsOverlay?: false;
        eventVerticalSpace?: number;
        eventHorizontalSpace?: string;
        columnPadding?: string;
        weekStartsOn?: number;
    }
}
~~~

You can find more detailed description of the configuration object [here](api/config/js_eventcalendar_config_config.md/#:~:text=To%20configure%20a%20custom%20view%20mode%20(or%20modes)%2C%20you%20can%20specify%20the%20following%20parameters%3A)

### Week

The **Week** view displays events for an entire week:

~~~jsx
config: {
    views: [
        { id: "week", label: "Week", layout: "week" }
    ]
}
~~~

Extended configuration:

~~~jsx
{
    id: "week",
    label: "Week",
    layout: "week",
    config: {
        dateTitle?: (currentDate: Date, bounds: [Date, Date]) => string;
        getBounds?: (date: Date, config: Config) => [Date, Date];
        getNext?: (date: Date, config: Config) => Date;
        getPrev?: (date: Date, config: Config) => Date;

        cellCss?: (date: Date) => string;
        template?: (event: Event) => string;

        eventHeight?: number;
        timeRange?: [number, number];
        timeStep?: number;
        eventsOverlay?: false;
        eventVerticalSpace?: number;
        eventHorizontalSpace?: string;
        columnPadding?: string;
        weekStartsOn?: number;
    }
}
~~~


You can find more detailed description of the configuration object [here](api/config/js_eventcalendar_config_config.md/#:~:text=To%20configure%20a%20custom%20view%20mode%20(or%20modes)%2C%20you%20can%20specify%20the%20following%20parameters%3A)

### Month

The **Month** view organizes events by calendar months:

```
config: {
    views: [
        { id: "month", label: "Month", layout: "month" }
    ]
}
```

Extended configuration:

~~~jsx
{
    id: "month",
    label: "Month",
    layout: "month",
    config: {
        dateTitle?: (currentDate: Date, bounds: [Date, Date]) => string;
        getBounds?: (date: Date, config: Config) => [Date, Date];
        getNext?: (date: Date, config: Config) => Date;
        getPrev?: (date: Date, config: Config) => Date;

        weekStartsOn?: number;
        maxEventsPerCell?: number;
        eventVerticalSpace?: number;
    }
}
~~~


You can find more detailed description of the configuration object [here](api/config/js_eventcalendar_config_config.md/#:~:text=To%20configure%20a%20custom%20view%20mode%20(or%20modes)%2C%20you%20can%20specify%20the%20following%20parameters%3A)

### Year

The **Year** view provides an overview of events across a year:

~~~jsx
config: {
    views: [
        { id: "year", label: "Year", layout: "year" }
    ]
}
~~~

Extended configuration:

~~~jsx
{
    id: "year",
    label: "Year",
    layout: "year",
    config: {
        dateTitle?: (currentDate: Date, bounds: [Date, Date]) => string;
        getBounds?: (date: Date, config: Config) => [Date, Date];
        getNext?: (date: Date, config: Config) => Date;
        getPrev?: (date: Date, config: Config) => Date;
    }
}
~~~


You can find more detailed description of the configuration object [here](api/config/js_eventcalendar_config_config.md/#:~:text=To%20configure%20a%20custom%20view%20mode%20(or%20modes)%2C%20you%20can%20specify%20the%20following%20parameters%3A)

### Agenda

The **Agenda** view lists upcoming events starting from the current date:


~~~jsx
config: {
    views: [
        { id: "agenda", label: "Agenda", layout: "agenda" }
    ]
}
~~~

Extended configuration:

~~~jsx
{
    id: "agenda",
    label: "Agenda",
    layout: "agenda",
    config: {
        dateTitle?: (currentDate: Date, bounds: [Date, Date]) => string;
        getBounds?: (date: Date, config: Config) => [Date, Date];
        getNext?: (date: Date, config: Config) => Date;
        getPrev?: (date: Date, config: Config) => Date;
    }
}
~~~


You can find more detailed description of the configuration object [here](api/config/js_eventcalendar_config_config.md/#:~:text=To%20configure%20a%20custom%20view%20mode%20(or%20modes)%2C%20you%20can%20specify%20the%20following%20parameters%3A)

### Timeline

The **Timeline**  view is ideal for visualizing events across multiple resources or time units:


~~~jsx
config: {
    views: [
        { id: "timeline", label: "Timeline", layout: "timeline" }
    ]
}
~~~

Extended configuration:

~~~jsx
{
    id: "timeline",
    label: "Timeline",
    layout: "timeline",
    config: {
        dateTitle?: (currentDate: Date, bounds: [Date, Date]) => string;
        getBounds?: (date: Date, config: Config) => [Date, Date];
        getNext?: (date: Date, config: Config) => Date;
        getPrev?: (date: Date, config: Config) => Date;

        colsCount?: number;
        colsWidth?: number;
        minEventWidth?: number;
        eventVerticalSpace?: number;
        minSectionHeight?: number;
        sectionWidth?: number;
        step?: [number, "day" | "week" | "month" | "year" | "hour" | "minute"];
        header?: ITimelineHeader[];
        sections?: ISection[];
        key?: string;
        unassignedCol?: boolean;
    }
}
~~~

Where `ITimelineHeader` and `ISection` are defined as following:

~~~jsx
export interface ITimelineHeader {
    unit: string;
    format: string;
    step: number;
}

export interface ISection {
    id: TID;
    label?: string;
    [key: string]: any;
}
~~~


You can find more detailed description of the configuration object [here](api/config/js_eventcalendar_config_config.md/#:~:text=To%20configure%20a%20custom%20view%20mode%20(or%20modes)%2C%20you%20can%20specify%20the%20following%20parameters%3A)

### Custom Views

Custom views can be created by extending one of the built-in views and overriding its configuration.

A fundamental customization available for all views is modifying the displayed date range and navigation steps. This is achieved by defining the `getBounds`, `getNext`, and `getPrev` properties within the views `config`:

- `getBounds?: (date: Date, config: Config) => [Date, Date]` - this function takes a date and returns an array with two dates that define the time range to be displayed in the view..
- `getNext?: (date: Date, config: Config) => Date` - this function is triggered when the user clicks the "Next" button in the calendar header to move to the next interval. It takes the current date of the Event Calendar as an argument and must return the `start date` of the next interval. 
- `getPrev?: (date: Date, config: Config) => Date` - this function is triggered when the user clicks the "Previous" button in the calendar header to move to the previous interval. It takes the current date of the Event Calendar as an argument and must return the `start date` of the previous interval.

The result of the `getNext` and `getPrev` functions is passed to the `getBounds` method to calculate the new interval.

In all cases, the `config` of the view is passed as the second argument to these functions, allowing for more flexible and context-aware customizations.

For example, you can create a custom 5-day view by taking the `week` base view and redefining the `getBounds` method. This method adjusts the displayed range to only show Monday to Friday.

~~~jsx
const { dateFns, EventCalendar } = eventCalendar;
const calendar = new EventCalendar("#root", {
    config: {
        views: [
            {
                id: "custom-week",
                label: "Custom Week",
                layout: "week",
                config: {
                    getBounds: (date) => {
                        const start = dateFns.startOfWeek(date, { weekStartsOn: 1 });
                        return [start, dateFns.addDays(start, 4)];
                    }
                }
            }
        ]
    },
    mode: "custom-week",
    date: new Date("2025-02-12T00:00:00")
});
~~~

**Related sample:** [Event Calendar. 5-Day Workweek View](https://snippet.dhtmlx.com/af32gon8?tag=event_calendar)


Notice that we didn't redefine the `getNext` and `getPrev` methods. This is because the default behavior of the base week view works seamlessly, moving forward or backward by one week. If you need custom navigation behavior, you can override these methods.

Consider another example, Two-Week View with the approrpriate navigation step. In this case you need to override the navigation methods (`getNext` and `getPrev`) in addition to `getBounds`.

~~~jsx
const { dateFns, EventCalendar } = eventCalendar;
const calendar = new EventCalendar("#root", {
    config: {
        views: [
            {
                id: "two-weeks",
                label: "Two Weeks",
                layout: "week",
                config: {
                    getBounds: (date) => {
                        const start = dateFns.startOfWeek(date);
                        return [start, dateFns.addDays(start, 13)];
                    },
                    getNext: (date) => dateFns.addDays(date, 14),
                    getPrev: (date) => dateFns.addDays(date, -14)
                }
            }
        ]
    },
    mode: "two-weeks",
    date: new Date("2025-02-12T00:00:00")
});
~~~

**Related sample:** [Event Calendar. 2-Week View](https://snippet.dhtmlx.com/jst2oh35?tag=event_calendar)

#### Customizing the Agenda view

By default, the **Agenda** view displays upcoming events starting from the active date. You can redefine this behavior to display events for an entire month, with navigation moving one month at a time.

~~~jsx
const { dateFns, EventCalendar } = eventCalendar;
const calendar = new EventCalendar("#root", {
    config: {
        views: [
            {
                id: "agenda-month",
                label: "Monthly Agenda",
                layout: "agenda",
                config: {
                    dateTitle: (date) => dateFns.format(date, "MMMM yyyy"),
                    getBounds: (date) => {
                        const start = dateFns.startOfMonth(date);
                        return [start, dateFns.endOfMonth(start)];
                    },
                    getNext: (date) => dateFns.addMonths(date, 1),
                    getPrev: (date) => dateFns.addMonths(date, -1)
                }
            }
        ]
    },
    mode: "agenda",
    date: new Date("2025-02-12T00:00:00")
});
~~~

**Related sample:** [Event Calendar. Customized Agenda View](https://snippet.dhtmlx.com/wo24gdez?tag=event_calendar)

#### Customizing the Timeline view

The **Timeline** view can be customized to show data at finer time intervals. For instance, you can create a timeline that breaks the day into hours and groups events by sections.

~~~jsx
const calendar = new EventCalendar("#root", {
    config: {
        views: [
            {
                id: "hour_timeline",
                label: "Hour Timeline",
                layout: "timeline",
                config: {
                    unassignedCol: true,
                    key: "sectionId",
                    sections: [
                        { id: "1", label: "Section 1" },
                        { id: "2", label: "Section 2" }
                    ],
                    step: [1, "hour"], // Hourly steps
                    header: [
                        { unit: "day", step: 1, format: "d MMM" },
                        { unit: "hour", step: 1, format: "H" }
                    ]
                }
            }
        ]
    },
    mode: "hour_timeline",
    date: new Date("2025-02-12T00:00:00")
});
~~~

**Related sample:** [Event Calendar. Customized Timeline View](https://snippet.dhtmlx.com/85jez8mn?tag=event_calendar)
