---
sidebar_label: PUT /calendars
title: PUT /calendars
description: You can learn about the PUT /calendars route in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# PUT `/calendars`

### Description

@short: Updates data on a calendar (event type)

The route handles the PUT request made to the `/calendars/{id}` path.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
<th style="width:25%">Query parameters</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/calendars</td>
<td>id</td>
</tr>
</tbody>
</table>

### Query parameters

The next parameter is sent in the request line:

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Required*. The ID of the calendar to be updated.|

### Payload

The server needs to receive a json object with the next properties (both unchanged and modified properties are expected):

| Name          | Type        | Description |
| ------------- | ----------- | ----------- |
| `label`       |  string     | *Required*. The name of the calendar to be updated.|
| `description` |  string     | *Optional*. Calendar description.|
| `color`       |  object     | *Required*. An object with the style parameters applied to the events of the calendar: `background` - (optional) a HEX code of the event background color related to the current calendar, `border` - (optional) a HEX code of the event border color related to the current calendar, `textColor` - (optional) a HEX code of the event text color related to the current calendar.|

Example:

~~~json
{
    "label": "My Calendar",
    "description": "Updated",
    "color": {
        "background": "#5890DC",
        "border": "#2D74D3"
    }
}
~~~

### Response

No data is returned back. The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)
