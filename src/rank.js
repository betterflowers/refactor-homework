function getIncludesVoyageZoneResult(voyage, result) {
    if ([
        'china',
        'east-indies',
    ].includes(voyage.zone)) {
        result += 4;
    }
    return result;
}

function voyageRisk (voyage) {
    let result = 1;
    if (voyage.length > 4) {
        result += 2;
    }
    if (voyage.length > 8) {
        result += voyage.length - 8;
    }
    result = getIncludesVoyageZoneResult(voyage, result);
    return Math.max(result, 0);
}

function hasChina (history) {
    return history.some(v => 'china' === v.zone);
}

function isVoyageZoneChinaAndHasChina(voyage, history) {
    return voyage.zone === 'china' && hasChina(history);
}

function getHistoryFilterResult(history) {
    return history.filter(v => v.profit < 0).length;
}

function captainHistoryRisk (voyage, history) {
    let result = 1;
    if (history.length < 5) {
        result += 4;
    }
    result += getHistoryFilterResult(history);
    if (isVoyageZoneChinaAndHasChina(voyage, history)) {
        result -= 2;
    }
    return Math.max(result, 0);
}

function getChinaAndHasChinaResult(voyage, history, result) {
    if (isVoyageZoneChinaAndHasChina(voyage, history)) {
        result += 3;
        if (history.length > 10 || voyage.length > 12) {
            result += 1;
        }
        if (voyage.length > 18) {
            result -= 1;
        }
    } else {
        if (history.length > 8) {
            result += 1;
        }
        if (voyage.length > 14) {
            result -= 1;
        }
    }
    return result;
}

function voyageProfitFactor (voyage, history) {
    let result = 2;
    if (voyage.zone === 'china' || voyage.zone === 'east-indies') {
        result += 1;
    }
    result = getChinaAndHasChinaResult(voyage, history, result);
    return result;
}

function getReturnValue(vpf, vr, chr) {
    if (vpf * 3 > (vr + chr * 2)) {
        return 'A';
    } else {
        return 'B';
    }
}

function rating (voyage, history) {
    const vpf = voyageProfitFactor(voyage, history);
    const vr = voyageRisk(voyage);
    const chr = captainHistoryRisk(voyage, history);
    return getReturnValue(vpf, vr, chr);
}

module.exports = {
    voyageRisk,
};

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
