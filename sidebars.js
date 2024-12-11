module.exports = {
    docs: [
        {
            type: "doc",
            id: "index"
        },
        {
            type: "doc",
            id: "how_to_start"
        },
        {
            type: "category",
            label: "What's new and migration",
            collapsible: true,
            collapsed: true,
            link: {
                type: 'generated-index',
                title: "What's new and migration",
                keywords: ['news'],
                image: '/img/docusaurus.png'
            },
            items: [
                "news/whats_new",
                "news/migration"
            ]
        },
        {
            type: "category",
            label: "API",
            collapsible: true,
            collapsed: false,
            link: {
                type: 'doc',
                id: "api/api_overview"
            },
            items: [
                //"api/api_overview",
                // Event Calendar methods
                {
                    type: "category",
                    label: "Event Calendar methods",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: 'doc',
                        id: "api/overview/methods_overview"
                    },
                    items: [
                        "api/methods/js_eventcalendar_addcalendar_method",
                        "api/methods/js_eventcalendar_addevent_method",
                        "api/methods/js_eventcalendar_closeeditor_method",
                        "api/methods/js_eventcalendar_createevent_method",
                        "api/methods/js_eventcalendar_deletecalendar_method",
                        "api/methods/js_eventcalendar_deleteevent_method",
                        "api/methods/js_eventcalendar_destructor_method",
                        "api/methods/js_eventcalendar_getcalendar_method",
                        "api/methods/js_eventcalendar_getevent_method",
                        "api/methods/js_eventcalendar_hideeventinfo_method",
                        "api/methods/js_eventcalendar_openeditor_method",
                        "api/methods/js_eventcalendar_parse_method",
                        "api/methods/js_eventcalendar_serialize_method",
                        "api/methods/js_eventcalendar_setconfig_method",
                        "api/methods/js_eventcalendar_setdate_method",
                        "api/methods/js_eventcalendar_setlocale_method",
                        "api/methods/js_eventcalendar_setmode_method",
                        "api/methods/js_eventcalendar_settheme_method",
                        "api/methods/js_eventcalendar_showeventinfo_method",
                        "api/methods/js_eventcalendar_togglesidebar_method",
                        "api/methods/js_eventcalendar_updatecalendar_method",
                        "api/methods/js_eventcalendar_updateevent_method"
                    ]
                },
                // Event Calendar internal methods
                {
                    type: "category",
                    label: "Event Calendar internal API",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: 'generated-index',
                        title: 'Internal API overview',
                        keywords: ['internal api'],
                        image: '/img/docusaurus.png'
                    },
                    items: [
                        {
                            type: "category",
                            label: "Event Bus methods",
                            collapsible: true,
                            collapsed: true,
                            link: {
                                type: 'doc',
                                id: "api/overview/internal_eventbus_overview"
                            },
                            items: [
                                "api/internal/js_eventcalendar_exec_method",
                                "api/internal/js_eventcalendar_intercept_method",
                                "api/internal/js_eventcalendar_on_method",
                                "api/internal/js_eventcalendar_setnext_method"
                            ]
                        },
                        {
                            type: "category",
                            label: "State methods",
                            collapsible: true,
                            collapsed: true,
                            link: {
                                type: 'doc',
                                id: "api/overview/internal_state_overview"
                            },
                            items: [
                                "api/internal/js_eventcalendar_getreactivestate_method",
                                "api/internal/js_eventcalendar_getstate_method",
                                "api/internal/js_eventcalendar_getstores_method"
                            ]
                        } 
                    ]
                },     
                {
                    type: "category",
                    label: "Event Calendar events",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: 'doc',
                        id: "api/overview/events_overview"
                    },
                    items: [
                        // Event Calendar events
                        "api/events/js_eventcalendar_addcalendar_event",
                        "api/events/js_eventcalendar_addevent_event",
                        "api/events/js_eventcalendar_closeeventinfo_event",
                        "api/events/js_eventcalendar_deletecalendar_event",
                        "api/events/js_eventcalendar_deleteevent_event",
                        "api/events/js_eventcalendar_editevent_event",
                        "api/events/js_eventcalendar_selectevent_event",
                        "api/events/js_eventcalendar_setbound_event",
                        "api/events/js_eventcalendar_setdate_event",
                        "api/events/js_eventcalendar_setmode_event",
                        "api/events/js_eventcalendar_togglesidebar_event",
                        "api/events/js_eventcalendar_updatecalendar_event",
                        "api/events/js_eventcalendar_updateevent_event"
                    ]
                },
                {
                    type: "category",
                    label: "Event Calendar properties",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: 'doc',
                        id: "api/overview/properties_overview"
                    },
                    items: [
                        // Event Calendar properties
                        "api/config/js_eventcalendar_calendars_config",
                        "api/config/js_eventcalendar_colors_config",
                        "api/config/js_eventcalendar_config_config",
                        "api/config/js_eventcalendar_date_config",
                        "api/config/js_eventcalendar_editorshape_config",
                        "api/config/js_eventcalendar_events_config",
                        "api/config/js_eventcalendar_locale_config",
                        "api/config/js_eventcalendar_mode_config",
                        "api/config/js_eventcalendar_sidebar_config",
                        "api/config/js_eventcalendar_templates_config",
                        "api/config/js_eventcalendar_theme_config"
                    ]
                },
                // Backend api
                {
                    type: "category",
                    label: "Backend API",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: 'generated-index',
                        title: "Backend API",
                        keywords: ['rest api'],
                        image: '/img/docusaurus.png'
                    },
                    items: [
                        // RestDataProvider api
                        {
                            type: "category",
                            label: "RestDataProvider API",
                            collapsible: true,
                            collapsed: true,
                            link: {
                                type: 'generated-index',
                                title: "RestDataProvider API",
                                keywords: ['rest api'],
                                image: '/img/docusaurus.png'
                            },
                            items: [
                                // REST methods
                                {
                                    type: "category",
                                    label: "REST methods",
                                    collapsed: true,
                                    link: {
                                        type: 'doc',
                                        id: "api/overview/rest_methods_overview"                            
                                    },
                                    items: [
                                        "api/provider/rest_methods/js_eventcalendar_getevents_method",
                                        "api/provider/rest_methods/js_eventcalendar_getcalendars_method",
                                        "api/provider/rest_methods/js_eventcalendar_send_method"
                                    ]
                                }
                            ]
                        },
                        // REST routes
                        {
                            type: "category",
                            label: "REST routes",
                            collapsed: true,
                            link: {
                                type: 'doc',
                                id: "api/overview/rest_routes_overview"                            
                            },
                            items: [
                                {
                                    type: "category",
                                    label: "GET routes",
                                    collapsed: true,
                                    link: {
                                        type: 'generated-index',
                                        title: "GET routes",
                                        keywords: ['routes'],
                                        image: '/img/docusaurus.png'
                                    },
                                    items: [
                                        "api/provider/rest_routes/get_routes/js_eventcalendar_getevents_route",
                                        "api/provider/rest_routes/get_routes/js_eventcalendar_getcalendars_route",
                                        "api/provider/rest_routes/get_routes/js_eventcalendar_getuploads_route"
                                    ]
                                },
                                {
                                    type: "category",
                                    label: "POST routes",
                                    collapsed: true,
                                    link: {
                                        type: 'generated-index',
                                        title: "POST routes",
                                        keywords: ['routes'],
                                        image: '/img/docusaurus.png'
                                    },
                                    items: [
                                        "api/provider/rest_routes/post_routes/js_eventcalendar_postevent_route",
                                        "api/provider/rest_routes/post_routes/js_eventcalendar_postcalendar_route",
                                        "api/provider/rest_routes/post_routes/js_eventcalendar_postupload_route"
                                    ]
                                },
                                {
                                    type: "category",
                                    label: "PUT routes",
                                    collapsed: true,
                                    link: {
                                        type: 'generated-index',
                                        title: "PUT routes",
                                        keywords: ['routes'],
                                        image: '/img/docusaurus.png'
                                    },
                                    items: [
                                        "api/provider/rest_routes/put_routes/js_eventcalendar_putevent_route",
                                        "api/provider/rest_routes/put_routes/js_eventcalendar_putcalendar_route"
                                    ]
                                },
                                {
                                    type: "category",
                                    label: "DELETE routes",
                                    collapsed: true,
                                    link: {
                                        type: 'generated-index',
                                        title: "DELETE routes",
                                        keywords: ['routes'],
                                        image: '/img/docusaurus.png'
                                    },
                                    items: [
                                        "api/provider/rest_routes/delete_routes/js_eventcalendar_deleteevent_route",
                                        "api/provider/rest_routes/delete_routes/js_eventcalendar_deletecalendar_route"                                   
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        //start Backend and frameworks integration
        {
            type: "category",
            label: "Backend and frameworks integration",
            link: {
                type: 'generated-index',
                title: "Backend and frameworks integration",
                keywords: ['backend and frameworks integration'],
                image: '/img/docusaurus.png'
            },
            items: [
                "guides/working_with_server",
                "guides/integration_with_angular",
                "guides/integration_with_react",
                "guides/integration_with_vue",
                "guides/integration_with_svelte"
            ]
        },
        // end Backend and frameworks integration
        {
            type: "category",
            label: "Guides",
            collapsible: true,
            collapsed: true,
            link: {
                type: 'generated-index',
                title: 'Guides',
                keywords: ['guides'],
                image: '/img/docusaurus.png',
            },
            items: [
                "guides/initialization",
                "guides/configuration", // Common Configuration
                "guides/views", // View Configuration
                "guides/customization",
                "guides/stylization",
                "guides/localization",
                "guides/working_with_data",
                //"guides/working_with_server",
                "guides/typescript_support"
            ]
        },
        {
            type: "doc",
            id: "howtos"
        }
    ]
};
