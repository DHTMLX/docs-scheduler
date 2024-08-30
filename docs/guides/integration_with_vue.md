---
sidebar_label: Integration with Vue
title: Integration with Vue
description: You can learn about the integration with Vue in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# Integration with Vue

:::tip
You should be familiar with the basic concepts and patterns of [**Vue**](https://vuejs.org/) before reading this documentation. To refresh your knowledge, please refer to the [**Vue 3 documentation**](https://v3.vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX Event Calendar is compatible with **Vue**. We have prepared code examples on how to use DHTMLX Event Calendar with **Vue 3**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/vue-event-calendar-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Node.js**](https://nodejs.org/en/).
:::

To create a **Vue** project, run the following command:

~~~json
npm create vue@latest
~~~

This command installs and executes `create-vue`, the official **Vue** project scaffolding tool. Check the details in the [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Let's name the project as **my-vue-event-calendar-app**.

### Installation of dependencies

Go to the app directory:

~~~json
cd my-vue-event-calendar-app
~~~

Install dependencies and start the dev server. For this, use a package manager:

- if you use [**yarn**](https://yarnpkg.com/), run the following commands:

~~~jsx
yarn
yarn start // or yarn dev
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

Now you need to create a Vue component, to add Event Calendar into the application. Create a new file in the ***src/components/*** directory and name it ***EventCalendar.vue***.

#### Import source files

Open the ***EventCalendar.vue*** file and import Event Calendar source files. Note that:

- if you use PRO version and install the Event Calendar package from a local folder, the import paths look like this:

~~~html title="EventCalendar.vue"
<script>
import { EventCalendar } from 'dhx-eventcalendar-package';
import 'dhx-eventcalendar-package/dist/event-calendar.css';
</script>
~~~

Note that depending on the used package, the source files can be minified. In this case make sure that you are importing the CSS file as **event-calendar.min.css**.

- if you use the trial version of Event Calendar, specify the following paths:

~~~html title="EventCalendar.vue"
<script>
import { EventCalendar } from '@dhx/trial-eventcalendar';
import '@dhx/trial-eventcalendar/dist/event-calendar.css';
<script>
~~~

In this tutorial you can see how to configure the **trial** version of Event Calendar.

#### Setting the container and adding Event Calendar

To display Event Calendar on the page, you need to create the container for Event Calendar, and initialize this component using the corresponding constructor:

~~~html {2,7-8,18} title="EventCalendar.vue"
<script>
import { EventCalendar } from "@dhx/trial-eventcalendar";
import "@dhx/trial-eventcalendar/dist/event-calendar.css";

export default {
    mounted() {
        // initialize the Event Calendar component
        this.calendar = new EventCalendar(this.$refs.container, {});
    },

    unmounted() {
        this.calendar.destructor(); // destruct Event Calendar
    }
};
</script>

<template>
    <div ref="container" class="widget"></div>
</template>
~~~

#### Adding styles

To display Event Calendar correctly, you need to specify important styles for Event Calendar and its container in the main css file of the project:

~~~css title="main.css"
/* specify styles for initial page */
html,
body,
#app { /* make sure that you use the #app root container */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* specify styles for the Event Calendar container */
.widget {
    height: 100%;
}
~~~

#### Loading data

To add data into the Event Calendar, you need to provide a data set. You can create the ***data.js*** file in the ***src/*** directory and add some data into it:

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

Then open the ***App.vue*** file, import data, and initialize it via the inner `data()` method. After this you can pass data into the new created `<EventCalendar/>` component as **props**:

~~~html {3,7-14,19} title="App.vue"
<script>
import EventCalendar from "./components/EventCalendar.vue";
import { getData } from "./data";

export default {
    components: { EventCalendar },
    data() {
        const events = getData();
        const date = new Date(2024, 5, 10);
        return { 
            events, 
            date
        };
    }
};
</script>

<template>
    <EventCalendar :events="events" :date="date" />
</template>
~~~

Go to the ***EventCalendar.vue*** file and apply the passed **props** to the Event Calendar configuration object:

~~~html {6,10-11} title="EventCalendar.vue"
<script>
import { EventCalendar } from "@dhx/trial-eventcalendar";
import "@dhx/trial-eventcalendar/dist/event-calendar.css";

export default {
    props: ["events", "date"],

    mounted() {
        this.calendar = new EventCalendar(this.$refs.container, {
            events: this.events,
            date: this.date,
            // other configuration properties
        });
    },

    unmounted() {
        this.calendar.destructor();
    }
};
</script>

<template>
    <div ref="container" class="widget"></div>
</template>
~~~

You can also use the [`parse()`](/api/methods/js_eventcalendar_parse_method/) method inside the `mounted()` method of Vue to load data into Event Calendar:

~~~html {11-14} title="EventCalendar.vue"
<script>
import { EventCalendar } from "@dhx/trial-eventcalendar";
import "@dhx/trial-eventcalendar/dist/event-calendar.css";

export default {
    props: ["events", "date"],

    mounted() {
        this.calendar = new EventCalendar(this.$refs.container, {});

        this.calendar.parse({ 
            events: this.events,
            date: this.date 
        });
    },

    unmounted() {
        this.calendar.destructor();
    }
};
</script>

<template>
    <div ref="container" class="widget"></div>
</template>
~~~

The `parse(data)` method provides data reloading on each applied change.

Now the Event Calendar component is ready to use. When the element will be added to the page, it will initialize the Event Calendar with data. You can provide necessary configuration settings as well. Visit our [Event Calendar API docs](/api/overview/properties_overview/) to check the full list of available properties.

#### Handling events

When a user makes some action in the Event Calendar, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](/api/overview/events_overview/).

Open ***EventCalendar.vue*** and complete the `mounted()` method:

~~~html {8-10} title="EventCalendar.vue"
<script>
// ...
export default {
    // ...
    mounted() {
        this.calendar = new EventCalendar(this.$refs.container, {});

        this.calendar.api.on("add-event", (obj) => {
            console.log(obj);
        });
    }
    // ...
}
</script>

<!--...-->
~~~

After that, you can start the app to see Event Calendar loaded with data on a page.

![Event Calendar initialization](../assets/trial_eventcalendar.png)

Now you know how to integrate DHTMLX Event Calendar with Vue. You can customize the code according to your specific requirements. The final example you can find on [**GitHub**](https://github.com/DHTMLX/vue-event-calendar-demo).
