---
sidebar_label: POST /events
title: POST /events
description: You can learn about the POST /events route in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# POST `/events`

### Description

@short: Creates a new event and returns a json object with the event ID in it

The route handles the POST request made to the `/events` path.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>POST</td>
<td>/events</td>
</tr>
</tbody>
</table>

### Payload

The server needs to receive a json object with the next properties:

| Name         | Type        | Description |
| ------------ | ----------- | ----------- |
| `text`       |  string     | *Required*. The name of a new event to be added.|
| `start_date` |  string     | *Required*. The event start date in the ISO format yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| `end_date`   |  string     | *Required*. The event end date in the ISO format yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| `allDay`     |  boolean    | *Optional*. Enables/disables the event duration throughout the day.|
| `type`       |  number     | *Required*. The calendar ID which is the event type.|
| `details`    |  string     | *Optional*. Details about a new event.|
| `files`      |  object     | *Optional*. An array of the files to be attached to a new event. You can attach files that are already [uploaded](api/provider/rest_routes/post_routes/js_eventcalendar_postupload_route.md) to the server. The file object should contain the file id, name, and url.|

Example:

~~~json
{
    "text": "New Event",
    "start_date": "2021-06-10T03:05:00.369Z",
    "end_date": "2021-06-10T10:10:00.369Z",
    "allDay": true,
    "type": 1,
    "details": "Some details",
    "files": [
        {
            "id": 2,
            "name": "document.html",
            "url": "http://localhost:3000/uploads/2/document.html"
        }
    ]
}
~~~

### Response

The route returns a json object with the ID of a new event.

Example:

~~~json
"id": 1 
~~~

 The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)
