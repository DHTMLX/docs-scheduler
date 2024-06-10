---
sidebar_label: Integration with Angular
title: Integration with Angular
description: You can learn about the integration with Angular in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# Integration with Angular

:::tip
You should be familiar with basic concepts and patterns of **Angular** before reading this documentation. To refresh your knowledge, please refer to the [**Angular documentation**](https://angular.io/docs).
:::

DHTMLX Event Calendar is compatible with **Angular**. We have prepared code examples on how to use DHTMLX Event Calendar with **Angular**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/angular-event-calendar-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Angular CLI**](https://angular.io/cli) and [**Node.js**](https://nodejs.org/en/).
:::

Create a new **my-angular-event-calendar-app** project using Angular CLI. Run the following command for this purpose:

~~~json
ng new my-angular-event-calendar-app
~~~

The command above installs all the necessary tools and dependencies, so you don't need to run any additional commands.

### Installation of dependencies

Go to the app directory:

~~~json
cd my-angular-event-calendar-app
~~~

Run the app with the following commands:

~~~json
yarn install
yarn start
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Creating Event Calendar

Now you should get the DHTMLX Event Calendar code. First of all, stop the app and proceed with installing the Event Calendar package.

### Step 1. Package installation

Download the [**trial Event Calendar package**](/how_to_start/#installing-event-calendar-via-npm-and-yarn) and follow steps mentioned in the README file. Note that trial Event Calendar is available 30 days only.
  
### Step 2. Component creation

Now you need to create a component, to add an Event Calendar into the application. Create  the **event-calendar** folder in the **src/app/** directory, add a new file into it and name it **event-calendar.component.ts**. Then complete the steps described below.

#### Importing source files

Open the file and import Event Calendar source files. Note that:

- if you use PRO version and install the Event Calendar package from a local folder, the imported paths look like this:

~~~jsx
import { EventCalendar } from 'dhx-eventcalendar-package';
~~~

- if you use the trial version of Event Calendar, specify the following paths:

~~~jsx
import { EventCalendar } from '@dhx/trial-eventcalendar';
~~~

In this tutorial you can see how to configure the **trial** version of Event Calendar.

#### Setting the container and adding Event Calendar

To display Event Calendar on the page, you need to set the container to render the component inside. Use the code below:

~~~jsx title="event-calendar.component.ts"
import { EventCalendar } from '@dhx/trial-eventcalendar';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy} from '@angular/core';

@Component({
    selector: 'event-calendar',
    template: '<div #container></div>'
})
export class EventCalendarComponent implements OnInit {
    @ViewChild('container', { static: true }) container!: ElementRef;
}
~~~

Then you need to render our Event Calendar in the container. To do that, use the `ngOnInit()` method of Angular:

~~~jsx {6-9} title="event-calendar.component.ts"
export class EventCalendarComponent implements OnInit, OnDestroy {
    @ViewChild('container', { static: true }) container!: ElementRef;

    private _calendar: any;

    ngOnInit() {
        const calendar = new EventCalendar(this.container.nativeElement,{});
        this._calendar = calendar;
    }

    ngOnDestroy() {
        this._calendar.destructor();
    }
}
~~~

In the above code you also specified the `ngOnDestroy()` method that contains the `_calendar.destructor()` expression to clear the component when it is no longer needed.

#### Loading data

To add data into Event Calendar, you need to provide a data set. You can create the **data.ts** file in the **src/app/event-calendar/** directory and add some data into it:

~~~jsx title="data.ts"
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

Then open the ***event-calendar.component.ts*** file. Import the file with data and specify the corresponding data properties to the configuration object of Event Calendar within the `ngOnInit()` method, as shown below.

~~~jsx {2,5,7} title="event-calendar.component.ts"
// importing the data file
import { getData } from './data';

ngOnInit() {
    const events = getData();
    const calendar = new EventCalendar(this.container.nativeElement, {
        events
    });
}
~~~

You can also use the [`parse()`](/api/methods/js_eventcalendar_parse_method/) method inside the `ngOnInit()` method of Angular to load data into Event Calendar. It will reload data on each applied change.

~~~jsx {11} title="event-calendar.component.ts"
// importing the data file
import { getData } from './data';

ngOnInit() {
    const events = getData();
    const calendar = new EventCalendar(this.container.nativeElement, {});

    calendar.parse(events);
}
~~~

Now the Event Calendar component is ready. When the element will be added to the page, it will initialize the Event Calendar object with data. You can provide necessary configuration settings as well. Visit our [Event Calendar API docs](/api/overview/properties_overview/) to check the full list of available properties.

#### Handling events

When a user makes some action in the Event Calendar, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](/api/overview/events_overview/).

Open the **event-calendar.component.ts** file and complete the `ngOnInit()` method as in:

~~~jsx {4-6} title="event-calendar.component.ts"
ngOnInit() {
    const calendar = new EventCalendar(this.container.nativeElement,{ /*...*/ });

    calendar.api.on("add-event", (obj) => {
        console.log(obj);
    });
}
~~~

### Step 3. Adding Event Calendar into the app

Now it's time to add the component into your app. Open ***src/app/app.component.ts*** and use *EventCalendarComponent* instead of the default content by inserting the code below:

~~~jsx title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<event-calendar/>`
})
export class AppComponent {
    name = "";
}
~~~

Then create the ***app.module.ts*** file in the ***src/app/*** directory and insert the *EventCalendarComponent* as provided below:

~~~jsx title="app.module.ts"
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { EventCalendarComponent } from "./event-calendar/event-calendar.component";

@NgModule({
    declarations: [AppComponent, EventCalendarComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
~~~

The last step is to open the ***src/main.ts*** file and replace the existing code with the following one:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

After that, you can start the app to see Event Calendar loaded with data on a page.

![Event Calendar initialization](../assets/trial_eventcalendar.png)

Now you know how to integrate DHTMLX Event Calendar with Angular. You can customize the code according to your specific requirements. The final example you can find on [**GitHub**](https://github.com/DHTMLX/angular-event-calendar-demo).
