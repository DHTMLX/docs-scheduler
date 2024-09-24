---
sidebar_label: Localization
title: Localization
description: You can learn about the localization in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# Localization

You can localize all labels of JavaScript Event Calendar and present them in any necessary language. For this you just need to provide the corresponding translations for labels and apply a custom locale to the component.

## Default locale

The **English** locale is used by default:

~~~jsx {}
const en = {
    dateFnsLocale: dateFnsLocaleEn, 
    scheduler: { // translations of the Event Calendar labels
        "New Event": "New Event",
        "Add description": "Add description",
        "Create event": "Create event",
        "Edit event": "Edit event",
        "Delete event": "Delete event",
        "Event name": "Event name",
        "Start date": "Start date",
        "End date": "End date",
        "All day": "All day",
        "No events": "No events",
        Type: "Type",
        Description: "Description",
        Today: "Today",
        Day: "Day",
        Week: "Week",
        Month: "Month",
        Timeline: "Timeline",
        Calendars: "Calendars",
        Color: "Color",
        Delete: "Delete",
        Edit: "Edit",
        Calendar: "Calendar",
        New: "New",
        Name: "Name",
        Save: "Save",
        Add: "Add",
        Event: "Event",
        confirmDelete: "Are you sure you want to delete {item}?",
        confirmUnsaved: "You have unsaved changes!  Do you want to discard them?",
        "Repeat event": "Repeat event",
        viewAll: "+{count} more",
        Never: "Never",
        Every: "Every",
        Workdays: "On work days",
        Year: "Year",
        Custom: "Custom",
        Ends: "Ends",
        After: "After",
        "On date": "On date",
        events: "events",
        "recurring event": "recurring event",
        all: "All events",
        future: "This and following events",
        only: "This event",

        recurringActionError:
            "Start date cannot be after recurrent expiry date",

        Assignees: "Assignees",
        "Recurring events": "Recurring events",
        "Single events": "Single events",

        // Recurring event settings
        recurringEveryMonthDay: "Every {date}",
        recurringEveryMonthPos: "Every {pos} {weekDay}",
        recurringEveryYearDay: "Every {date} of {month}",
        recurringEveryYearPos: "Every {pos} {weekDay} of {month}"

        // Time format settings
        hourFormat: "H",
        minuteFormat: "mm",
        meridianFormat: "aaa",

        // Date format settings
        monthFormat: "EEE",
        dateFormat: "EEE, d",
        agendaDateFormat: "MMMM d EEEE",
        unassignFormat: "d MMM yyyy",
    },
    calendar: { // translations and settings of the calendar
        monthFull: [
            "January", "February", "March", "April",
            "May", "June", "July", "August", 
            "September", "October", "November", "December"
        ],
        monthShort: [
            "Jan", "Feb", "Mar", "Apr",
            "May", "Jun", "Jul", "Aug",
            "Sep", "Oct", "Nov", "Dec"
        ],
        dayFull: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
        dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        hours: "Hours",
        minutes: "Minutes",
        done: "Done",
        clear: "Clear",
        today: "Today",
        am: ["am", "AM"],
        pm: ["pm", "PM"],
        timeFormat: 12, // defines a Time format (12 or 24)
        weekStart: 7, // defines a first day of week (Sunday by default)
    },
    core: { // translations of the WX core elements
        ok: "OK",
        cancel: "Cancel"
    }
};
~~~

:::info
Besides the ***en*** locale, Event Calendar also includes the built-in ***de*** and ***ru*** ones.
:::

<details>
<summary><b>de</b> locale</summary>

