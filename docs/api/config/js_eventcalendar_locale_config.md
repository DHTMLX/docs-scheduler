---
sidebar_label: locale
title: locale Config
description: You can learn about the locale config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# locale

### Description

@short: Optional. An object of the built-in or custom locale

:::info
The **locale** object includes all labels of Event Calendar with the corresponding translations and date parameters
:::

### Usage

~~~jsx {}
locale?: object;
~~~

### Default config

By default, the **locale** config is set to the built-in [**English**](../../../guides/localization/#default-locale) locale. You can set it to the custom locale as well

:::tip
To change the current locale dynamically, you can use the [`setLocale()`](../../methods/js_eventcalendar_setlocale_method) method of Event Calendar
:::

### Example

~~~jsx {3}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    locale: eventСalendar.de // apply the "de" locale
    // other configuration parameters
});
~~~

**Related articles:** [Localization](../../../guides/localization)

**Related sample:** [Event Calendar. Localization](https://snippet.dhtmlx.com/v3lszmay?tag=event_calendar)