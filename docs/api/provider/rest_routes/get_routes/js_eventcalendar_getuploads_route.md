---
sidebar_label: GET /uploads
title: GET /uploads
description: You can learn about the GET /uploads route in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# GET `/uploads`

### Description

@short: Gets the requested binary file from the server

The route handles the GET request made to the `/uploads/{id}/{name}` path.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
<th style="width:25%">Query parameters</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>GET</td>
<td>/uploads</td>
<td>id/name</td>
</tr>
</tbody>
</table>

### Query parameters

The following parameters are sent in the request line:

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Required*. The ID of the required file.|
| `name`     |  string     | *Required*. The name of the requested file.|

### Payload

No payload is required.

### Response

The route returns the requested binary file.

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**:

- [Working with server](guides/working_with_server.md)
- [Post /uploads](api/provider/rest_routes/post_routes/js_eventcalendar_postupload_route.md)
