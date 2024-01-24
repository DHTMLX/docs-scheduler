---
sidebar_label: templates
title: templates Config
description: You can learn about the templates config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# templates

### Description

@short: Optional. An object with custom templates of the Event Calendar visual elements

### Usage

~~~jsx {}
templates?: {
    weekEvent?: function({ event, calendar }), // => html string
    monthEvent?: function({ event, calendar }), // => html string
    yearEvent?: function({ event, calendar }), // => html string
    agendaEvent?: function({ event, calendar }), // => html string
    agendaDate?: function({ event, calendar }), // => html string
    multievent?: function({ event, calendar }), // => html string
    header?: function({ date, dateFormat }), // => html string
    popup?: function({ event, calendar }), // => html string
    timelineSection?: function(section) // => html string
}; 
~~~

### Parameters

In the **templates** object you can specify custom templates for the following elements of Event Calendar:

- `weekEvent` - (optional) a function needs to return a custom template of the event in the **Week** and **Day** modes. It takes an object with the following parameters:
    - ***event*** - current event data
    - ***calendar*** - current calendar data
- `monthEvent` - (optional) a function needs to return a custom template of the event in the **Month** mode. It takes an object with the following parameters:
    - ***event*** - current event data
    - ***calendar*** - current calendar data
- `yearEvent` - (optional) a function needs to return a custom template of the event in the **Year** mode. It takes an object with the following parameters:
    - ***event*** - current event data
    - ***calendar*** - current calendar data
- `agendaEvent` - (optional) a function needs to return a custom template of the event in the **Agenda** mode. It takes an object with the following parameters:
    - ***event*** - current event data
    - ***calendar*** - current calendar data
- `agendaDate` - (optional) a function needs to return a custom template of the Date cell in the **Agenda** mode. It takes an object with the following parameters:
    - ***event*** - current event data
    - ***calendar*** - current calendar data
- `multievent` - (optional) a function needs to return a custom template of the multievent. It takes an object with the following parameters:
    - ***event*** - current event data
    - ***calendar*** - current calendar data
- `header` - (optional) a function needs to return a custom template of the grid header. It takes an object with the following parameters:
    - ***date*** - a current date
    - ***dateFormat*** - a current date format
- `popup` - (optional) a function needs to return a custom template of the info popup window. It takes an object with the following parameters:
    - ***event*** - current event data
    - ***calendar*** - current calendar data
- `timelineSection` - (optional) a function needs to return a custom template of the **Timeline** mode section. It takes an object of the **section** parameters.

:::info
To set the templates dynamically, you can use the
[`setConfig()`](../../methods/js_eventcalendar_setconfig_method) method
:::

### Example

~~~jsx {5-14,16-22,24-30,32-44,46-55,57-63,65-73,75-88,90-97}
const { format } = dateFns; // date-fns library  (https://date-fns.org/)
new eventCalendar.EventCalendar("#root", { // create Event Calendar
    templates: {
        // the event template of the "Week" and "Day" modes
        weekEvent: ({ event, calendar }) => {
            const start_date = format(event.start_date, "HH:mm");
            const end_date = format(event.end_date, "HH:mm");
            return `
                <div class="week_event_wrapper">
                    <div>${event.text}</div>
                    <div> ${start_date} - ${end_date}</div>    
                    ${event.img ? `<img src=${event.img} alt="" />` : ""}
                </div>`;
        },
        // the event template of the "Month" mode
        monthEvent: ({ event, calendar }) => {
            return `
                <div>
                    <i class="mdi mdi-account-multiple"></i>
                    <span class="label"> ${event.text} </span>
                </div>`;
        },
         // the event template of the "Year" mode
        yearEvent: ({ event, calendar }) => {
            return `
                <div class="wrapper">
                    <i class="mdi mdi-calendar-multiple"> </i>
                    <span class="multievent_label">${event.text}</span>
                </div>`;
        },
        // the event template of the "Agenda" mode
        agendaEvent: ({ event, calendar }) => {
            const { start_date, end_date, text } = event;
            const start = format(start_date, "HH:mm");
            const end = format(end_date, "HH:mm");
            const label = `
                <b>Event:</b> ${text} </br>
                <b>Time:</b> ${start}-${end}`;
            return `
                <div>
                    <span class="label"> ${label} </span>
                </div>
            `;
        },
        // the template of the date cell in the "Agenda" mode
        agendaDate: ({ event, calendar }) => {
            const day = format(date, "do");
            const week = format(date, "dddd");
            return `
                <div class="custom-date">
                    <b>${day}</b>
                    ${week}
                </div>
            `;
        },
        // the template of the grid header
        header: ({ date, dateFormat }) => {
            const label = format(date, "DD MM YYYY");
            return `
                <div class="custom-date">
                    ${label}
                </div>`;
        },
        // the multievent template
        multievent: ({ event, calendar }) => {
            return `
                <div class="wrapper">
                    <i
                        class="mdi mdi-calendar-multiple"
                        style="color: ${calendar.color.border}"> </i>
                    <span class="multievent_label">${event.text}</span>
                </div>`;
        },
        // the info popup template
        popup: ({ event, calendar }) => {
            const start_date = format(event.start_date, "MMM, do h:mm");
            const end_date = format(event.end_date, "MMM, do h:mm");
            return `
                <div class="popup_wrapper">
                    <h1>${event.text}</h1>
                    <div class="popup_info">
                        <span><b>Description:</b></span>
                        <span>${event.details}</span>
                        <span><b>Date:</b></span>
                        <div>${start_date} - ${end_date}</div>
                    </div>
                </div>`;
        },
        // the "Timeline" mode section template
        timelineSection: (section) => {
            return `
                <div class="template-wrapper">
                    <img src=${section.img} alt=${section.label} class="section-img" />
                    <div class="section-label">${section.label}</div>
                </div>`;
        }
    },
    // other configuration parameters
});
~~~

**Related sample:** [Event Calendar. Custom templates](https://snippet.dhtmlx.com/rmgc73n6?tag=event_calendar)

**Change log:** The ***timelineSection*** template was added in v2.0
