---
sidebar_label: REST routes overview
title: REST Routes Overview
description: You can have the REST routes overview of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# REST routes overview

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page gives you the list of all REST routes with their short description and links to pages with more details.<br> Before you get down to each route description, it's recommended to read about [Working with Server](guides/working_with_server.md).

---

For quick navigation you can use either the tabs below or the side menu:
- The side menu shows routes grouped by HTTP methods
- To quickly find which routes to use for which operations, use the tabs below

<div style="border: solid #F8F8F8">
<Tabs>
<TabItem value="events" label="events">
<p>Use the next routes to perform operations on events:</p>
<table>
<thead>
<tr>
<th>HTTP method</th>
<th>Route</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td><a href="../../../api/provider/rest_routes/get_routes/js_eventcalendar_getevents_route/"> /events</a></td>
<td>Gets data on all events and returns a json object with an array of events objects</td>
</tr>
<tr>
<td>`POST`</td>
<td><a href="../../../api/provider/rest_routes/post_routes/js_eventcalendar_postevent_route/"> /events</a></td>
<td>Creates a new event and returns a json object with the event ID in it</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="../../../api/provider/rest_routes/put_routes/js_eventcalendar_putevent_route/"> /events</a></td>
<td>Updates data on an event</td>
</tr>
<tr>
<td>`DELETE`</td>
<td><a href="../../../api/provider/rest_routes/delete_routes/js_eventcalendar_deleteevent_route/"> /events</a></td>
<td>Deletes data on an event</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="calendars" label="calendars">
<p>Use the next routes to perform operations on calendars (event types):</p>
<table>
<thead>
<tr>
<th>HTTP method</th>
<th>Route</th>
<th>Description</th>

</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td><a href="../../../api/provider/rest_routes/get_routes/js_eventcalendar_getcalendars_route/"> /calendars</a></td>
<td>Gets data on all calendars and returns a json object with an array of calendars objects</td>
</tr>
<tr>
<td>`POST`</td>
<td ><a href="../../../api/provider/rest_routes/post_routes/js_eventcalendar_postcalendar_route/"> /calendars</a></td>
<td>Creates a new calendar (event type) and returns a json object with the calendar ID in it</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="../../../api/provider/rest_routes/put_routes/js_eventcalendar_putcalendar_route/"> /calendars</a></td><td>Updates data on a calendar (event type)</td>
</tr>
<tr>
<td>`DELETE`</td>
<td><a href="../../../api/provider/rest_routes/delete_routes/js_eventcalendar_deletecalendar_route/"> /calendars</a></td>
<td>Deletes data on a calendar (event type)</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="uploads" label="uploads">
<p>Use the next routes to perform operations on uploads (files uploaded to the server):</p>
<table>
<thead>
<tr>
<th>HTTP method</th>
<th>Route</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td><a href="../../../api/provider/rest_routes/get_routes/js_eventcalendar_getuploads_route/"> /uploads</a></td>
<td>Gets the requested binary file from the server</td>
</tr>
<tr>
<td>`POST`</td>
<td><a href="../../../api/provider/rest_routes/post_routes/js_eventcalendar_postupload_route/"> /uploads</a></td>
<td>Uploads a binary file to the server and returns a json object with its id, name, and url</td>
</tr>
</tbody>
</table>
</TabItem>

</Tabs>
</div>
