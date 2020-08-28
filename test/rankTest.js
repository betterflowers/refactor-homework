const rankTest = require('ava');
const { voyageRisk,
    captainHistoryRisk,
    voyageProfitFactor,
    rating} = require('../src/rank');

rankTest('test1: voyageRisk voyage.length < 4', t => {
    const voyage = {
        zone: 'west-indies',
        length: 3,
    };
    const result = voyageRisk(voyage);
    t.is(result,1 );
});

rankTest('test2: voyageRisk voyage.length < 4, voyage.zone = china ', t => {
    const voyage = {
        zone: 'china',
        length: 3,
    };
    const result = voyageRisk(voyage);
    t.is(result,5 );
});

rankTest('test3: voyageRisk voyage.length > 4,voyage.length <= 8, voyage.zone = china ', t => {
    const voyage = {
        zone: 'china',
        length: 5,
    };
    const result = voyageRisk(voyage);
    t.is(result,7 );
});
rankTest('test4: voyageRisk voyage.length > 4,voyage.length <= 8 ', t => {
    const voyage = {
        zone: 'west-indies',
        length: 5,
    };
    const result = voyageRisk(voyage);
    t.is(result,3 );
});
rankTest('test5: voyageRisk voyage.length > 8, voyage.zone = china ', t => {
    const voyage = {
        zone: 'china',
        length: 9,
    };
    const result = voyageRisk(voyage);
    t.is(result,8 );
});
rankTest('test6: voyageRisk voyage.length > 8 ', t => {
    const voyage = {
        zone: 'west-indies',
        length: 9,
    };
    const result = voyageRisk(voyage);
    t.is(result,4 );
});

rankTest('test1: captainHistoryRisk history.length < 5 vayage.zone !== china ', t => {
    const voyage = {
        zone: 'west-indies',
        length: 9,
    };
    const history = [
        {
            zone: 'easndies',
            profit: 5,
        },{
            zone: 'west-indies',
            profit: 15,
        },{
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];
    const result = captainHistoryRisk(voyage,history);
    t.is(result,6 );
});
rankTest('test2: captainHistoryRisk history.length < 5 vayage.zone === china history haschina ', t => {
    const voyage = {
        zone: 'china',
        length: 9,
    };
    const history = [
        {
            zone: 'easndies',
            profit: 5,
        },{
            zone: 'west-indies',
            profit: 15,
        },{
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];
    const result = captainHistoryRisk(voyage,history);
    t.is(result,4 );
});
rankTest('test3: captainHistoryRisk history.length < 5 vayage.zone === china history not haschina ', t => {
    const voyage = {
        zone: 'china',
        length: 9,
    };
    const history = [
        {
            zone: 'easndies',
            profit: 5,
        },{
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];
    const result = captainHistoryRisk(voyage,history);
    t.is(result,5 );
});
rankTest('test4: captainHistoryRisk history.length > =5 vayage.zone !== china ', t => {
    const voyage = {
        zone: 'west-indies',
        length: 9,
    };
    const history = [
        {
            zone: 'easndies',
            profit: 5,
        },{
            zone: 'west-indies',
            profit: 15,
        },{
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-asia',
            profit: 7,
        },
    ];
    const result = captainHistoryRisk(voyage,history);
    t.is(result,2 );
});
rankTest('test5: captainHistoryRisk history.length > =5 vayage.zone === china ', t => {
    const voyage = {
        zone: 'china',
        length: 9,
    };
    const history = [
        {
            zone: 'easndies',
            profit: 5,
        },{
            zone: 'west-indies',
            profit: 15,
        },{
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-asia',
            profit: 7,
        },
    ];
    const result = captainHistoryRisk(voyage,history);
    t.is(result,0 );
});
rankTest('test5: captainHistoryRisk history.length > =5 vayage.zone === china history not haschina', t => {
    const voyage = {
        zone: 'china',
        length: 9,
    };
    const history = [
        {
            zone: 'easndies',
            profit: 5,
        },{
            zone: 'west-indies',
            profit: 15,
        },{
            zone: 'canada',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-asia',
            profit: 7,
        },
    ];
    const result = captainHistoryRisk(voyage,history);
    t.is(result,2 );
});


rankTest('test1 : voyageProfitFactor history length < 10 and zone==china and hasChina and voyage length < 12', t => {
    const voyage = {
        zone: 'china',
        length: 10,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'china',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];

    const result = voyageProfitFactor(voyage, history)

    t.is(result, 6);
})

rankTest('test2 : voyageProfitFactor history length < 10 and zone==china and hasChina and voyage length > 12 but < 18', t => {
    const voyage = {
        zone: 'china',
        length: 13,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'china',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];

    const result = voyageProfitFactor(voyage, history)

    t.is(result, 7);
})

rankTest('test3 : voyageProfitFactor history length < 10 and zone==china and hasChina and voyage length > 18', t => {
    const voyage = {
        zone: 'china',
        length: 19,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'china',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];

    const result = voyageProfitFactor(voyage, history)

    t.is(result, 6);
})

rankTest('test4 : voyageProfitFactor history length > 10 and zone==china and hasChina and voyage length > 18', t => {
    const voyage = {
        zone: 'china',
        length: 19,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'china',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'china',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];

    const result = voyageProfitFactor(voyage, history)

    t.is(result, 7);
})

rankTest('test5 : voyageProfitFactor history length < 10 and zone==china and has no China and history.length < 8 and voyage.length > 14', t => {
    const voyage = {
        zone: 'china',
        length: 15,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'east-indies',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];

    const result = voyageProfitFactor(voyage, history)

    t.is(result, 2);
})

rankTest('test6 : voyageProfitFactor history length < 10 and zone==china and has no China and history.length > 8 and voyage.length = 14', t => {
    const voyage = {
        zone: 'china',
        length: 14,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'east-indies',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];

    const result = voyageProfitFactor(voyage, history)

    t.is(result, 4);
})

rankTest('test7 : voyageProfitFactor history length < 10 and zone==east-indies and has no China and history.length > 8 and voyage.length = 14', t => {
    const voyage = {
        zone: 'east-indies',
        length: 14,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'east-indies',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];

    const result = voyageProfitFactor(voyage, history)

    t.is(result, 4);
})

rankTest('test8 : voyageProfitFactor history length < 10 and zone==west-indies and has no China and history.length > 8 and voyage.length = 14', t => {
    const voyage = {
        zone: 'west-indies',
        length: 14,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'east-indies',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];

    const result = voyageProfitFactor(voyage, history)

    t.is(result, 3);
})