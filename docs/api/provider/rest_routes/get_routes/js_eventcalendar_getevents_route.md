---
sidebar_label: GET /events
title: GET /events
description: You can learn about the GET /events route in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# GET `/events`

### Description

@short: Gets data on all events and returns a json object with an array of events objects

The route handles the GET request made to the `/events` path.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>GET</td>
<td>/events</td>
</tr>
</tbody>
</table>

### Payload

No payload is required.

### Response

The route returns a json object with an array of all events objects.

Example:

~~~json
[
    {
        "id": 1,
        "text": "French Open",
        "start_date": "2022-06-10T03:05:00.369Z",
        "end_date": "2022-06-20T03:05:00.369Z",
        "allDay": false,
        "type": 1,
        "details": "Philippe-Chatrier Court\\n Paris, FRA",
        "files": []
    },
    {
        "id": 2,
        "text": "Aegon Championship",
        "start_date": "2022-06-10T03:05:00.369Z",
        "end_date": "2022-07-10T03:05:00.369Z",
        "allDay": false,
        "type": 1,
        "details": "The Queens Club\\n London, ENG",
        "files": {
            "id": 5,
            "name": "document.html",
            "url": "https://server.com/uploads/5/document.html"
        }
    },
    // ...
]
~~~

:::note
The event start and end dates should conform to the ISO format **yyyy-MM-dd'T'HH:mm:ss.SSSXXX**
:::

For another example of the returned object, go to [**events**](api/config/js_eventcalendar_events_config.md).

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**:
- [Working with server](guides/working_with_server.md)
- [getEvents()](api/provider/rest_methods/js_eventcalendar_getevents_method.md)
- [send()](api/provider/rest_methods/js_eventcalendar_send_method.md)