~~~jsx
const de = {
    dateFnsLocale: dateFnsLocaleDe,
    scheduler: { // translations of the Event Calendar labels
        "New Event": "Neuer Eintrag",
        "Add description": "Beschreibung",
        "Create event": "Neuer Eintrag",
        "Edit event": "Ändern",
        "Delete event": "Löschen",
        "Event name": "Name",
        "Start date": "Start",
        "End date": "Ende",
        "All day": "Den ganzen Tag",
        "No events": "Keine Ereignisse",
        Type: "Typ",
        Description: "Beschreibung",
        Today: "Heute",
        Day: "Tag",
        Week: "Woche",
        Month: "Monat",
        Year: "Jahr",
        Timeline: "Zeitleiste",
        Agenda: "Agenda",
        Calendars: "Kalender",
        Color: "Farbe",
        Delete: "Löschen",
        Edit: "Ändern",
        Calendar: "Kalender",
        New: "Neuer",
        Name: "Name",
        Save: "Speichern",
        Add: "Hinzufügen",
        Event: "Eintrag",
        confirmDelete: "Möchten Sie {item} wirklich löschen?",
        confirmUnsaved:
            "Du hast nicht gespeicherte Änderungen! Möchten Sie sie verwerfen?",
        "Repeat event": "Ereignis wiederholen",
        viewAll: "+{count} mehr",
        Never: "Niemals",
        Every: "Jeden",
        Workdays: "An Werktagen",
        After: "Nach",
        "On date": "Am tag",
        events: "veranstaltungen",
        "recurring event": "wiederkehrendes ereignis",
        all: "Alle ereignis",
        future: "Diese und folgende ereignis",
        only: "Diese ereigni",

        recurringActionError:
            "Das Startdatum darf nicht nach dem wiederkehrenden Ablaufdatum liegen",

        Assignees: "Abtretungsempfänger",
        "Recurring events": "Wiederkehrende ereignisse",
        "Single events": "Einzelereignisse",

        // Recurring events settings
        recurringEveryMonthDay: "Jedes {date}",
        recurringEveryMonthPos: "Jeden {pos} {weekDay}",
        recurringEveryYearDay: "Jedes {date} von {month}",
        recurringEveryYearPos: "Jeden {pos} {weekDay} von {month}",

        // Time format settings
        hourFormat: "H",
        minuteFormat: "mm",
        meridianFormat: "aaa",

        // Date format settings
        monthFormat: "EEE",
        dateFormat: "EEE, d",
        agendaDateFormat: "MMMM d EEEE",
        unassignFormat: "d MMM yyyy",

    },
    calendar: { // translations and settings of the calendar
        monthFull:[
            "Januar", "Februar", "März", "April",
            "Mai", "Juni", "Juli", "August",
            "September", "Oktober", "November", "Dezember"
        ],
        monthShort: [
            "Jan", "Feb", "Mrz", "Apr",
            "Mai", "Jun", "Jul", "Aug", 
            "Sep", "Okt", "Nov", "Dez"
        ],
        dayFull: [
            "Sonntag",
            "Montag",
            "Dienstag",
            "Mittwoch",
            "Donnerstag",
            "Freitag",
            "Samstag"
        ],
        dayShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        hours: "Stunden",
        minutes: "Minuten",
        done:"Fertig",
        clear: "Entfernen",
        today: "Heute",
        timeFormat: 12, // defines a Time format (12 or 24)
        weekStart: 1, // defines a first day of week (Monday by default)
    },
    core: { // translations of the WX core elements
        ok: "OK",
        cancel: "Abbrechen"
    }
};
~~~
</details>

<details>
<summary><b>ru</b> locale</summary>

