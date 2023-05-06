export function checkConfDetails(info,) {
    if (info.nameOfConference === "" ||
        info.venueOfConference === "" ||
        info.paperInConference === "" ||
        info.financialSupport === "") {
        return false;
    }
    return true;
}

export function checkGenInfo(mobile, account) {
}

export function checkFinances(travel, food, stay, data) {
    var totalFinance = travel + food + stay;
    data.forEach(obj => {
        totalFinance += obj.amount;
    });
    return totalFinance;
}

export function checkConferenceTime(start, end) {
    const s = new Date(start);
    const e = new Date(end);
    if (e - s <= 0) {
        window.alert("Please Check Conference Duration.")
        return false;
    }
    return true;
}

export function checkLeaveTime(start, end) {
    const s = new Date(start);
    const e = new Date(end);
    if (e - s <= 0) {
        window.alert("Please Check your Duty Leave Duration.")
        return false;
    }
    return true;
}

export function checkConfAndLeaveTime(sc, ec, sl, el) {
    const stc = new Date(sc);
    const etc = new Date(ec);
    const slc = new Date(sl);
    const elc = new Date(el);

    if ((stc - slc >= 0) && (elc - etc >= 0)) {
        window.alert("Please Check your Conference and Duty Leave Time");
        return false;
    }
    return true;

}