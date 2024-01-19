---
sidebar_label: POST /uploads
title: POST /uploads
description: You can learn about the POST /uploads route in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# POST `/uploads`

### Description

@short: Uploads a binary file to the server and returns a json object with the file id, name, and url

The route handles the POST multipart request made to the `/uploads` path.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>POST</td>
<td>/uploads</td>
</tr>
</tbody>
</table>

### Payload

The server needs to receive a binary file via the **multipart/form-data** request. As with all multipart MIME types, the request body should contain:

- the **Content-Disposition** header that should be set to **form-data**
  - the **name** attribute with the **upload** value 
  - **filename** - the original file name of the uploaded file
- the **Content-Type** header - the type of the file data content

Only one file can be sent per request.

Example:

~~~
------WebKitFormBoundary1aDBIObTwl1A4Vpf
Content-Disposition: form-data; name="upload"; filename="Screenshot from 2022-11-11 12-35-01.png"
Content-Type: image/png

------WebKitFormBoundary1aDBIObTwl1A4Vpf--
~~~

### Response

The route returns a json object with the file id, name, and url.

Example:

~~~ json

{
    "id": 4,
    "name": "cat.png",
    "url": "https://server.com/uploads/4/cat.png"
}

~~~

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)
