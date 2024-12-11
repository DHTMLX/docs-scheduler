---
sidebar_label: View Configuration
title: View Configuration
description: You can learn about the available Views in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# View Configuration

The DHTMLX Event Calendar provides six built-in views: **day**, **week**, **month**, **year**, **agenda**, and **timeline**. To configure these views, use the [`config.views`](api/config/js_eventcalendar_config_config.md) property. You can flexible navigate between these views dynamically.

Each view requires three essential properties:

- **id** - the view id used for programmatic access
- **label** - the label displayed in the change view control
- **layout** - the predefined layout of the view mode. Here you can specify the following values: *"year" | "month" | "week" | "day" | "agenda" | "timeline"*

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
                layout: "month"
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
            }
        ]
    },
    events: [/* event data */],
    date: new Date()
});
~~~

By default, the available view controls are displayed in the top-right part of the user interface. View controls appear in the order they are defined in the `views` configuration array. You can use the [`config.viewControl`](api/config/js_eventcalendar_config_config.md) property to change the appearance of a view control.

Optionally, each view can accept it's own `config` object with extra settings, that allow you to configure a view:

~~~jsx {8-10}
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
    date: new Date()
});
~~~

Settings that should be applied to multiple views can be specified at the global `config`:

~~~jsx {2-16}
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
    events: [/* event data */],
    date: new Date()
});
~~~

And vice-versa, view-level settings can override the global `config`:

~~~jsx {14-17}
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
    date: new Date()
});
~~~

For more details about the `config` object, please refer to the [Configuration Guide](guides/configuration.md/#configuring-view-modes).

## Built-in Views

Below is the detailed list of default views, including their configuration options.

### Day

The **Day** view shows events for a single day.

#### Short configuration

~~~jsx
config: {
    views: [
        { id: "day", label: "Day", layout: "day" }
    ]
}
~~~

#### Extended configuration

~~~jsx
config: {
    views: [
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
    ]
}
~~~

You can find more detailed description of the configuration object [here](api/config/js_eventcalendar_config_config.md).

### Week

The **Week** view displays events for the entire week.

#### Short configuration

~~~jsx
config: {
    views: [
        { id: "week", label: "Week", layout: "week" }
    ]
}
~~~

#### Extended configuration

~~~jsx
config: {
    views: [
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
    ]
}
~~~

You can find more detailed description of the configuration object [here](api/config/js_eventcalendar_config_config.md).

### Month

The **Month** view displays events for the entire month.

#### Short configuration

~~~jsx
config: {
    views: [
        { id: "month", label: "Month", layout: "month" }
    ]
}
~~~

#### Extended configuration

~~~jsx
config: {
    views: [
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
    ]
}
~~~

You can find more detailed description of the configuration object [here](api/config/js_eventcalendar_config_config.md).

### Year

The **Year** view displays events for the entire year.

#### Short configuration

~~~jsx
config: {
    views: [
        { id: "year", label: "Year", layout: "year" }
    ]
}
~~~

#### Extended configuration

~~~jsx
config: {
    views: [
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
    ]
}
~~~

You can find more detailed description of the configuration object [here](api/config/js_eventcalendar_config_config.md).

### Agenda

The **Agenda** view lists upcoming events starting from the current date.

#### Short configuration

~~~jsx
config: {
    views: [
        { id: "agenda", label: "Agenda", layout: "agenda" }
    ]
}
~~~

#### Extended configuration

~~~jsx
config: {
    views: [
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
    ]
}
~~~

You can find more detailed description of the configuration object [here](api/config/js_eventcalendar_config_config.md).

### Timeline

The **Timeline** view is ideal for visualizing events across multiple resources or time units.

#### Short configuration

~~~jsx
config: {
    views: [
        { id: "timeline", label: "Timeline", layout: "timeline" }
    ]
}
~~~

#### Extended configuration

~~~jsx
config: {
    views: [
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
    ]
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

You can find more detailed description of the configuration object [here](api/config/js_eventcalendar_config_config.md).

### Custom Views

Custom views can be created by extending one of the built-in views and overriding its configuration.

A fundamental customization available for all views. This is achieved by defining the `getBounds`, `getNext`, and `getPrev` properties within the views `config`:

- `getBounds?: (date: Date, config: Config) => [Date, Date]` - this function takes a date and returns an array with two dates that define the time range to be displayed in the view..
- `getNext?: (date: Date, config: Config) => Date` - this function is triggered when the user clicks the "Next" button in the calendar header to move to the next interval. It takes the current date of the Event Calendar as an argument and must return the `start date` of the next interval. 
- `getPrev?: (date: Date, config: Config) => Date` - this function is triggered when the user clicks the "Previous" button in the calendar header to move to the previous interval. It takes the current date of the Event Calendar as an argument and must return the `start date` of the previous interval.

The result of the `getNext` and `getPrev` functions is passed to the `getBounds` method to calculate the new interval.

In all cases, the `config` of the view is passed as the second argument to these functions, allowing for more flexible and context-aware customizations.

For example, you can create a custom 5-day view by taking the `week` base view and redefining the `getBounds` method. This method adjusts the displayed range to only show **Monday** to **Friday**.

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

Note that we didn't redefine the `getNext()` and `getPrev()` methods. This is because the default behavior of the base week view works seamlessly, moving forward or backward by one week. If you need to implement custom navigation behavior, you can override these methods.

Consider another example, Two-Week View with the appropriate navigation step. In this case you need to override the navigation methods (`getNext()` and `getPrev()`) in addition to `getBounds()`.

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
