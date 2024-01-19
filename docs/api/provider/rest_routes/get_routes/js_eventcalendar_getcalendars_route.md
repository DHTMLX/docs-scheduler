---
sidebar_label: GET /calendars
title: GET /calendars
description: You can learn about the GET /calendars route in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# GET `/calendars`

### Description

@short: Gets data on all calendars and returns a json object with an array of calendars objects

The route handles the GET request made to the `/calendars` path.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>GET</td>
<td>/calendars</td>
</tr>
</tbody>
</table>

### Payload

No payload is required.

### Response

The route returns a json object with an array of all calendars objects.

Example:

~~~json
[
    {
        "id": 1,
        "label": "Work",
        "active": true,
        "color": {
            "background": "#3AA3E3",
            "border": "#098CDC"
        },
        "description": ""
    },
    {
        "id": 2,
        "label": "Meeting",
        "active": true,
        "color": {
            "background": "#9585EF",
            "border": "#7A67EB"
        },
        "description": ""
    },
    // ...
]
~~~

For another example of the returned object, go to [**calendars**](api/config/js_eventcalendar_calendars_config.md).

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**:
- [Working with server](guides/working_with_server.md)
- [getCalendars()](api/provider/rest_methods/js_eventcalendar_getcalendars_method.md)
- [send()](api/provider/rest_methods/js_eventcalendar_send_method.md)