~~~jsx
const ru = {
    dateFnsLocale: dateFnsLocaleRu,
    scheduler: { // translations of the Event Calendar labels
        "New Event": "Новое событие",
        "Add description": "Описание",
        "Create event": "Создать событие",
        "Edit event": "Редактировать",
        "Delete event": "Удалить",
        "Event name": "Название",
        "Start date": "Дата начала",
        "End date": "Дата окончания",
        "All day": "Весь день",
        "No events": "Нет событий",
        Type: "Тип",
        Description: "Описание",
        Today: "Сегодня",
        Day: "День",
        Week: "Неделя",
        Month: "Месяц",
        Year: "Год",
        Agenda: "Расписание",
        Timeline: "График",
        Calendars: "Календари",
        Color: "Цвет",
        Delete: "Удалить",
        Edit: "Редактировать",
        Calendar: "Календарь",
        New: "Новый",
        Name: "Имя",
        Save: "Сохранить",
        Add: "Добавить",
        Event: "Событие",
        confirmDelete: "Вы действительно хотите удалить {item}?",
        confirmUnsaved:
            "У вас есть несохраненные изменения! Вы действительно хотите отменить их?",
        "Repeat event": "Повотрять событие",
        viewAll: "Ещё {count}",
        Never: "Никогда",
        Every: "Каждый",
        Workdays: "По будним дням",
        Custom: "Другое",
        Ends: "Заканчивается",
        After: "После",
        "On date": "Дата",
        events: "событий",
        "recurring event": "повторяющееся событие",
        all: "Все события",
        future: "Это и последующие события",
        only: "Только это событие",

        recurringActionError:
            "Начало события не может быть установлено после даты завершения повторяющегося события",

        Assignees: "Относится",
        "Recurring events": "Повторяющиеся события",
        "Single events": "Одиночные события",
        recurringEveryMonthDay: "Каждое {date} число",
        recurringEveryMonthPos: "Каждый {pos} {weekDay}",
        recurringEveryYearDay: "Каждое {date} число {month}",
        recurringEveryYearPos: "Каждый {pos} {weekDay}  {month}",

        // Time format settings
        hourFormat: "H",
        minuteFormat: "mm",
        meridianFormat: "aaa",

        // Date format settings
        monthFormat: "EEE",
        dateFormat: "EEE, d",
        agendaDateFormat: "MMMM d EEEE",
        unassignFormat: "d MMM yyyy",
    },
    calendar: { // translations and settings of the calendar
        monthFull: [
            "Январь", "Февраль", "Март", "Апрель",
            "Maй", "Июнь", "Июль", "Август",
            "Сентябрь", "Oктябрь", "Ноябрь", "Декабрь"
        ],
        monthShort: [
            "Янв", "Фев", "Maр", "Aпр",
            "Maй", "Июн", "Июл", "Aвг",
            "Сен", "Окт", "Ноя", "Дек"
        ],
        dayFull: [
            "Воскресенье",
            "Понедельник",
            "Вторник",
            "Среда",
            "Четверг",
            "Пятница",
            "Суббота",
        ],
        dayShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        hours: "Часы",
        minutes: "Минуты",
        done: "Гoтовo",
        clear: "Очистить",
        today: "Сегодня",
        timeFormat: 24, // defines a Time format (12 or 24)
        weekStart: 1, // defines a first day of week (Monday by default)
    },
    core: { // translations of the WX core elements
        ok: "OK",
        cancel: "Отмена"
    }
};
~~~
</details>

## Custom locale

To apply a custom locale you need to:

- create custom locale (or modify the existing one) and provide translations for all text labels of Event Calendar (it can be any language you need)
- apply new locale via the [`locale`](api/config/js_eventcalendar_locale_config.md) property or via the [`setLocale()`](api/methods/js_eventcalendar_setlocale_method.md) method, that takes an object with translations (custom locale) as a parameter

## First day of week

To define a first day of week, assign the required day number to the `weekStart` property. Take into account that **Monday** is equal to **1**.

~~~jsx {2}
const locale = eventCalendar.en;
locale.calendar.weekStart = 1; // change start day of week

const calendar = new eventCalendar.EventCalendar("#root", {
    events,
    mode: "month",
    date: new Date("2023-02-12T00:00:00"),
    locale
});
~~~

## Time and Date format

This example shows how to configure **Date** and **Time** settings:

~~~jsx {3-7,9-13}
const { en, EventCalendar } = eventCalendar;

// Time format settings
en.calendar.timeFormat = 12;
en.scheduler.hourFormat = "h";
en.scheduler.minuteFormat = "mm";
en.scheduler.meridianFormat = "aa"

// Date format settings
en.scheduler.monthFormat: "EEE";
en.scheduler.dateFormat: "EEE, d";
en.scheduler.agendaDateFormat: "MMMM d EEEE";
en.scheduler.unassignFormat: "d MMM yyyy";

const event_calendar = new EventCalendar("#root", {
    events,
    mode: "month",
    date: new Date("2023-02-12T00:00:00"),
    locale: en
});
~~~

Use the `timeFormat` property to switch from 12-hour format to 24-hour format:

~~~jsx
en.calendar.timeFormat = 12;
// or
en.calendar.timeFormat = 24;
~~~

:::tip
Explore the [**Format**](https://date-fns.org/v3.3.1/docs/format) topic for more information about available date formats!
:::

To get more information on how to specify a custom date format for editor fields, refer to the [**Configuring date format for editor fields**](/howtos/#configuring-date-format-for-editor-fields) section.

## Example

In this snippet you can see how to switch between the *EN*, *DE* and *RU* locales:

<iframe src="https://snippet.dhtmlx.com/v3lszmay?mode=result&tag=event_calendar" frameborder="0" class="snippet_iframe" width="100%" height="620"></iframe>
