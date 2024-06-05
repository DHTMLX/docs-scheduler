---
sidebar_label: Integration with React
title: Integration with React
description: You can learn about the integration with React in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# Integration with React

:::tip
You should be familiar with the basic concepts and patterns of [**React**](https://react.dev) before reading this documentation. To refresh your knowledge, please refer to the [**React documentation**](https://reactjs.org/docs/getting-started.html).
:::

DHTMLX Event Calendar is compatible with **React**. We have prepared code examples on how to use DHTMLX Event Calendar with **React**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/react-event-calendar-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Vite**](https://vitejs.dev/) (optional) and [**Node.js**](https://nodejs.org/en/).
:::

You can create a basic **React** project or use **React with Vite**:

~~~json
npx create-vite my-react-event-calendar-app --template react
~~~

### Installation of dependencies

Go to the app directory. Let's name the project as **my-react-event-calendar-app** and run:

~~~json
cd my-react-event-calendar-app
~~~

Install dependencies and start the dev server. For this, use a package manager:

- if you use [**yarn**](https://yarnpkg.com/), run the following commands:

~~~json
yarn install
yarn dev
~~~

- if you use [**npm**](https://www.npmjs.com/), run the following commands:

~~~json
npm install
npm run dev
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Creating Event Calendar

Now you should get the DHTMLX Event Calendar code. First of all, stop the app and proceed with installing the Event Calendar package.

### Step 1. Package installation

Download the [**trial Event Calendar package**](/how_to_start/#installing-event-calendar-via-npm-and-yarn) and follow steps mentioned in the README file. Note that trial Event Calendar is available 30 days only.

### Step 2. Component creation

Now you need to create a React component, to add a Event Calendar into the application. Create a new file in the ***src/*** directory and name it ***EventCalendar.jsx***.

#### Importing source files

Open the ***EventCalendar.jsx*** file and import Event Calendar source files. Note that:

- if you use PRO version and install the Event Calendar package from a local folder, the import paths look like this:

~~~jsx title="EventCalendar.jsx"
import { EventCalendar } from 'dhx-eventcalendar-package';
import 'dhx-eventcalendar-package/dist/event-calendar.css';
~~~

Note that depending on the used package, the source files can be minified. In this case make sure that you are importing the CSS file as **event-calendar.min.css**.

- if you use the trial version of Event Calendar, specify the following paths:

~~~jsx title="EventCalendar.jsx"
import { EventCalendar } from '@dhx/trial-eventcalendar';
import "@dhx/trial-eventcalendar/dist/event-calendar.css";
~~~

In this tutorial you can see how to configure the **trial** version of Event Calendar.

#### Setting the container and adding Event Calendar

To display Event Calendar on the page, you need to set the container to render the component inside. Check the code below:

~~~jsx title="EventCalendar.jsx"
import { EventCalendar } from '@dhx/trial-eventcalendar';
import '@dhx/trial-eventcalendar/dist/event-calendar.css';

// eslint-disable-next-line react/prop-types
const EventCalendarComponent = () => {
    let container = useRef();

    return <div ref={container} style={{ width: "100%", height: "100%" }}></div>;
};

export default EventCalendarComponent;
~~~

Then you need to add Event Calendar into the container. For this purpose, import the `useEffect()` method of React and use it to render the Event Calendar instance and destruct when it is no longer needed:

~~~jsx {2,8-12} title="EventCalendar.jsx"
// ...
import { useEffect, useRef} from "react";

// eslint-disable-next-line react/prop-types
const EventCalendarComponent = () => {
    let container = useRef();

    useEffect(() => {
        new EventCalendar(container.current, {});

        return () => (container.current.innerHTML = "");
    }, []);
    
    return <div ref={container} style={{ width: "100%", height: "100%" }}></div>;
};

export default EventCalendarComponent;
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

Then open the ***EventCalendar.jsx*** file, pass the name of the data file to the component constructor function:

~~~jsx {1,6-7} title="EventCalendar.jsx"
const EventCalendarComponent = (props) => {
    let container = useRef();

    useEffect(() => {
        new EventCalendar(container.current, {
            events: props.events,
            date: props.date
        });
        return () => (container.current.innerHTML = "");
    }, []);
    
    return <div ref={container}></div>;
};

export default EventCalendarComponent;
~~~

You can also use the `parse()` method inside the `useEffect()` method of React to load data into Event Calendar:

~~~jsx {6-8} title="EventCalendar.jsx"
const EventCalendarComponent = ({ data }) => {
    let container = useRef();

    useEffect(() => {
        const calendar = new EventCalendar(container.current, {});
        calendar.parse(data);
            return () => (container.current.innerHTML = "");
        }, []);
    
    return <div ref={container}></div>;
};
~~~

The `calendar.parse(data);` line provides data reloading on each applied change.

Now the Event Calendar component is ready. When the element will be added to the page, it will initialize the Event Calendar object with data. You can provide necessary configuration settings as well. Visit our [Event Calendar API docs](/api/overview/properties_overview/) to check the full list of available properties.

#### Handling events

When a user makes some action in the Event Calendar, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](/api/overview/events_overview/).

Open **EventCalendar.jsx** and complete the `useEffect()` method in the following way:

~~~jsx {4-6} title="EventCalendar.jsx"
useEffect(() => {
    const calendar = new EventCalendar(container.current, {});

    calendar.events.on("add-event", (obj) => {
        console.log(obj);
    });
    
    return () => (container.current.innerHTML = "");
}, []);
~~~

### Step 3. Adding Event Calendar into the app

To add the component into our app, open the **App.jsx** file and replace the default code with the following one:

~~~jsx title="App.jsx"
import EventCalendar from "./EventCalendar";
import { getData } from "./data";

function App() {
    const events= getData();
    return <EventCalendar events={events} date={new Date(2024, 5, 10)} />;
}

export default App;
~~~

After that, when you can start the app to see Event Calendar loaded with data on a page.

![Event Calendar initialization](../assets/trial_eventcalendar.png)

Now you know how to integrate DHTMLX Event Calendar with React. You can customize the code according to your specific requirements. The final example you can find on [**GitHub**](https://github.com/DHTMLX/react-event-calendar-demo).
