export interface FormDataRequest {
    name: string,
    contact: string,
    selected: string,
    length: string,
    width: string,
    chickens: string,
    salary: string,
    shedType: string,
    cageType: string
}

export interface FormData {
    personalInfo: string,
    namePlaceholder: string,
    contactPlaceholder: string,
    levelsQuestion: string,
    rowDimensions: string,
    lengthPlaceholder: string,
    widthPlaceholder: string,
    totalChickens: string,
    chickensPlaceholder: string,
    salaries: string,
    salaryPlaceholder: string,
    shedType: string,
    semiControlled: string,
    batterySheds: string,
    floor: string,
    cageType: string,
    aTypeCage: string,
    hTypeCage: string,
}

export interface ResultData {
    title: string,
    currency: string,
    feedMachinePrice: string,
    roi: string,
    dispenseTime: string,
    projectCompletionTime: string,
    maintenance: string,
    monthlyLoss: string,
    feedWasted: string,
    electricityUsage: string,
    calculateAgain: string,
    months: string,
    hour: string,
    minutes: string,
}