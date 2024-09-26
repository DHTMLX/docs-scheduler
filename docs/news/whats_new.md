---
sidebar_label: What's new
title: What's new
description: You can explore what's new in DHTMLX Event Calendar and its release history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# What's new

If you are updating Event Calendar from an older version, check [Migration to newer versions](news/migration.md) for details.

## Version 2.2.5

Released on September 26, 2024

### Fixes

- The end date of the monthly recurring event is displayed incorrectly
- The extra week is displayed in the **Month** view
- Using Bootstrap breaks built-in styles

## Version 2.2.4

Released on September 12, 2024

### Fixes

- Wrong input value for month recurring events
- The [`parse()`](/api/methods/js_eventcalendar_parse_method/) method throws an error when called after the [`add-event`](/api/events/js_eventcalendar_addevent_event)

## Version 2.2.3

Released on August 19, 2024

### Fixes

- Incorrect behavior after canceling the [`add-event`](../../api/events/js_eventcalendar_addevent_event) via the [`api.intercept()`](../../api/internal/js_eventcalendar_intercept_method) method
- An error occurs after applying validation rules via the [`config.editorValidation`](../../api/config/js_eventcalendar_config_config) property
- Add missing type definitions related to `config` options

## Version 2.2.2

Released on June 7, 2024

### Fixes

- Agenda view. The "Today" column text is cut off
- Incorrect state on select weekly recurring that is longer than 7 days
- Month view. The hidden events are still rendered to DOM
- Redundant calls of subscription to reactive bounds
- The [showEventInfo()](/api/methods/js_eventcalendar_showeventinfo_method/) method works incorrectly
- Unable to open a popup after editing a recurring event

## Version 2.2.1

Released on May 7, 2024

### Fixes

- Redundant calls of subscription to reactive bounds

## Version 2.2

Released on April 25, 2024

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-event-calendar-2-2/)

### Updates

- #### Properties

    - The [`events`](../../api/config/js_eventcalendar_events_config) property was extended by the `recurringEventId`, `originalStartTime` and `status` parameters
    - The [`config`](../../api/config/js_eventcalendar_config_config) property was extended by the `calendarValidation` and `defaultEditorValues` parameters

- #### Events

    - The [update-event](../../api/events/js_eventcalendar_updateevent_event) event was extended by the `mode` parameter

### Fixes

- Hidden events in tne **Month** view are still rendered to DOM
- Incorrect work of Weekly recurrence when editing a single event in the **Month** view
- Recurring exception doesn't work if `start_date` is not specified
- Recurring workdays bug
- The [`config.viewControl`](../../api/config/js_eventcalendar_config_config) property is set to "auto" for mobile devices
- UI regression in the **Year** view

## Version 2.1.10

Released on February 28, 2024

### Fixes

- Broken trial build on npm server

## Version 2.1.9

Released on February 28, 2024

### Fixes

- All day events are displayed incorrectly in the `Timeline` mode
- Broken trial build on npm server
- Browser is crashed after double-clicking on the date in the `Year` view
- Creating a recurring event causes a script error
- Event changes are not tracked when using the Multiselect control in the editor
- Incorrect values of `STDATE` and `DTEND` properties of recurring events after edit
- The [`setConfig()`](../../api/methods/js_eventcalendar_setconfig_method) method doesn't refresh calendars
- The Info block of all day event shows incorrect time
- Type script files are not included in package

## Version 2.1.8

Released on February 14, 2024

### Fixes

