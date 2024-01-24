---
sidebar_label: setLocale()
title: setLocale Method
description: You can learn about the setLocale method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# setLocale()

### Description

@short: Applies a new locale to Event Calendar

### Usage

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Parameters

- `null` - (optional) resets to the default locale (*English*)
- `locale` - (optional) the object of data of the new locale to be applied

:::info
Using this method, you can apply a new locale to Event Calendar. To reset widget to the default locale, call the method without arguments (or with a *null* value)
:::

### Example

~~~jsx {6}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    locale: eventcalendar.en // the "en" locale is set by default
});
// apply "de" locale
calendar.setLocale(eventCalendar.de);
~~~

**Related articles:** [Localization](guides/localization.md)
