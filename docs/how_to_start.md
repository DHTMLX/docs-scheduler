---
sidebar_label: How to start
title: How to Start
description: You can explore how to start working with DHTMLX Event Calendar in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# How to start

This clear and comprehensive tutorial will guide your through the steps you need to take in order to get a full-functional Event Calendar on a page.

## Step 1. Including source files

Start from creating an HTML file and call it *index.html*. Then proceed to include Event Calendar source files into the created file.

There are two necessary files:

- the *JS* file of Event Calendar
- the *CSS* file of Event Calendar

~~~html {5-6} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with Event Calendar</title>
        <script src="./dist/event-calendar.js"></script>   
        <link href="./dist/event-calendar.css" rel="stylesheet">
    </head>
    <body>
        <script>
        // your code will be here
        </script>
    </body>
</html>
~~~

:::info
You can also import Event Calendar into your project using `yarn` or `npm` commands. To get the trial version of Event Calendar, run the following commands:

~~~jsx {2-3,6-7}
// npm
npm config set @dhx:registry https://npm.dhtmlx.com
npm i @dhx/trial-eventcalendar

// yarn
yarn config set @dhx:registry https://npm.dhtmlx.com
yarn add @dhx/trial-eventcalendar
~~~

To get Event Calendar under the proprietary license, refer to **[Support Center](https://dhtmlx.com/docs/technical-support.shtml)**!
:::

:::tip
If you want to integrate JavaScript Event Calendar into React, Angular or Vue projects, refer to the corresponding [**Examples on CodeSandbox**](https://codesandbox.io/u/DHTMLX) for more information.
:::

## Step 2. Creating Event Calendar

Now you are ready to add Event Calendar to the page. For this you need to take the following steps:

- specify a DIV container in the *index.html* file
- initialize component using the `eventCalendar.EventCalendar()` constructor

The constructor takes an ID of HTML container where Event Calendar will be placed into and an object with the corresponding configuration properties. See an example below:

~~~html {9,11-46} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with Event Calendar</title>
        <script src="./dist/event-calendar.js"></script>   
        <link href="./dist/event-calendar.css" rel="stylesheet">  
    </head>
    <body>
        <div id="root"></div>
        <script>
            new eventCalendar.EventCalendar("#root", {
                // configuration properties
                mode: "month",
                date: new Date("2023-03-12T00:00:00"),
                events: [
                    {
                        id: "1",
                        type: "work",
                        start_date: new Date("2023-03-23T08:00:00"),
                        end_date: new Date("2023-03-23T10:25:00"),
                        text: "French Open",
                        details: "Philippe-Chatrier Court\n Paris, FRA"
                    },
                    {
                        id: "2",
                        type: "work",
                        start_date: new Date("2023-03-08T00:00:00"),
                        end_date: new Date("2023-03-13T00:00:00"),
                        text: "French Open",
                        details: "Philippe-Chatrier Court\n Paris, FRA",
                    },
                    {
                        id: "3",
                        type: "work",
                        start_date: new Date("2023-02-21T00:00:00"),
                        end_date: new Date("2023-03-16T00:00:00"),
                        text: "Wimbledon",
                        details: "Wimbledon\n June 21, 2009 - July 5, 2009",
                        color: {
                            background: "#BD69BC",
                            border: "#AD44AB",
                            textColor: "#FFFFFF"
                        },
                    }
                ]
            });
        </script>
    </body>
</html>
~~~

Refer to the following properties to get more info on how to provide initial data for **events**, specify initially displayed **date** and **view mode**:

- [`events`](../api/config/js_eventcalendar_events_config)
- [`date`](../api/config/js_eventcalendar_date_config)
- [`mode`](../api/config/js_eventcalendar_mode_config)

Refer to the [Working with data](../guides/working_with_data) guide, to find more info on supported data format.

## Step 3. Configuring Event Calendar

Next you can specify the configuration properties you want the Event Calendar component to have when initialized.

~~~jsx {2-12}
new eventCalendar.EventCalendar("#root", {
    calendars,
    colors,
    config,
    date,
    editorShape,
    events,
    locale,
    mode,
    sidebar,
    templates,
    theme
});
~~~

You can find all supported properties on the following page: [API Overview](../api/overview/properties_overview)

To get to know how all properties are used together, check the [Configuration](../guides/configuration) guide.

If you want to connect **EventCalendar** to REST API, refer to the [Working with server](../guides/working_with_server) guide.

## What's next

That's all. Just three simple steps and you have a handy tool for scheduling and managing your daily events. Now you can start working with your tasks or keep exploring the inner world of JavaScript Event Calendar.
