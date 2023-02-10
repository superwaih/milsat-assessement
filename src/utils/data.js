
export const Managers = [
    {
        manager_id: "ma001",
        name: "Adewale",
        role: "Manager",
        users_Assigned: [
            {
                name: "user1",
                assigned_tasks: ["poly001", "poly005"]
            },
            {
                name: "user2",
                assigned_tasks: ["polygonTwo", "polygonetwo"]
            },            {
                name: "user3",
                assigned_tasks: ["polygonTwo", "polygonetwo"]
            },            {
                name: "user4",
                assigned_tasks: ["polygonTwo", "polygonetwo"]
            },
        ]
    },
  

]

export const Tasks = [
    {
        taskid: "poly001",
        assign: true,
        assigned_users: ["user1", "user3"],
        geojson: {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    [
                      [
                        7.453557426964892,
                        9.075491150565611
                      ],
                      [
                        7.453557426964892,
                        9.046724811949716
                      ],
                      [
                        7.476905781800809,
                        9.046724811949716
                      ],
                      [
                        7.476905781800809,
                        9.075491150565611
                      ],
                      [
                        7.453557426964892,
                        9.075491150565611
                      ]
                    ]
                  ],
                  "type": "Polygon"
                }
              }
            ]
          },
        color: '#ffffff',
    },
    {
        taskid: "poly002",
        assign: false,
        assigned_users: [],
        geojson: {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    [
                      [
                        7.477128147084073,
                        9.07538135976094
                      ],
                      [
                        7.477128147084073,
                        9.046724811949716
                      ],
                      [
                        7.499920588710097,
                        9.046724811949716
                      ],
                      [
                        7.499920588710097,
                        9.07538135976094
                      ],
                      [
                        7.477128147084073,
                        9.07538135976094
                      ]
                    ]
                  ],
                  "type": "Polygon"
                }
              }
            ]
          },
          color: '#ffffff',
    }, 
    {
        taskid: "poly003",
        assign: false,
        assigned_users: [],
        geojson: {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    [
                      [
                        7.5001429539933895,
                        9.075600941335566
                      ],
                      [
                        7.5001429539933895,
                        9.046724811949716
                      ],
                      [
                        7.519711098998556,
                        9.046724811949716
                      ],
                      [
                        7.519711098998556,
                        9.075600941335566
                      ],
                      [
                        7.5001429539933895,
                        9.075600941335566
                      ]
                    ]
                  ],
                  "type": "Polygon"
                }
              }
            ]
          },
          color: '#ffffff',
    }, {
        taskid: "poly004",
        assign: false,
        assigned_users: [],
          geojson: {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    [
                      [
                        7.500254136635618,
                        9.075710732073063
                      ],
                      [
                        7.519488733715235,
                        9.075710732073063
                      ],
                      [
                        7.519488733715235,
                        9.102937796302854
                      ],
                      [
                        7.500254136635618,
                        9.102937796302854
                      ],
                      [
                        7.500254136635618,
                        9.075710732073063
                      ]
                    ]
                  ],
                  "type": "Polygon"
                }
              }
            ]
          },
        color: '#ffffff',
    },
    {
        taskid: "poly005",
        assign: false,
        assigned_users: [],
          geojson: {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    [
                      [
                        7.500254136635618,
                        9.075710732073063
                      ],
                      [
                        7.500254136635618,
                        9.102937796302854
                      ],
                      [
                        7.4799077131361,
                        9.102937796302854
                      ],
                      [
                        7.4799077131361,
                        9.075710732073063
                      ],
                      [
                        7.500254136635618,
                        9.075710732073063
                      ]
                    ]
                  ],
                  "type": "Polygon"
                }
              }
            ]
          },
        color: '#ffffff',
    },
    {
        taskid: "poly006",
        assign: false,
        assigned_users: [],
          geojson: {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    [
                      [
                        7.479796530493928,
                        9.075710732073063
                      ],
                      [
                        7.479796530493928,
                        9.10304757866021
                      ],
                      [
                        7.460784298699821,
                        9.10304757866021
                      ],
                      [
                        7.460784298699821,
                        9.075710732073063
                      ],
                      [
                        7.479796530493928,
                        9.075710732073063
                      ]
                    ]
                  ],
                  "type": "Polygon"
                }
              }
            ]
          },
        color: '#ffffff',
    },
]