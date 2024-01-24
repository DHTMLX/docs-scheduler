---
sidebar_label: editorShape
title: editorShape Config
description: You can learn about the editorShape config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# editorShape

### Description

@short: Optional. An array of objects containing settings for managing the appearance and functionality of the Event Calendar editor

### Usage

~~~jsx {3,8,18,32,41,57,60,63}
editorShape?: [
    {
        // common settings
        type: string,
        key: string,
        label?: string,

        // for "text" and "textarea" types
        config?: {
            readonly?: boolean,
            focus?: boolean,
            disabled?: boolean,
            placeholder?: string,
            type?: string,
            inputStyle?: string
        },

        // for "combo" and "multiselect" types only
        template?: (option) => string, 
        options?: [
            {
                id: any,
                label: string,
            },
            {...} // other options
        ],
        config?: {
            placeholder?: string,
            disabled?: boolean
        },

        // for a "radio" type only
        options?: [
            {
                id: any,
                label?: string, 
            },
            {...} // other options
        ],

        // for "color" and "colorSchema" types
        colors?: [], // for a "color" type only
        colors?: [ // for a "colorSchema" type only
            {
                background?: string,
                border?: string,
                textColor? string,
                colorpicker? string
            },
            {...}
        ],
        config?: {
            placeholder?: string,
            clear?: boolean
        },

        // for a "checkbox" type only
        text?: string,

        // for a "date" type only
        time?: boolean,

        // for a "files" type only
        uploadURL?: string,
        config?: {
            accept?: string,
            disabled?: boolean,
            multiple?: boolean,
            folder?: boolean
        }
    }, {...}
];
~~~

### Parameters

To configure the editor appearance and functionality, you can specify the following parameters (fields):

#### - Common parameters for all types

- `type` - (required) an editor field type. Here you can specify the following types: **text**, **textarea**,  **combo**, **multiselect**, **color**, **checkbox**, **date**, **radio**, **files** and **recurring**

:::note
The **recurring** type of editor doesn't require a key to bind to events!
:::

- `key` - (required) an editor field key. Here you need to use the value specified in the [`events`](../js_eventcalendar_events_config) property. See the example below:

~~~js {4-5,12,20}
// event data
const events = [
    {
        text: "Current event",
        start_date: new Date("2021-05-24T00:00:00")
    }, {...}
];
// editor settings
const editorShape = [ 
    {
        type: "text",
        key: "text",
        label: "Event name",
        config: {
            placeholder: "New event"
        }
    },
    {
        type: "date",
        key: "start_date", 
        label: "Start date",
        time: true
    }
];
~~~

- `label` - (optional) an editor field label

#### - Parameters for "text" and "textarea" types

- `config` - (optional) a configuration object of the **"text"** and **"textarea"** fields. Here you can specify the following parameters:
    - `readonly` - (optional) enables/disables a readonly mode
    - `focus` - (optional) enables/disables a focus
    - `disabled` - (optional) enables/disables a field state
    - `placeholder` - (optional) a placeholder value
    - `type` - (optional) a type of the input field (only for **text** type). Here you can specify only the **password**, **number**, and **text** values)
    - `inputStyle` - (optional) a custom css style

#### - Parameters for "combo" and "multiselect" types

- `template` - (optional) a function that needs to return a custom template of the drop-down options
- `options` - (optional) an array of objects containing the dropdown options data. Here you can specify the following parameters:
    - `id` - (required) an option **ID** 
    - `label` - (required) an option label 
- `config` - (optional) a configuration object of the **"combo"** field. Here you can specify the following parameters:
    - `placeholder` - (optional) a placeholder value
    - `disabled` - (optional) enables/disables a field state

#### - Parameters for a "radio" type

- `options` - (optional) an array of objects containing the radio button data. Here you can specify the following parameters:
    - `value` - (required) a radio button value 
    - `label` - (optional) an option label 

#### - Parameters for "color" and "colorSchema" types

:::note
For a **color** type only
- `colors` - (optional) an array with valid HEX codes
:::

:::note
For a **colorSchema** type only. Unless you specify *colors* for the **colorSchema** type, the colorpicker will use a set of parameters specified via the [`colors`](../js_eventcalendar_colors_config) property
- `colors` - (optional) an array of objects containing the parameters of colors used in colorpicker. For each set of colors you can specify the following parameters:
    - `background` - (optional) a HEX code of the event background color
    - `border` - (optional) a HEX code of the event border color
    - `textColor` - (optional) a HEX code of the event text color
    - `colorpicker` - (optional) a value (color) used in colorpicker. The possible values are *"background"* and *"border"*
:::

- `config` - (optional) a configuration object of the **"color"** and **"colorSchema"** fields. Here you can specify the following parameters:
    - `placeholder` - (optional) a placeholder value
    - `clear` - (optional) shows/hides a "clear" icon

#### - Parameters for a "checkbox" type

- `text` - (optional) text label (only for **checkbox** type)

#### - Parameters for a "date" type

- `time` - (optional) - enables/disables a *timepicker* (besides a *datepicker*)

#### - Parameters for a "files" type

- `uploadURL` - (optional) an URL of the editor uploader
- `config` - (optional) a configuration object of the **"files"** field. Here you can specify the following parameters:
    - `accept` - (optional) a file type to be uploaded (***"image/\*", "video/\*", "audio/\*"*** *and other*)
    - `disabled` - (optional) enables/disables uploading *files*
    - `multiple` - (optional) enables/disables uploading *multiple files*
    - `folder` - (optional) enables/disables uploading *folders*

:::info
Unless you specify the editor settings via the **editorShape** property, the widget will apply the **defaultEditorShape** set of parameters!
:::

### Default config

:::note
You can export the default config using the `eventCalendar.defaultEditorShape` expression.
:::

~~~jsx {}
const defaultEditorShape = [
    {
        key: "text",
        type: "text",
        label: "Event name",
        config: {
            placeholder: "New Event"
        }
    },
    {
        type: "date",
        key: "start_date",
        label: "Start date",
        time: true
    },
    {
        type: "date",
        key: "end_date",
        label: "End date",
        time: true
    },
    {
        type: "checkbox",
        key: "allDay",
        text: "All day"
    },
    {
        type: "combo",
        key: "type",
        label: "Type"
    },
    {
        key: "details",
        type: "textarea",
        label: "Description",
        config: {
            placeholder: "Add description"
        }
    },
    {
        type: "recurring",
        label: "Repeat event"
    }
];
~~~

:::info
To set the **editorShape** config dynamically, you can use the 
[`setConfig()`](api/methods/js_eventcalendar_setconfig_method.md) method
:::

### Example

~~~jsx {8-16,19}
// event priorities
const priorities = [
    { value: 1, label: "High" },
    { value: 2, label: "Medium" },
    { value: 3, label: "Low" }
];
// editor settings
const editorShape = [ 
    ...eventCalendar.defaultEditorShape, // include the default settings
    { // add custom radio field
        type: "radio",
        key: "priority",
        label: "Priority",
        options: priorities
    }
];
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    editorShape
    // other configuration parameters
});
~~~

**Related articles:** [Configuration](../../../guides/configuration#editor)

**Related sample:** [Event Calendar. Event color](https://snippet.dhtmlx.com/qw45r367?tag=event_calendar) and [Event Calendar. Custom editor fields](https://snippet.dhtmlx.com/bxwdj1rt?tag=event_calendar) 

**Change log:** The ***recurring*** type of editor was added in v2.0