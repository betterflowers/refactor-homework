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
