const cases = [{
    id: 1,
    name: 'Case 1',
    summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    priority: 5,
    dueDate: new Date(),
    owner: -100,
    collabrators: [-101],
    tags: [],
    dateUpdated: new Date(),
    dateCreated: new Date(),
    status: 0,
    incidentDate: null
}, ]

const getAll = (req, res) => {
    res.send(cases);
}

const getOpenCases = (req, res) => {
    res.send(cases);
}

const getIncidents = (req, res) => {
    res.send(cases);
}

module.exports = {
    getAll,
    getOpenCases,
    getIncidents
}