---
sidebar_label: Integration with Svelte
title: Integration with Svelte
description: You can learn about the integration with Svelte in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# Integration with Svelte

:::tip
You should be familiar with the basic concepts and patterns of **Svelte** before reading this documentation. To refresh your knowledge, please refer to the [**Svelte documentation**](https://svelte.dev/).
:::

DHTMLX Event Calendar is compatible with **Svelte**. We have prepared code examples on how to use DHTMLX Event Calendar with **Svelte**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/svelte-event-calendar-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Vite**](https://vitejs.dev/) (optional) and [**Node.js**](https://nodejs.org/en/).
:::

There are several ways of creating a **Svelte** project:

- you can use the [**SvelteKit**](https://kit.svelte.dev/)

or

- you can also use **Svelte with Vite** (but without SvelteKit):

~~~json
npm create vite@latest
~~~

Check the details in the [related article](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit).

### Installation of dependencies

Let's name the project as **my-svelte-event-calendar-app** and go to the app directory:

~~~json
cd my-svelte-event-calendar-app
~~~

Install dependencies and start the dev server. For this, use a package manager:

- if you use [**yarn**](https://yarnpkg.com/), run the following commands:

~~~json
yarn 
yarn start
~~~

- if you use [**npm**](https://www.npmjs.com/), run the following commands:

~~~json
npm install
npm run dev
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Creating Event Calendar

Now you should get the DHTMLX Event Calendar source code. First of all, stop the app and proceed with installing the Event Calendar package.

### Step 1. Package installation

Download the [**trial Event Calendar package**](/how_to_start/#installing-event-calendar-via-npm-and-yarn) and follow steps mentioned in the README file. Note that trial Event Calendar is available 30 days only.

### Step 2. Component creation

Now you need to create a Svelte component, to add Event Calendar into the application. Let's create a new file in the ***src/*** directory and name it ***EventCalendar.svelte***.

#### Import source files

Open the ***EventCalendar.svelte*** file and import Event Calendar source files. Note that:

- if you use PRO version and install the Event Calendar package from a local folder, the import paths look like this:

~~~html title="EventCalendar.svelte"
<script>
import { EventCalendar } from 'dhx-eventcalendar-package';
import 'dhx-eventcalendar-package/dist/event-calendar.css';
</script>
~~~

Note that depending on the used package, the source files can be minified. In this case make sure that you are importing the CSS file as **event-calendar.min.css**.

- if you use the trial version of Event Calendar, specify the following paths:

~~~html title="EventCalendar.svelte"
<script>
import { EventCalendar } from '@dhx/trial-eventcalendar';
import '@dhx/trial-eventcalendar/dist/event-calendar.css';
</script>
~~~

In this tutorial you can see how to configure the **trial** version of Event Calendar.

#### Setting the container and adding Event Calendar

To display Event Calendar on the page, you need to create the container for Event Calendar, and initialize this component using the corresponding constructor:

~~~html {3,6,10-11} title="EventCalendar.svelte"
<script>
    import { onMount, onDestroy } from "svelte";
    import { EventCalendar } from "@dhx/trial-eventcalendar";
    import "@dhx/trial-eventcalendar/dist/event-calendar.css";

    let container; // initialize container for Event Calendar
    let calendar;

    onMount(() => {
        // initialize the Event Calendar component
        calendar = new EventCalendar(container, {})
    });

    onDestroy(() => {
        calendar.destructor(); // destruct Event Calendar
    });
</script>

<div bind:this={container} style="width: 100%; height: 100%;"></div>
~~~

#### Loading data

To add data into the Event Calendar, we need to provide a data set. You can create the ***data.js*** file in the ***src/*** directory and add some data into it:

~~~jsx title="data.js"
export function getData() {
    return [
        {
            id: '27',
            type: 'work',
            start_date: new Date('2024-06-10T14:00:00'),
            end_date: new Date('2024-06-10T18:30:00'),
            text: ' Olympiastadion - Berlin ',
            details: ' Berlin, GER '
        },
        {
            id: '28',
            type: 'rest',
            start_date: new Date('2024-06-12T14:00:00'),
            end_date: new Date('2024-06-12T16:00:00'),
            text: ' Commerz Bank Arena ',
            details: ' Frankfurt, GER '
        },
        {
            id: '29',
            type: 'meeting',
            start_date: new Date('2024-06-13T11:00:00'),
            end_date: new Date('2024-06-13T16:00:00'),
            text: ' Olympic Stadium - Munich ',
            details: ' Munich, GER '
        }
    ];
}
~~~

Then open the ***App.svelte*** file, import data, and pass it into the new created `<EventCalendar/>` components as **props**:

~~~html {3,5,8} title="App.svelte"
<script>
    import EventCalendar from "./EventCalendar.svelte";
    import { getData } from "./data.js";

    const events = getData();
</script>

<EventCalendar events={events} date={new Date(2024, 5, 10)} />
~~~

Go to the ***EventCalendar.svelte*** file and apply the passed **props** to the Event Calendar configuration object:

~~~html {6-7,14-15} title="EventCalendar.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { EventCalendar } from "@dhx/trial-eventcalendar";
import "@dhx/trial-eventcalendar/dist/event-calendar.css";

export let events;
export let date;

let container;
let calendar;

onMount(() => {
    calendar = new EventCalendar(container, {
        events, // apply event data
        date
    })
});

onDestroy(() => {
    calendar.destructor();
});
</script>

<div bind:this={container} style="width: 100%; height: 100%;"></div>
~~~

You can also use the [`parse()`](/api/methods/js_eventcalendar_parse_method/) method inside the `onMount()` method of Svelte to load data into Event Calendar:

~~~html {3,6-7,15} title="App.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { EventCalendar } from "@dhx/trial-eventcalendar";
import "@dhx/trial-eventcalendar/dist/event-calendar.css";

export let events;
export let date;

let container;
let calendar;

onMount(() => {
    calendar = new EventCalendar(container, {})

    calendar.parse({ events, date });
});

onDestroy(() => {
    calendar.destructor();
});
</script>

<div bind:this={container} style="width: 100%; height: 100%;"></div>
~~~

The `parse(data)` method provides data reloading on each applied change.

Now the Event Calendar component is ready to use. When the element will be added to the page, it will initialize the Event Calendar with data. You can provide necessary configuration settings as well. Visit our [Event Calendar API docs](/api/overview/properties_overview/) to check the full list of available properties.

#### Handling events

When a user makes some action in the Event Calendar, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](/api/overview/events_overview/).

Open ***EventCalendar.svelte*** and complete the `onMount()` method in the following way:

~~~html {8-10} title="EventCalendar.svelte"
<script>
// ...
let calendar;

onMount(() => {
    calendar = new EventCalendar(container, {})

    calendar.api.on("add-event", (obj) => {
        console.log(obj);
    });
});

onDestroy(() => {
    calendar.destructor();
});
</script>

// ...
~~~

### Step 3. Adding Event Calendar into the app

To add the component into the app, open the **App.svelte** file and replace the default code with the following one:

~~~html title="App.svelte"
<script>
import EventCalendar from "./EventCalendar.svelte";
import { getData } from "./data.js";

const events = getData();
</script>

<EventCalendar events={events} date={new Date(2024, 5, 10)} />
~~~

After that, you can start the app to see Event Calendar loaded with data on a page.

![Event Calendar initialization](../assets/trial_eventcalendar.png)

Now you know how to integrate DHTMLX Event Calendar with Svelte. You can customize the code according to your specific requirements. The final example you can find on [**GitHub**](https://github.com/DHTMLX/svelte-event-calendar-demo).
