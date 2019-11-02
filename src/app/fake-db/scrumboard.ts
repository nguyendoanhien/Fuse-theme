export class ScrumboardFakeDb
{
    public static boards = [
        {
            'id'      : '32gfhaf2',
            'name'    : 'ACME Frontend Application',
            'uri'     : 'acme-frontend-application',
            'settings': {
                'color'          : 'fuse-dark',
                'subscribed'     : false,
                'cardCoverImages': true
            },
            'lists'   : [
                {
                    'id'     : '56027cf5a2ca3839a5d36103',
                    'name'   : 'Design',
                    'idCards': [
                        '5603a2a3cab0c8300f6096b3',
                        '44d1.2b51ea6cc2b5d.21f4a3412e857.8ffa2d8b44ad9.ac87215ed53a1.67d4921ad8f8d.9f318bcb2'
                    ]
                },
                {
                    'id'     : '56127cf2a2ca3539g7d36103',
                    'name'   : 'Development',
                    'idCards': [
                        '2837273da9b93dd84243s0f9',
                        '5787b7e4740c57bf0dffd5b6',
                        '5637273da9b93bb84743a0f9',
                        '7987.9740ba532b0d4.f9d12243f7362.507c0738dc561.87fba0a03df6e.75e6508cacf10.7a9835b54'
                    ]
                },
                {
                    'id'     : 'faf244627326f1249525763d',
                    'name'   : 'Upcoming Features',
                    'idCards': [
                        'd9005a4b89ed2aadca48a6ad',
                        'f6b9d7a9247e5d794a081927',
                        '80ed.24ad3b18e2668.f28fbbceeeff9.5a834620a42f1.5909be19a2bf2.6c4a54947ce2d.da356b0c1',
                        '0ad2.7862f947bc456.f42b446df54cb.d1dd9e93601a1.9deb1406d1404.0b3c278fc7001.733341b42',
                        'bad3.51be8ad33acaf.9540ecb37f7e8.6bee596cfe7d3.44c68bee289c4.b96ed0b9f0af7.e14846035'
                    ]
                },
                {
                    'id'     : 'ad7d.9fffac5dff412.c83bca6853767.8fd7549b2b1ca.ceda8a01774c4.a5cf3976e87e4.ce79eeeea',
                    'name'   : 'Known Bugs',
                    'idCards': [
                        'acc6.9c673cd2f5e35.521e91d8d5991.4b2a95e0539d1.027930c0743c5.7ad1ea7bea476.e8fbe6347',
                        '3279.3d69b40cc0b75.690252b6bea08.1e1789b0b7c2e.2f264b8661ce2.84d5f56910e23.429be5e8a',
                        'ba01.8e1a43f92a03a.0022bd5cbb9ba.275c64d911d8c.880e0846a3966.f75ff43e53ad.48ad612e7'
                    ]
                }
            ],
            'cards'   : [
                {
                    'id'               : '2837273da9b93dd84243s0f9',
                    'name'             : 'Update generators',
                    'description'      : 'Current generator doesn\'t support Node.js 6 and above.',
                    'idAttachmentCover': '',
                    'idMembers'        : [
                        '26027s1930450d8bf7b10828'
                    ],
                    'idLabels'         : [
                        '26022e4129ad3a5sc28b36cd'
                    ],
                    'attachments'      : [],
                    'subscribed'       : false,
                    'checklists'       : [],
                    'checkItems'       : 0,
                    'checkItemsChecked': 0,
                    'comments'         : [
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message' : 'AngularCLI could be a nice alternative.',
                            'time'    : 'now'
                        }
                    ],
                    'activities'       : [],
                    'due'              : null
                },
                {
                    'id'               : '5603a2a3cab0c8300f6096b3',
                    'name'             : 'Change background colors',
                    'description'      : '',
                    'idAttachmentCover': '67027cahbe3b52ecf2dc631c',
                    'idMembers'        : [
                        '76027g1930450d8bf7b10958'
                    ],
                    'idLabels'         : [
                        '56027e4119ad3a5dc28b36cd',
                        '5640635e19ad3a5dc21416b2'
                    ],
                    'attachments'      : [
                        {
                            'id'  : '67027cahbe3b52ecf2dc631c',
                            'name': 'mail.jpg',
                            'src' : 'assets/images/scrumboard/mail.jpg',
                            'time': 'Nov 3 at 15:22AM',
                            'type': 'image'
                        },
                        {
                            'id'  : '56027cfcbe1b72ecf1fc452a',
                            'name': 'calendar.jpg',
                            'src' : 'assets/images/scrumboard/calendar.jpg',
                            'time': 'Nov 1 at 12:34PM',
                            'type': 'image'
                        }
                    ],
                    'subscribed'       : true,
                    'checklists'       : [
                        {
                            'id'               : '63021cfdbe1x72wcf1fc451v',
                            'name'             : 'Checklist',
                            'checkItemsChecked': 1,
                            'checkItems'       : [
                                {
                                    'name'   : 'Implement a calendar library',
                                    'checked': false
                                },
                                {
                                    'name'   : 'Replace event colors with Material Design colors',
                                    'checked': true
                                },
                                {
                                    'name'   : 'Replace icons with Material Design icons',
                                    'checked': false
                                },
                                {
                                    'name'   : 'Use moment.js',
                                    'checked': false
                                }
                            ]
                        },
                        {
                            'name'             : 'Checklist 2',
                            'id'               : '74031cfdbe1x72wcz1dc166z',
                            'checkItemsChecked': 1,
                            'checkItems'       : [
                                {
                                    'name'   : 'Replace event colors with Material Design colors',
                                    'checked': true
                                },
                                {
                                    'name'   : 'Replace icons with Material Design icons',
                                    'checked': false
                                },
                                {
                                    'name'   : 'Use moment.js',
                                    'checked': false
                                }
                            ]
                        }
                    ],
                    'checkItems'       : 7,
                    'checkItemsChecked': 2,
                    'comments'         : [
                        {
                            'idMember': '56027c1930450d8bf7b10758',
                            'message' : 'We should be able to add moment.js without any problems',
                            'time'    : '12 mins. ago'
                        },
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message' : 'I added a link for a page that might help us deciding the colors',
                            'time'    : '30 mins. ago'
                        }
                    ],
                    'activities'       : [
                        {
                            'idMember': '56027c1930450d8bf7b10758',
                            'message' : 'added a comment',
                            'time'    : '12 mins. ago'
                        },
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message' : 'added a comment',
                            'time'    : '30 mins. ago'
                        },
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message' : 'attached a link',
                            'time'    : '45 mins. ago'
                        }
                    ],
                    'due'              : '2017-08-29T10:16:34.000Z'
                },
                {
                    'id'               : '5637273da9b93bb84743a0f9',
                    'name'             : 'Fix splash screen bugs',
                    'description'      : '',
                    'idAttachmentCover': '',
                    'idMembers'        : [
                        '56027c1930450d8bf7b10758'
                    ],
                    'idLabels'         : [
                        '5640635e19ad3a5dc21416b2'
                    ],
                    'attachments'      : [],
                    'subscribed'       : true,
                    'checklists'       : [],
                    'checkItems'       : 0,
                    'checkItemsChecked': 0,
                    'comments'         : [],
                    'activities'       : [],
                    'due'              : null
                },
                {
                    'id'               : 'd9005a4b89ed2aadca48a6ad',
                    'name'             : 'Add alternative authentication pages',
                    'description'      : '',
                    'idAttachmentCover': '',
                    'idMembers'        : [
                        '36027j1930450d8bf7b10158'
                    ],
                    'idLabels'         : [
                        '6540635g19ad3s5dc31412b2',
                        '56027e4119ad3a5dc28b36cd'
                    ],
                    'attachments'      : [],
                    'subscribed'       : false,
                    'checklists'       : [
                        {
                            'id'               : 'dbfb.99bd0ad37dabc.e05046f0c824d.18f26bb524c96.78bebc8488634.240c0ee6a5e45.4cb872965',
                            'name'             : 'Pages',
                            'checkItemsChecked': 2,
                            'checkItems'       : [
                                {
                                    'name'   : 'Login',
                                    'checked': true
                                },
                                {
                                    'name'   : 'Register',
                                    'checked': true
                                },
                                {
                                    'name'   : 'Lost Password',
                                    'checked': false
                                },
                                {
                                    'name'   : 'Recover Password',
                                    'checked': false
                                },
                                {
                                    'name'   : 'Activate Account',
                                    'checked': false
                                }
                            ]
                        }
                    ],
                    'checkItems'       : 5,
                    'checkItemsChecked': 2,
                    'comments'         : [],
                    'activities'       : [],
                    'due'              : null
                },
                {
                    'id'               : '5787b7e4740c57bf0dffd5b6',
                    'name'             : 'Fix the console',
                    'description'      : 'We need to fix the console asap!',
                    'idAttachmentCover': '',
                    'idMembers'        : [],
                    'idLabels'         : [
                        '26022e4129ad3a5sc28b36cd'
                    ],
                    'attachments'      : [],
                    'subscribed'       : true,
                    'checklists'       : [],
                    'checkItems'       : 0,
                    'checkItemsChecked': 0,
                    'comments'         : [
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message' : 'I\'m on it!',
                            'time'    : 'now'
                        }
                    ],
                    'activities'       : [],
                    'due'              : '2020-09-07T12:00:00.000Z'
                },
                {
                    'id'               : 'f6b9d7a9247e5d794a081927',
                    'name'             : 'New media player',
                    'description'      : '',
                    'idAttachmentCover': '',
                    'idMembers'        : [
                        '76027g1930450d8bf7b10958',
                        '56027c1930450d8bf7b10758',
                        '26027s1930450d8bf7b10828'
                    ],
                    'idLabels'         : [
                        '5640635e19ad3a5dc21416b2',
                        '6540635g19ad3s5dc31412b2'
                    ],
                    'attachments'      : [],
                    'subscribed'       : false,
                    'checklists'       : [],
                    'checkItems'       : 0,
                    'checkItemsChecked': 0,
                    'comments'         : [],
                    'activities'       : [],
                    'due'              : null
                },
                {
                    'id'               : 'acc6.9c673cd2f5e35.521e91d8d5991.4b2a95e0539d1.027930c0743c5.7ad1ea7bea476.e8fbe6347',
                    'name'             : 'Memory Leak',
                    'description'      : '',
                    'idAttachmentCover': '',
                    'idMembers'        : [
                        '36027j1930450d8bf7b10158'
                    ],
                    'idLabels'         : [
                        '26022e4129ad3a5sc28b36cd',
                        '5640635e19ad3a5dc21416b2'
                    ],
                    'attachments'      : [],
                    'subscribed'       : false,
                    'checklists'       : [],
                    'checkItems'       : 0,
                    'checkItemsChecked': 0,
                    'comments'         : [],
                    'activities'       : [],
                    'due'              : null
                },
                {
                    'id'               : '3279.3d69b40cc0b75.690252b6bea08.1e1789b0b7c2e.2f264b8661ce2.84d5f56910e23.429be5e8a',
                    'name'             : 'Broken toolbar on profile page',
                    'description'      : '',
                    'idAttachmentCover': '',
                    'idMembers'        : [
                        '26027s1930450d8bf7b10828'
                    ],
                    'idLabels'         : [
                        '26022e4129ad3a5sc28b36cd'
                    ],
                    'attachments'      : [],
                    'subscribed'       : false,
                    'checklists'       : [],
                    'checkItems'       : 0,
                    'checkItemsChecked': 0,
                    'comments'         : [
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message' : 'This should be a medium priority bug, shouldn\'t it?',
                            'time'    : 'now'
                        }
                    ],
                    'activities'       : [],
                    'due'              : null
                },
                {
                    'id'               : 'ba01.8e1a43f92a03a.0022bd5cbb9ba.275c64d911d8c.880e0846a3966.f75ff43e53ad.48ad612e7',
                    'name'             : 'Button hover style',
                    'description'      : 'If there are 3 or more buttons in certain page, weird flashing happens when you hover over the red ones.',
                    'idAttachmentCover': '',
                    'idMembers'        : [
                        '26027s1930450d8bf7b10828'
                    ],
                    'idLabels'         : [
                        '26022e4129ad3a5sc28b36cd',
                        '5640635e19ad3a5dc21416b2'
                    ],
                    'attachments'      : [],
                    'subscribed'       : true,
                    'checklists'       : [],
                    'checkItems'       : 0,
                    'checkItemsChecked': 0,
                    'comments'         : [],
                    'activities'       : [],
                    'due'              : '2017-03-08T09:00:00.000Z'
                },
                {
                    'id'               : '80ed.24ad3b18e2668.f28fbbceeeff9.5a834620a42f1.5909be19a2bf2.6c4a54947ce2d.da356b0c1',
                    'name'             : 'New header designs',
                    'description'      : '',
                    'idAttachmentCover': '12027cafbe3b52ecf2ef632c',
                    'idMembers'        : [],
                    'idLabels'         : [
                        '56027e4119ad3a5dc28b36cd',
                        '6540635g19ad3s5dc31412b2',
                        '5640635e19ad3a5dc21416b2'
                    ],
                    'attachments'      : [
                        {
                            'id'  : '12027cafbe3b52ecf2ef632c',
                            'name': 'header-.jpg',
                            'src' : 'assets/images/scrumboard/header-1.jpg',
                            'time': 'Nov 3 at 15:22AM',
                            'type': 'image'
                        },
                        {
                            'id'  : '55027ced1e1a12ecf1fced2a',
                            'name': 'header-2.jpg',
                            'src' : 'assets/images/scrumboard/header-2.jpg',
                            'time': 'Nov 1 at 12:34PM',
                            'type': 'image'
                        }
                    ],
                    'subscribed'       : false,
                    'checklists'       : [],
                    'checkItems'       : 0,
                    'checkItemsChecked': 0,
                    'comments'         : [
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message' : 'Currently we have two new designs ready to ship.',
                            'time'    : 'now'
                        }
                    ],
                    'activities'       : [],
                    'due'              : null
                },
                {
                    'id'               : '0ad2.7862f947bc456.f42b446df54cb.d1dd9e93601a1.9deb1406d1404.0b3c278fc7001.733341b42',
                    'name'             : 'Fixed footer',
                    'description'      : '',
                    'idAttachmentCover': '',
                    'idMembers'        : [
                        '26027s1930450d8bf7b10828',
                        '56027c1930450d8bf7b10758'
                    ],
                    'idLabels'         : [
                        '6540635g19ad3s5dc31412b2'
                    ],
                    'attachments'      : [],
                    'subscribed'       : true,
                    'checklists'       : [],
                    'checkItems'       : 0,
                    'checkItemsChecked': 0,
                    'comments'         : [],
                    'activities'       : [],
                    'due'              : null
                },
                {
                    'id'               : 'bad3.51be8ad33acaf.9540ecb37f7e8.6bee596cfe7d3.44c68bee289c4.b96ed0b9f0af7.e14846035',
                    'name'             : 'Collapsable navigation',
                    'description'      : '',
                    'idAttachmentCover': '',
                    'idMembers'        : [],
                    'idLabels'         : [
                        '6540635g19ad3s5dc31412b2'
                    ],
                    'attachments'      : [],
                    'subscribed'       : false,
                    'checklists'       : [],
                    'checkItems'       : 0,
                    'checkItemsChecked': 0,
                    'comments'         : [
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message' : 'I\'m not sure why we re-doing the navigation. The current collapsable navigation works flawlessly.',
                            'time'    : 'now'
                        }
                    ],
                    'activities'       : [],
                    'due'              : null
                },
                {
                    'id'               : '44d1.2b51ea6cc2b5d.21f4a3412e857.8ffa2d8b44ad9.ac87215ed53a1.67d4921ad8f8d.9f318bcb2',
                    'name'             : 'Mail app new layout',
                    'description'      : 'Current layout has lots of flaws in mobile. Outlook view should help with that.',
                    'idAttachmentCover': '',
                    'idMembers'        : [
                        '56027c1930450d8bf7b10758',
                        '26027s1930450d8bf7b10828',
                        '76027g1930450d8bf7b10958',
                        '36027j1930450d8bf7b10158'
                    ],
                    'idLabels'         : [
                        '56027e4119ad3a5dc28b36cd',
                        '26022e4129ad3a5sc28b36cd'
                    ],
                    'attachments'      : [],
                    'subscribed'       : false,
                    'checklists'       : [],
                    'checkItems'       : 0,
                    'checkItemsChecked': 0,
                    'comments'         : [],
                    'activities'       : [],
                    'due'              : null
                },
                {
                    'id'               : '7987.9740ba532b0d4.f9d12243f7362.507c0738dc561.87fba0a03df6e.75e6508cacf10.7a9835b54',
                    'name'             : 'API recover and monitoring',
                    'description'      : 'We need a service to monitor and recover failed APIs.',
                    'idAttachmentCover': '',
                    'idMembers'        : [
                        '36027j1930450d8bf7b10158',
                        '76027g1930450d8bf7b10958'
                    ],
                    'idLabels'         : [
                        '26022e4129ad3a5sc28b36cd',
                        '5640635e19ad3a5dc21416b2'
                    ],
                    'attachments'      : [],
                    'subscribed'       : true,
                    'checklists'       : [
                        {
                            'id'               : '6926.2b31d119e4a.889401e0ca7a0.13ad8ce2e569d.976e54e8b5d87.456afccd7e820.d6c77106a',
                            'name'             : 'API Monitoring',
                            'checkItemsChecked': 2,
                            'checkItems'       : [
                                {
                                    'name'   : 'Simple dashboard design',
                                    'checked': false
                                },
                                {
                                    'name'   : 'Should be able to see different time periods on the same dashboard',
                                    'checked': true
                                },
                                {
                                    'name'   : 'Different colors for different clusters',
                                    'checked': true
                                }
                            ]
                        },
                        {
                            'id'               : '7c22.5261c7924387f.248e8b1d32205.003f7a9f501d1.1d48dcdbe8b23.8099dcc5f75a7.29a966196',
                            'name'             : 'API Recovery',
                            'checkItemsChecked': 1,
                            'checkItems'       : [
                                {
                                    'name'   : 'Warning notifications to all developers',
                                    'checked': false
                                },
                                {
                                    'name'   : 'Immediate recovery options attached to the notifications',
                                    'checked': true
                                },
                                {
                                    'name'   : 'Backups every 6hours',
                                    'checked': false
                                }
                            ]
                        }
                    ],
                    'checkItems'       : 6,
                    'checkItemsChecked': 3,
                    'comments'         : [],
                    'activities'       : [],
                    'due'              : '2017-02-02T11:20:34.000Z'
                }
            ],
            'members' : [
                {
                    'id'    : '56027c1930450d8bf7b10758',
                    'name'  : 'Alice Freeman',
                    'avatar': 'assets/images/avatars/alice.jpg'
                },
                {
                    'id'    : '26027s1930450d8bf7b10828',
                    'name'  : 'Danielle Obrien',
                    'avatar': 'assets/images/avatars/danielle.jpg'
                },
                {
                    'id'    : '76027g1930450d8bf7b10958',
                    'name'  : 'James Lewis',
                    'avatar': 'assets/images/avatars/james.jpg'
                },
                {
                    'id'    : '36027j1930450d8bf7b10158',
                    'name'  : 'Vincent Munoz',
                    'avatar': 'assets/images/avatars/vincent.jpg'
                }
            ],
            'labels'  : [
                {
                    'id'   : '26022e4129ad3a5sc28b36cd',
                    'name' : 'High Priority',
                    'color': 'red-500'
                },
                {
                    'id'   : '56027e4119ad3a5dc28b36cd',
                    'name' : 'Design',
                    'color': 'orange-400'
                },
                {
                    'id'   : '5640635e19ad3a5dc21416b2',
                    'name' : 'App',
                    'color': 'blue-600'
                },
                {
                    'id'   : '6540635g19ad3s5dc31412b2',
                    'name' : 'Feature',
                    'color': 'green-400'
                }
            ]
        },
        {
            'id'      : '27cfcbe1',
            'name'    : 'ACME Backend Application',
            'uri'     : 'acme-backend-application',
            'settings': {
                'color'          : 'blue-grey',
                'subscribed'     : false,
                'cardCoverImages': true
            },
            'lists'   : [
                {
                    'id'     : '56027cf5a2ca3839a5d36103',
                    'name'   : 'Designs',
                    'idCards': [
                        '5603a2a3cab0c8300f6096b3'
                    ]
                },
                {
                    'id'     : '56127cf2a2ca3539g7d36103',
                    'name'   : 'Development',
                    'idCards': [
                        '5637273da9b93bb84743a0f9'
                    ]
                }
            ],
            'cards'   : [
                {
                    'id'               : '5603a2a3cab0c8300f6096b3',
                    'name'             : 'Calendar App Design',
                    'description'      : '',
                    'idAttachmentCover': '56027cfcbe1b72ecf1fc452a',
                    'idMembers'        : [
                        '56027c1930450d8bf7b10758',
                        '36027j1930450d8bf7b10158'
                    ],
                    'idLabels'         : [
                        '56027e4119ad3a5dc28b36cd',
                        '5640635e19ad3a5dc21416b2'
                    ],
                    'attachments'      : [
                        {
                            'id'  : '56027cfcbe1b72ecf1fc452a',
                            'name': 'calendar-app-design.jpg',
                            'src' : 'assets/images/scrumboard/calendar.jpg',
                            'time': 'Nov 1 at 12:34PM',
                            'type': 'image'
                        },
                        {
                            'id'  : '67027cahbe3b52ecf2dc631c',
                            'url' : 'assets/images/scrumboard/calendar.jpg',
                            'time': 'Nov 3 at 15:22AM',
                            'type': 'link'
                        }
                    ],
                    'subscribed'       : true,
                    'checklists'       : [
                        {
                            'id'               : '63021cfdbe1x72wcf1fc451v',
                            'name'             : 'Checklist',
                            'checkItemsChecked': 1,
                            'checkItems'       : [
                                {
                                    'name'   : 'Implement a calendar library',
                                    'checked': false
                                },
                                {
                                    'name'   : 'Replace event colors with Material Design colors',
                                    'checked': true
                                },
                                {
                                    'name'   : 'Replace icons with Material Design icons',
                                    'checked': false
                                },
                                {
                                    'name'   : 'Use moment.js',
                                    'checked': false
                                }
                            ]
                        },
                        {
                            'name'             : 'Checklist 2',
                            'id'               : '74031cfdbe1x72wcz1dc166z',
                            'checkItemsChecked': 1,
                            'checkItems'       : [
                                {
                                    'name'   : 'Replace event colors with Material Design colors',
                                    'checked': true
                                },
                                {
                                    'name'   : 'Replace icons with Material Design icons',
                                    'checked': false
                                },
                                {
                                    'name'   : 'Use moment.js',
                                    'checked': false
                                }
                            ]
                        }
                    ],
                    'checkItems'       : 7,
                    'checkItemsChecked': 2,
                    'comments'         : [
                        {
                            'idMember': '56027c1930450d8bf7b10758',
                            'message' : 'We should be able to add moment.js without any problems',
                            'time'    : '12 mins. ago'
                        },
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message' : 'I added a link for a page that might help us deciding the colors',
                            'time'    : '30 mins. ago'
                        }
                    ],
                    'activities'       : [
                        {
                            'idMember': '56027c1930450d8bf7b10758',
                            'message' : 'added a comment',
                            'time'    : '12 mins. ago'
                        },
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message' : 'added a comment',
                            'time'    : '30 mins. ago'
                        },
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message' : 'attached a link',
                            'time'    : '45 mins. ago'
                        }
                    ],
                    'due'              : null
                },
                {
                    'id'               : '5637273da9b93bb84743a0f9',
                    'name'             : 'Fix Splash Screen bugs',
                    'description'      : '',
                    'idAttachmentCover': '5603a2ae2bbd55bb2db57478',
                    'idMembers'        : [
                        '56027c1930450d8bf7b10758'
                    ],
                    'idLabels'         : [],
                    'attachments'      : [
                        {
                            'id'  : '5603a2ae2bbd55bb2db57478',
                            'name': 'mail-app-design.jpg',
                            'src' : 'assets/images/scrumboard/mail.jpg',
                            'time': 'Nov 1 at 12:34PM',
                            'type': 'image'
                        }
                    ],
                    'subscribed'       : true,
                    'checklists'       : [],
                    'checkItems'       : 0,
                    'checkItemsChecked': 0,
                    'comments'         : [],
                    'activities'       : [],
                    'due'              : null
                }
            ],
            'members' : [
                {
                    'id'    : '56027c1930450d8bf7b10758',
                    'name'  : 'Alice Freeman',
                    'avatar': 'assets/images/avatars/alice.jpg'
                },
                {
                    'id'    : '26027s1930450d8bf7b10828',
                    'name'  : 'Danielle Obrien',
                    'avatar': 'assets/images/avatars/danielle.jpg'
                },
                {
                    'id'    : '76027g1930450d8bf7b10958',
                    'name'  : 'James Lewis',
                    'avatar': 'assets/images/avatars/james.jpg'
                },
                {
                    'id'    : '36027j1930450d8bf7b10158',
                    'name'  : 'Vincent Munoz',
                    'avatar': 'assets/images/avatars/vincent.jpg'
                }
            ],
            'labels'  : [
                {
                    'id'   : '56027e4119ad3a5dc28b36cd',
                    'name' : 'Design',
                    'color': 'red-500'
                },
                {
                    'id'   : '5640635e19ad3a5dc21416b2',
                    'name' : 'App',
                    'color': 'blue-500'
                },
                {
                    'id'   : '6540635g19ad3s5dc31412b2',
                    'name' : 'Feature',
                    'color': 'green-400'
                }
            ]
        }
    ];
}
