function voyageRisk (voyage) {
    let result = 1;
    if (voyage.length > 4) {
        result += 2;
    }
    if (voyage.length > 8) {
        result += voyage.length - 8;
    }
    if ([
        'china',
        'east-indies',
    ].includes(voyage.zone)) {
        result += 4;
    }
    return Math.max(result, 0);
}

function hasChina (history) {
    return history.some(v => 'china' === v.zone);
}

function isChinaZoneAndHasChina(voyage, history) {
    return isChinaZone(voyage) && hasChina(history);
}

function captainHistoryRisk (voyage, history) {
    let result = history.length < 5 ? 5 : 1 ;
    result += history.filter(v => v.profit < 0).length;
    result += isChinaZoneAndHasChina(voyage,history) ? -2 : 0 ;
    return Math.max(result, 0);
}

function isChinaZone(voyage) {
    return voyage.zone === 'china';
}

function isChinaZoneOrEastIndies(voyage) {
    return isChinaZone(voyage) || voyage.zone === 'east-indies'

}

function voyageProfitFactor (voyage, history) {
    let result = (isChinaZoneOrEastIndies(voyage)) ? 3 : 2;
    if (isChinaZoneAndHasChina(voyage, history)) {

        result += history.length >10 ? 4 : 3;
        result += (voyage.length >12 && voyage.length <18) ? 1: 0;

    }
    else {

        result += history.length >8 ? 1 : 0;
        result += voyage.length >14 ? -1 : 0;

    }
    return result;
}

function rating (voyage, history) {
    const vpf = voyageProfitFactor(voyage, history);
    const vr = voyageRisk(voyage);
    const chr = captainHistoryRisk(voyage, history);
    if (vpf * 3 > (vr + chr * 2)) {
        return 'A';
    }
    else {
        return 'B';
    }
}

const voyage = {
    zone: 'west-indies',
    length: 10,
};
const history = [
    {
        zone: 'east-indies',
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
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);

module.exports = {
    voyageRisk,
    captainHistoryRisk,
    voyageProfitFactor,
    rating
};

