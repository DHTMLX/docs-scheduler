---
sidebar_label: PUT /events
title: PUT /events
description: You can learn about the PUT /events route in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# PUT `/events`

### Description

@short: Updates data on an event

The route handles the PUT request made to the `/events/{id}` path.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
<th style="width:25%">Query parameters</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/events</td>
<td>id</td>
</tr>
</tbody>
</table>

### Query parameters

The next parameter is sent in the request line:

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Required*. The ID of the event to be updated.|

### Payload

The server expects to receive a json object with the next properties (both unchanged and modified properties are needed):

| Name         | Type        | Description |
| ------------ | ----------- | ----------- |
| `text`       |  string     | *Required*. The name of the event to be updated.|
| `start_date` |  string     | *Required*. The event start date in the ISO format yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| `end_date`   |  string     | *Required*. The event end date in the ISO format yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| `allDay`     |  boolean    | *Optional*. Enables/disables the event duration throughout the day.|
| `type`       |  number     | *Required*. The calendar ID which is the event type.|
| `details`    |  string     | *Optional*. Details about the event.|
| `files`      |  object     | *Optional*. An array of the files to be attached to the event. You can attach files that are already [uploaded](api/provider/rest_routes/post_routes/js_eventcalendar_postupload_route.md) to the server. The file object should contain the file id, name, and url.|

Example:

~~~json
{
    "text": "My Event",
    "start_date": "2022-07-10T03:05:00.369Z",
    "end_date": "2022-08-10T10:10:00.369Z",
    "allDay": true,
    "type": 1,
    "details": "Some details",
    "files": [
        {
            "id": 2,
            "name": "test.txt",
            "url": "https://docs.dhtmlx.com/event-calendar-backend/uploads/2/test.txt"
        }
    ]
}
~~~

### Response

No data is returned back. The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**:
- [Working with server](guides/working_with_server.md)
- [Post /uploads](api/provider/rest_routes/post_routes/js_eventcalendar_postupload_route.md)
