
export const Managers = [
    {
        manager_id: "ma001",
        name: "Adewale",
        role: "Manager",
        my_collectors:[{
          user001: ["poly001"],
          user002: [],
          user003: ["poly001"],
          user004: [],
          user005: [],
          user006: [],
    }]
       

    },
  

]

export const Tasks = [
    {
        taskid: "poly001",
        assign: true,
        assigned_users: ["user001", "user003"],
        geojson: {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {
                  taskid: "poly002",
                },
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
                "properties": {
                  taskid: "poly002"
                },
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

export const Allusers = [
        {
          "id": "3ab19c6e-ce20-4242-8ccc-daa1969a2985",
          "fullname": "Aminat Balogun",
          "dateCreated": "2023-02-22T16:29:49.220985",
          "imageUrl": null,
          "phoneNumber": "08061467804",
          "email": "fowoke@gmail.com",
          "designation": "Collector",
          "approvalStatus": "Approved",
          "staffStatus": "Adhoc",
          "workFrameTypes": "NoFrame",
          "stateCode": null,
          "locName": null,
          "locCode": null,
          "originLgaCode": null,
          "clientId": 2,
          "clientName": "National Population Commission NPC",
          "originLgaName": null,
          "assignedCountry": "NIGERIA",
          "assignedLgaCode": "410",
          "assignedState": "KWARA",
          "assignedLga": "ILORIN SOUTH",
          "lastDateModified": null
        },
        {
          "id": "791a8dd5-9456-4bd6-9c74-eb687eefca8d",
          "fullname": "HALIDU UMAR FARUK",
          "dateCreated": "2023-02-22T16:29:13.248603",
          "imageUrl": null,
          "phoneNumber": "08091299165",
          "email": "HALIDUUMARFARUK@gmail.com",
          "designation": "Collector",
          "approvalStatus": "Approved",
          "staffStatus": "Adhoc",
          "workFrameTypes": "NoFrame",
          "stateCode": null,
          "locName": null,
          "locCode": null,
          "originLgaCode": null,
          "clientId": 2,
          "clientName": "National Population Commission NPC",
          "originLgaName": null,
          "assignedCountry": "NIGERIA",
          "assignedLgaCode": "309",
          "assignedState": "FCT",
          "assignedLga": "ABUJA MUNICIPAL AREA COUNCIL",
          "lastDateModified": null
        },
        {
          "id": "1d8ad14d-3fa9-45a5-a9f1-037076592fe0",
          "fullname": "ADEYAN ADETAYO",
          "dateCreated": "2023-02-22T16:23:37.612121",
          "imageUrl": null,
          "phoneNumber": "08030501095",
          "email": "ADEYANADETAYO@gmail.com",
          "designation": "Collector",
          "approvalStatus": "Approved",
          "staffStatus": "Adhoc",
          "workFrameTypes": "NoFrame",
          "stateCode": null,
          "locName": null,
          "locCode": null,
          "originLgaCode": null,
          "clientId": 2,
          "clientName": "National Population Commission NPC",
          "originLgaName": null,
          "assignedCountry": "NIGERIA",
          "assignedLgaCode": "506",
          "assignedState": "ONDO",
          "assignedLga": "AKURE SOUTH",
          "lastDateModified": null
        },
        {
          "id": "4ef99b3f-30a5-4670-8429-3e5dd940f72c",
          "fullname": "AKINRINOLA JOHN OLUFEMI",
          "dateCreated": "2023-02-22T16:23:37.383819",
          "imageUrl": null,
          "phoneNumber": "08068616115",
          "email": "AKINRINOLAJOHNOLUFEMI@gmail.com",
          "designation": "Collector",
          "approvalStatus": "Approved",
          "staffStatus": "Adhoc",
          "workFrameTypes": "NoFrame",
          "stateCode": null,
          "locName": null,
          "locCode": null,
          "originLgaCode": null,
          "clientId": 2,
          "clientName": "National Population Commission NPC",
          "originLgaName": null,
          "assignedCountry": "NIGERIA",
          "assignedLgaCode": "506",
          "assignedState": "ONDO",
          "assignedLga": "AKURE SOUTH",
          "lastDateModified": null
        },
        {
          "id": "512f9d45-24d6-4576-8aa1-1dc2e09ad831",
          "fullname": "OYINKOLADE DAMILOLA",
          "dateCreated": "2023-02-22T16:22:03.282795",
          "imageUrl": null,
          "phoneNumber": "08033813769",
          "email": "OYINKOLADEDAMILOLA@gmail.com",
          "designation": "Supervisor",
          "approvalStatus": "Approved",
          "staffStatus": "Adhoc",
          "workFrameTypes": "NoFrame",
          "stateCode": null,
          "locName": null,
          "locCode": null,
          "originLgaCode": null,
          "clientId": 2,
          "clientName": "National Population Commission NPC",
          "originLgaName": null,
          "assignedCountry": "Nigeria",
          "assignedLgaCode": null,
          "assignedState": "ONDO",
          "assignedLga": "AKURE SOUTH",
          "lastDateModified": "2023-03-06T23:07:06.063232+00:00"
        },
        {
          "id": "bbe9ffbd-9957-4e43-b5f2-040dbd915b99",
          "fullname": "Abdulazeez Aminu",
          "dateCreated": "2023-02-22T16:20:39.71108",
          "imageUrl": null,
          "phoneNumber": "08068785930",
          "email": "AbdulazeezAminu@gmail.com",
          "designation": "Collector",
          "approvalStatus": "Approved",
          "staffStatus": "Adhoc",
          "workFrameTypes": "NoFrame",
          "stateCode": null,
          "locName": null,
          "locCode": null,
          "originLgaCode": null,
          "clientId": 2,
          "clientName": "National Population Commission NPC",
          "originLgaName": null,
          "assignedCountry": "NIGERIA",
          "assignedLgaCode": "347",
          "assignedState": "Taraba",
          "assignedLga": "Jalingo",
          "lastDateModified": null
        },
        {
          "id": "52abf96e-a3e4-445e-9e40-1b58c1f05b9a",
          "fullname": "Adamu Ado Baaba",
          "dateCreated": "2023-02-22T16:19:07.03963",
          "imageUrl": null,
          "phoneNumber": "08066126546",
          "email": "AdamuAdoBaaba@gmail.com",
          "designation": "Collector",
          "approvalStatus": "Approved",
          "staffStatus": "Adhoc",
          "workFrameTypes": "NoFrame",
          "stateCode": null,
          "locName": null,
          "locCode": null,
          "originLgaCode": null,
          "clientId": 2,
          "clientName": "National Population Commission NPC",
          "originLgaName": null,
          "assignedCountry": "NIGERIA",
          "assignedLgaCode": "110",
          "assignedState": "Yobe",
          "assignedLga": "Damaturu",
          "lastDateModified": null
        },
        {
          "id": "ddad263b-a9d0-4efb-829f-7b12b231d986",
          "fullname": "Idoma Kim",
          "dateCreated": "2023-02-22T16:15:03.585787",
          "imageUrl": null,
          "phoneNumber": "08070587328",
          "email": "IdomaKim@gmail.com",
          "designation": "Collector",
          "approvalStatus": "Approved",
          "staffStatus": "Adhoc",
          "workFrameTypes": "NoFrame",
          "stateCode": null,
          "locName": null,
          "locCode": null,
          "originLgaCode": null,
          "clientId": 2,
          "clientName": "National Population Commission NPC",
          "originLgaName": null,
          "assignedCountry": "NIGERIA",
          "assignedLgaCode": "169",
          "assignedState": "Gombe",
          "assignedLga": "Gombe",
          "lastDateModified": null
        },
        {
          "id": "dfe1d262-da23-48fe-baf7-d0ac36e128f1",
          "fullname": "UKAEGBU CHIMECHEFULA",
          "dateCreated": "2023-02-22T16:15:03.319726",
          "imageUrl": null,
          "phoneNumber": "08064937378",
          "email": "UKAEGBUCHIMECHEFULA@gmail.com",
          "designation": "Collector",
          "approvalStatus": "Approved",
          "staffStatus": "Adhoc",
          "workFrameTypes": "NoFrame",
          "stateCode": null,
          "locName": null,
          "locCode": null,
          "originLgaCode": null,
          "clientId": 2,
          "clientName": "National Population Commission NPC",
          "originLgaName": null,
          "assignedCountry": "NIGERIA",
          "assignedLgaCode": "640",
          "assignedState": "ABIA",
          "assignedLga": "UMUAHIA NORTH",
          "lastDateModified": null
        },
        {
          "id": "73b0617c-80dd-4d1b-8483-b260235a3ad2",
          "fullname": "AMAUCHE UDECHUKWU",
          "dateCreated": "2023-02-22T16:10:10.7175",
          "imageUrl": null,
          "phoneNumber": "09060174504",
          "email": "AMAUCHEUDECHUKWU@gmail.com",
          "designation": "Collector",
          "approvalStatus": "Approved",
          "staffStatus": "Adhoc",
          "workFrameTypes": "NoFrame",
          "stateCode": null,
          "locName": null,
          "locCode": null,
          "originLgaCode": null,
          "clientId": 2,
          "clientName": "National Population Commission NPC",
          "originLgaName": null,
          "assignedCountry": "NIGERIA",
          "assignedLgaCode": "542",
          "assignedState": "ANAMBRA",
          "assignedLga": "AWKA SOUTH",
          "lastDateModified": null
        },
        {
          "id": "0b7da701-4476-496f-99ea-afa21109c52e",
          "fullname": "CELESTINE OKEKE",
          "dateCreated": "2023-02-22T16:10:10.508114",
          "imageUrl": null,
          "phoneNumber": "08160000000",
          "email": "CELESTINEOKEKE@gmail.com",
          "designation": "Collector",
          "approvalStatus": "Approved",
          "staffStatus": "Adhoc",
          "workFrameTypes": "NoFrame",
          "stateCode": null,
          "locName": null,
          "locCode": null,
          "originLgaCode": null,
          "clientId": 2,
          "clientName": "National Population Commission NPC",
          "originLgaName": null,
          "assignedCountry": "NIGERIA",
          "assignedLgaCode": "542",
          "assignedState": "ANAMBRA",
          "assignedLga": "AWKA SOUTH",
          "lastDateModified": null
        },
        {
          "id": "46a2d103-5a72-4f59-a099-a2e459d0c114",
          "fullname": "NDUBUISI ONUEKWE",
          "dateCreated": "2023-02-22T16:10:10.302354",
          "imageUrl": null,
          "phoneNumber": "08066003731",
          "email": "NDUBUISIONUEKWE@gmail.com",
          "designation": "Collector",
          "approvalStatus": "Approved",
          "staffStatus": "Adhoc",
          "workFrameTypes": "NoFrame",
          "stateCode": null,
          "locName": null,
          "locCode": null,
          "originLgaCode": null,
          "clientId": 2,
          "clientName": "National Population Commission NPC",
          "originLgaName": null,
          "assignedCountry": "NIGERIA",
          "assignedLgaCode": "542",
          "assignedState": "ANAMBRA",
          "assignedLga": "AWKA SOUTH",
          "lastDateModified": null
        },
        {
          "id": "8e816a19-cd4a-43d4-b778-9c8c9efb30d6",
          "fullname": "UGOCHUKWU ONYENWE",
          "dateCreated": "2023-02-22T16:10:09.775792",
          "imageUrl": null,
          "phoneNumber": "08106443221",
          "email": "UGOCHUKWUONYENWE@gmail.com",
          "designation": "Supervisor",
          "approvalStatus": "Approved",
          "staffStatus": "Adhoc",
          "workFrameTypes": "NoFrame",
          "stateCode": null,
          "locName": null,
          "locCode": null,
          "originLgaCode": null,
          "clientId": 2,
          "clientName": "National Population Commission NPC",
          "originLgaName": null,
          "assignedCountry": "NIGERIA",
          "assignedLgaCode": "542",
          "assignedState": "ANAMBRA",
          "assignedLga": "AWKA SOUTH",
          "lastDateModified": null
        },
        {
          "id": "61e03baf-4b36-4faf-b356-b3eb01cfc61d",
          "fullname": "NELSON UMAHI",
          "dateCreated": "2023-02-22T16:10:09.553666",
          "imageUrl": null,
          "phoneNumber": "08134598027",
          "email": "NELSONUMAHI@gmail.com",
          "designation": "Collector",
          "approvalStatus": "Approved",
          "staffStatus": "Adhoc",
          "workFrameTypes": "NoFrame",
          "stateCode": null,
          "locName": null,
          "locCode": null,
          "originLgaCode": null,
          "clientId": 2,
          "clientName": "National Population Commission NPC",
          "originLgaName": null,
          "assignedCountry": "NIGERIA",
          "assignedLgaCode": "577",
          "assignedState": "EBONYI",
          "assignedLga": "ABAKALIKI",
          "lastDateModified": null
        },
        {
          "id": "3fb3dbda-60cd-4e26-b8fb-be4d96d40eb1",
          "fullname": "OKORO ONYENUCHEYA",
          "dateCreated": "2023-02-22T16:10:09.093087",
          "imageUrl": null,
          "phoneNumber": "08130017557",
          "email": "OKOROONYENUCHEYA@gmail.com",
          "designation": "Collector",
          "approvalStatus": "Approved",
          "staffStatus": "Adhoc",
          "workFrameTypes": "NoFrame",
          "stateCode": null,
          "locName": null,
          "locCode": null,
          "originLgaCode": null,
          "clientId": 2,
          "clientName": "National Population Commission NPC",
          "originLgaName": null,
          "assignedCountry": "NIGERIA",
          "assignedLgaCode": "577",
          "assignedState": "EBONYI",
          "assignedLga": "ABAKALIKI",
          "lastDateModified": null
        }
      
      
]