export function checkConfDetails(info,) {
    if (info.nameOfConference === "" ||
        info.venueOfConference === "" ||
        info.paperInConference === "" ||
        info.financialSupport === "") {
        return false;
    }
    return true;
}
export function checkGenInfo(mobile, account)
{
}
export function checkFinances( travel, food, stay, data) {
    var totalFinance = travel + food + stay;
    data.forEach(obj => {
        totalFinance += obj.amount;
    });
    return totalFinance;
}

export function checkConferenceTime(start, end)
{
    const s = new Date(start);
    const e = new Date(end);
    if(s-e < 0)
    {
        window.alert("Please Check Conference Duration.")
        return false;
    }
    return true;
}
export function checkLeaveTime(start, end)
{
    const s = new Date(start);
    const e = new Date(end);
    if(s-e < 0)
    {
        window.alert("Please Check your Duty Leave Duration.")
        return false;
    }
    return true;
}