- Incorrect work of the "UNTIL" rule. Event Calendar skips the last instance of the series
- The `dragResize: false` config shows the icon for resizing events
- New calendars without specified colors include almost the same colors
- When the exception in a recurring event is created, the `update-event` event receives an incomplete object
- Displaying incorrect time after editing via the time picker
- Extend localization with the `meridianFormat` property. Refer to the [Localization](guides/localization.md#time-and-date-format) guide for more information

## Version 2.1.7

Released on January 23, 2024

### Fixes

- Clicking on the event in the **Year** view causes a script error
- Default event duration and `timeStep` doesn't apply on event creation
- Recurring. Changing *end_date* after recurring event causes a script error
- Single-day month events cannot be find by a css selector. Add specific classes to single-day and multievent

## Version 2.1.6

Released on January 18, 2024

### Fixes

- Creating a new event and clicking the empty space closes the editor
- Deleting a recurring event via the popup info works incorrectly
- Incorrect DTEND of recurring events
- Incorrect popup position in the Timeline view
- Case sensitive BYDAY component of RRULE is not compatible with Google Calendar
- Unexpected behavior of the recurring event form in auto-save mode

## Version 2.1.5

Released on November 15, 2023

### Fixes

- Script error occurs on double click in **Unassigned** section of Timeline
- Deleting symbols from search input doesn't update search result
- Deleting instances of recurring series doesn't work
- Regression in the [`setConfig()`](../../api/methods/js_eventcalendar_setconfig_method) method introduced in v2.1.4
- The [`setConfig()`](../../api/methods/js_eventcalendar_setconfig_method) method doesn't store the previous state
- Buttons on the Editor panel now have fixed position instead of static
- Style improvements

## Version 2.1.4

Released on November 3, 2023

### Fixes

- A click on the navigation panel doesn't close the datepicker
- The edit form doesn't work correctly for recurring events
- Optimize calls of subscribe callback functions

## Version 2.1.3

Released on October 31, 2023

### New functionality

- An ability to validate data entered in the edit panel fields

### New API

- #### Properties

    - [`editorValidation`](../../api/config/js_eventcalendar_editorvalidation_config)

### Fixes

- Incorrect display of events with duplicated ids. Duplicating id is not allowed
- Content of the Timeline label stretches the column and causes incorrect position of events
- The `setLocale()` method doesn't work
- Timeline shows events that end before min-date of the time scale
- The **Today** line in **Agenda** view is displayed on top of datepicker calendar
- The wrong key for the **Assignees** label in the locale object
- The `dateTitle` template doesn't work in **Agenda** and **Year** views

## Version 2.1.2

Released on September 15, 2023

### Updates

- The [`createEvent()`](../../api/methods/js_eventcalendar_createevent_method) method was extended by the **event** object argument

### Fixes

- Script error when calling the `setConfig()` or `setLocale()` method if the Event Calendar configuration includes templates
- Rebuilding Event Calendar when calling the `setConfig()` method
- Regression from v2.1.0 causing a script error at the Event Calendar startup if the *Day/Week* views in the views array lack their own configuration options
- Event positioning issues occurs after dragging and dropping multiday events
- Incorrect format of event ID arguments in various event handlers
- UI animations

## Version 2.1.1

Released on September 5, 2023

### Updates

- Support of server-side updates and [Multiuser backend](../../guides/working_with_server/#multiuser-backend) ([Example](https://snippet.dhtmlx.com/ga85sc0x?tag=event_calendar))
- An ability to import Event Calendar package as ES module

## Version 2.1

Released on August 30, 2023

### Updates

- #### Properties

    - The [`config`](../../api/config/js_eventcalendar_config_config) property was extended by the ***dateTitle***, ***eventVerticalSpace*** and ***eventHorizontalSpace*** parameters
- #### Style

    - New CSS animations and transitions when working with UI

### Deprecated API

The ***eventMargin*** parameter of the [`config`](../../api/config/js_eventcalendar_config_config) property was deprecated. Use the ***eventHorizontalSpace*** parameter instead

### Fixes​

- The info popup does not show in the **readonly** mode
- The event can be created via an editor in the **readonly** mode
- *Script error* occurs when a date is clicked in the **Year** view
- The view selector width on Toolbar is 100% on any screen

## Version 2.0.3

Released on March 13, 2023

### Fixes​

- The **Agenda** view issues cause script errors on the page
- The `cellCss` template in the **Week** view works incorrectly

## Version 2.0.2

Released on March 7, 2023

### Updates

- #### Properties

    - The [`config`](../../api/config/js_eventcalendar_config_config) property of Event Calendar is extended by the ***dateClick*** property

### Fixes​

- An event is out of the month cell if the `eventHeight` property is set to **50** or more

## Version 2.0.1

Released on February 23, 2023

### Fixes​

- The **Repeat event** control resets week days when the **End by** part of new event is changed
- The **Popup window** of **Recurring events** sometimes has an incorrect position in the **Agenda** view
- *TypeError*  when the **Create event** button is doubleclicked

## Version 2.0

Released on February 14, 2023

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-event-calendar-2-0/)

### New functionality

- Timeline view
- Recurring events
- Custom view modes ([Example](https://snippet.dhtmlx.com/dmoijc47?tag=event_calendar))
- Section for unassigned events in the Timeline view 
- Switching through the view modes via the toggle or dropdown controls ([Example](https://snippet.dhtmlx.com/dmoijc47?tag=event_calendar))
- Dim past events ([Example](https://snippet.dhtmlx.com/teaka0o8?tag=event_calendar))
- Highlight the current time using red line in the **Day**, **Week**, **Agenda** and **Timeline** view modes

### Updates

- #### Methods

    - The [`setMode()`](../../api/methods/js_eventcalendar_setmode_method) method of Event Calendar is updated

- #### Properties

    - The [`templates`](../../api/config/js_eventcalendar_templates_config) property of Event Calendar is extended by the ***timelineSection*** parameter (*template*) ([Example](https://snippet.dhtmlx.com/rmgc73n6?tag=event_calendar))

    - The [`editorShape`](../../api/config/js_eventcalendar_editorshape_config) property is extended by the ***recurring*** type (*editor field*) ([Example](https://snippet.dhtmlx.com/bxwdj1rt?tag=event_calendar))

    - The [`events`](../../api/config/js_eventcalendar_events_config) property of Event Calendar is extended by the ***RRULE***, ***STDATE***, ***DTEND*** and ***recurring*** parameters (*data fields*). These parameters are bound to the **recurring** type of editor

    - The [`mode`](../../api/config/js_eventcalendar_mode_config) property of Event Calendar is extended by the ***timeline*** parameter (*view mode*). The **Timeline** view mode is optional and can be configured in the `config.views` property ([Example](https://snippet.dhtmlx.com/dmoijc47?tag=event_calendar))

    - The [`config`](../../api/config/js_eventcalendar_config_config) property of Event Calendar is extended by the ***viewControl*** and ***dimPastEvents*** parameters ([Example](https://snippet.dhtmlx.com/qw45r367?tag=event_calendar))

    - The [`config.view`](../../api/config/js_eventcalendar_config_config) property of Event Calendar is fully updated. See the [Migration to newer versions](news/migration.md/#11---20) for details. ([Example](https://snippet.dhtmlx.com/dmoijc47?tag=event_calendar))

## Version 1.1

Released on November 10, 2022

[Review of release on the blog](https://dhtmlx.com/blog/meet-dhtmlx-event-calendar-v1-1/)

### New functionality

- An ability to view events in the Year and Agenda modes ([Example](https://snippet.dhtmlx.com/6nl72051?tag=event_calendar))
- An ability to highlight the grid cells via API ([Example](https://snippet.dhtmlx.com/z03jrdu4?tag=event_calendar))
- An ability to use the **multiselet** and **radio** types of editor ([Example](https://snippet.dhtmlx.com/bxwdj1rt?tag=event_calendar))

### Updates

- #### Methods

    - The [`setMode()`](../../api/methods/js_eventcalendar_setmode_method) method of Event Calendar is updated

- #### Properties

    - The [`templates`](../../api/config/js_eventcalendar_templates_config) property of Event Calendar is extended by the ***yearEvent***, ***agendaEvent*** and ***agendaDate*** parameters ([Example](https://snippet.dhtmlx.com/6nl72051?tag=event_calendar))

    - The [`config`](../../api/config/js_eventcalendar_config_config) property of Event Calendar is extended by the ***cellCss*** parameter ([Example](https://snippet.dhtmlx.com/z03jrdu4?tag=event_calendar))

    - The [`editorShape`](../../api/config/js_eventcalendar_editorshape_config) property is extended by the ***multiselect*** and ***radio*** types ([Example](https://snippet.dhtmlx.com/bxwdj1rt?tag=event_calendar))

    - The [`mode`](../../api/config/js_eventcalendar_mode_config) property of Event Calendar is extended by the ***year*** and ***agenda*** parameters (view modes)

## Version 1.0

Released on September 1, 2022

[Review of release on the blog](https://dhtmlx.com/blog/meet-dhtmlx-event-calendar-v1-0/)

### Initial functionality

- The ability to work with events:
    - add new events in the following way:
        - by clicking on the **+ Create event** button
        - by double clicking on the empty space
        - by clicking on the empty space and dragging the cursor down
    - show an info popup window with brief information by clicking on the event
    - edit an event via an editor by double clicking on the event or using the popup window (to open editor)
    - reschedule events by dragging them to the desired position along a time scale (calendar cell/date)
    - reschedule events by resizing them
    - delete events via an info popup or an editor
    - group events using calendars

- The ability to work with calendars:
    - add new calendars
    - edit calendars
    - delete calendars

- The ability to view events through the "Day", "Week" and "Month" view modes

- [Localization](../../guides/localization)
- [Integration with backend](../../guides/working_with_server)
- Cross browser compatibility
- Touch support