---
sidebar_label: POST /calendars
title: POST /calendars
description: You can learn about the POST /calendars route in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# POST `/calendars`

### Description

@short: Creates a new calendar (event type) and returns a json object with the calendar ID in it

The route handles the POST request made to the `/calendars` path.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>POST</td>
<td>/calendars</td>
</tr>
</tbody>
</table>

### Payload

The server needs to receive a json object with the next properties:

| Name          | Type        | Description |
| ------------- | ----------- | ----------- |
| `label`       | string      | *Required*. The name of a new calendar to be added.|
| `description` | string      | *Optional*. Calendar description.|
| `color`       | object      | *Required*. An object with the style parameters applied to the events of the calendar: `background` - (optional) a HEX code of the event background color related to the calendar, `border` - (optional) a HEX code of the event border color related to the calendar, `textColor` - (optional) a HEX code of the event text color related to the calendar.|

Example:

~~~json
{
    "label": "New Calendar",
    "description": "Some description",
    "color": {
        "background": "#5890DC",
        "border": "#2D74D3"
    }
}
~~~

### Response

The route returns a json object with the ID of a new calendar.

Example:

~~~json
"id": 1
~~~

 The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)
