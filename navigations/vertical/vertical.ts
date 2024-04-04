export const vertical = () => {
  return [
    {
        "title": "home",
        "icon": {
            "name": "ph:house-light",
            "size": "28"
        },
        "permissions": [
            "Browse Home"
        ],
        "to": "/home"
    },
    {
        "title": "users",
        "icon": {
            "name": "nimbus:user-group",
            "size": "28"
        },
        "permissions": [
            "Browse Users"
        ],
        "to": "/users"
    },
    {
        "title": "roles",
        "icon": {
            "name": "ic:round-lock-open",
            "size": "28"
        },
        "permissions": [
            "Browse Roles"
        ],
        "to": "/roles"
    },
    {
        "title": "permissions",
        "icon": {
            "name": "arcticons:permissionchecker",
            "size": "28"
        },
        "permissions": [
            "Browse Permissions"
        ],
        "to": "/permissions"
    },
    {
        "title": "states",
        "icon": {
            "name": "mingcute:book-5-line",
            "size": "28"
        },
        "permissions": [
            "Browse States"
        ],
        "status": false,
        "children": [
            {
                "title": "states lists",
                "icon": {
                    "name": "material-symbols:lists-rounded",
                    "size": "18"
                },
                "to": "/states",
                "permissions": [
                    "Browse States"
                ]
            },
            {
                "title": "51",
                "icon": {
                    "name": "ic:twotone-numbers",
                    "size": "18"
                },
                "to": "/states/fiftyone",
                "permissions": [
                    "Browse States-fiftyone"
                ]
            },
            {
                "title": "01",
                "icon": {
                    "name": "ic:twotone-numbers",
                    "size": "18"
                },
                "to": "/states/zero-one",
                "permissions": [
                    "Browse States-zero-one"
                ]
            }
        ]
    },
    {
        "title": "salary management",
        "icon": {
            "name": "eos-icons:cluster-management-outlined",
            "size": "28"
        },
        "permissions": [
            "Browse Salary-management"
        ],
        "to": "/salary-management"
    },
    {
        "title": "references",
        "icon": {
            "name": "codicon:references",
            "size": "28"
        },
        "permissions": [
            "Browse References"
        ],
        "status": false,
        "children": [
            {
                "title": "references lists",
                "icon": {
                    "name": "material-symbols:lists-rounded",
                    "size": "18"
                },
                "permissions": [
                    "Browse References-lists"
                ],
                "to": "/references/lists"
            },
            {
                "title": "group",
                "icon": {
                    "name": "material-symbols:lists-rounded",
                    "size": "18"
                },
                "to": "/references/group"
            },
            {
                "title": "subgroup",
                "icon": {
                    "name": "material-symbols:lists-rounded",
                    "size": "18"
                },
                "to": "/references/subgroup"
            },
            {
                "title": "tarifniy_razryat",
                "icon": {
                    "name": "material-symbols:lists-rounded",
                    "size": "18"
                },
                "to": "/references/tarifniy_razryat"
            },
            {
                "title": "doljnostnoy_oklad",
                "icon": {
                    "name": "material-symbols:lists-rounded",
                    "size": "18"
                },
                "to": "/references/doljnostnoy_oklad"
            },
            {
                "title": "",
                "icon": {
                    "name": "material-symbols:note-stack-add",
                    "size": "18"
                },
                "to": "/references/adds",
                "add": true
            }
        ]
    }
]
}
